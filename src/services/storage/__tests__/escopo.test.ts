import { beforeEach, describe, expect, it } from 'vitest';
import { aguardarEscritas, definirBackend, estadoEscopo, podeGravar } from '@/services/storage/escopo';
import { chaveGlobal, chaveNoEscopo, ESCOPO_LEGADO, ESCOPO_LOCAL, escopoUsuario, pertenceAoEscopo } from '@/services/storage/keys';
import { migrarDeLocalStorage, type FonteLocalStorage } from '@/services/storage/migracaoLocalStorage';
import { criarBackendMemoria, type BackendKV } from '@/services/storage/tipos';
import { abrirEscopoStores, fecharEscopoStores, limparEscopoAtual } from '@/store/escopoStores';
import { useChecklistStore } from '@/store/useChecklistStore';
import { useSettingsStore } from '@/store/useSettingsStore';

const HOJE = '2026-11-25';

/** Backend em memória que conta gravações e pode falhar leituras de chaves escolhidas. */
function criarBackendEspiao(falharLeitura: (chave: string) => boolean = () => false) {
  const base = criarBackendMemoria();
  const gravacoes: string[] = [];
  const b: BackendKV & { dados: Map<string, string>; gravacoes: string[] } = {
    ...base,
    dados: base.dados,
    gravacoes,
    async getItem(chave) {
      if (falharLeitura(chave)) throw new Error(`leitura falhou: ${chave}`);
      return base.getItem(chave);
    },
    async setItem(chave, valor) {
      gravacoes.push(chave);
      return base.setItem(chave, valor);
    },
  };
  return b;
}

let backend: ReturnType<typeof criarBackendEspiao>;

beforeEach(async () => {
  await fecharEscopoStores();
  backend = criarBackendEspiao();
  definirBackend(backend);
});

describe('chaves e escopos', () => {
  it('monta o prefixo de cada escopo', () => {
    expect(chaveNoEscopo(ESCOPO_LEGADO, 'settings')).toBe('cpm:v1:settings');
    expect(chaveNoEscopo(ESCOPO_LOCAL, 'settings')).toBe('cpm:v1:local:settings');
    expect(chaveNoEscopo(escopoUsuario('abc_123'), 'settings')).toBe('cpm:v1:u:abc_123:settings');
    expect(chaveGlobal('conta')).toBe('cpm:v1:global:conta');
  });

  it('o escopo legado não reivindica chaves de usuários, do modo local nem globais', () => {
    expect(pertenceAoEscopo('cpm:v1:settings', ESCOPO_LEGADO)).toBe(true);
    expect(pertenceAoEscopo('cpm:v1:u:abc:settings', ESCOPO_LEGADO)).toBe(false);
    expect(pertenceAoEscopo('cpm:v1:local:settings', ESCOPO_LEGADO)).toBe(false);
    expect(pertenceAoEscopo('cpm:v1:global:conta', ESCOPO_LEGADO)).toBe(false);
    expect(pertenceAoEscopo('cpm:v1:u:abc:settings', escopoUsuario('abc'))).toBe(true);
    expect(pertenceAoEscopo('cpm:v1:u:abcd:settings', escopoUsuario('abc'))).toBe(false);
  });

  it('rejeita identificadores de usuário que quebrariam o layout das chaves', () => {
    expect(() => escopoUsuario('a:b')).toThrow();
    expect(() => escopoUsuario('')).toThrow();
  });
});

describe('troca de escopo', () => {
  it('dados de um usuário nunca aparecem no escopo de outro', async () => {
    expect((await abrirEscopoStores(escopoUsuario('ana'))).ok).toBe(true);
    useChecklistStore.getState().toggle('nr07-1', HOJE);
    expect(useChecklistStore.getState().marcados).toEqual({ 'nr07-1': HOJE });

    expect((await abrirEscopoStores(escopoUsuario('bia'))).ok).toBe(true);
    expect(useChecklistStore.getState().marcados).toEqual({});
    useChecklistStore.getState().toggle('nr15-2', HOJE);
    await aguardarEscritas();

    expect(backend.dados.get('cpm:v1:u:ana:checklist')).toContain('nr07-1');
    expect(backend.dados.get('cpm:v1:u:ana:checklist')).not.toContain('nr15-2');
    expect(backend.dados.get('cpm:v1:u:bia:checklist')).toContain('nr15-2');
    expect(backend.dados.get('cpm:v1:u:bia:checklist')).not.toContain('nr07-1');

    expect((await abrirEscopoStores(escopoUsuario('ana'))).ok).toBe(true);
    expect(useChecklistStore.getState().marcados).toEqual({ 'nr07-1': HOJE });
  });

  it('reabrir logo após gravar lê o valor novo (leitura sempre depois das gravações pendentes)', async () => {
    await abrirEscopoStores(escopoUsuario('ana'));
    useChecklistStore.getState().toggle('a', HOJE);
    useChecklistStore.getState().toggle('b', HOJE);
    await abrirEscopoStores(escopoUsuario('ana'));
    expect(useChecklistStore.getState().marcados).toEqual({ a: HOJE, b: HOJE });
  });

  it('sem escopo aberto nada é gravado', async () => {
    await fecharEscopoStores();
    useChecklistStore.getState().toggle('x', HOJE);
    await aguardarEscritas();
    expect(backend.gravacoes).toEqual([]);
  });

  it('fechar com "apagar" remove do aparelho os dados daquele escopo e limpa a memória', async () => {
    await abrirEscopoStores(escopoUsuario('ana'));
    useChecklistStore.getState().toggle('x', HOJE);
    await aguardarEscritas();
    backend.dados.set('cpm:v1:u:bia:checklist', '{"state":{"marcados":{}},"version":1}');

    await fecharEscopoStores({ apagar: true });
    expect([...backend.dados.keys()]).toEqual(['cpm:v1:u:bia:checklist']);
    expect(useChecklistStore.getState().marcados).toEqual({});
  });
});

describe('falha de leitura', () => {
  it('bloqueia o escopo e impede que os valores-padrão sobrescrevam os dados reais', async () => {
    const real = '{"state":{"sessoes":[{"id":"sq-1"}],"erros":[],"revisoes":[]},"version":3}';
    backend = criarBackendEspiao((chave) => chave.endsWith(':questoes'));
    backend.dados.set('cpm:v1:u:ana:questoes', real);
    definirBackend(backend);

    const r = await abrirEscopoStores(escopoUsuario('ana'));
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.falhas).toContain('questoes');
    expect(estadoEscopo()).toBe('bloqueado');
    expect(podeGravar()).toBe(false);

    useChecklistStore.getState().toggle('x', HOJE);
    useSettingsStore.getState().setTema('escuro');
    await aguardarEscritas();
    expect(backend.gravacoes).toEqual([]);
    expect(backend.dados.get('cpm:v1:u:ana:questoes')).toBe(real);
  });
});

describe('hidratação', () => {
  it('aplica as migrações de versão ao abrir o escopo e grava o resultado', async () => {
    backend.dados.set('cpm:v1:settings', JSON.stringify({ state: { trilha: 'hibrida', orcamentoMin: 240 }, version: 1 }));
    const r = await abrirEscopoStores(ESCOPO_LEGADO);
    expect(r.ok).toBe(true);
    expect(useSettingsStore.getState().trilha).toBe('generalista');
    await aguardarEscritas();
    expect(JSON.parse(backend.dados.get('cpm:v1:settings')!).version).toBe(2);
  });

  it('coalesce gravações seguidas da mesma chave (só a mais nova vai ao disco)', async () => {
    await abrirEscopoStores(escopoUsuario('ana'));
    backend.gravacoes.length = 0;
    for (const id of ['a', 'b', 'c', 'd', 'e']) useChecklistStore.getState().toggle(id, HOJE);
    await aguardarEscritas();
    const doChecklist = backend.gravacoes.filter((k) => k === 'cpm:v1:u:ana:checklist');
    expect(doChecklist.length).toBeLessThan(5);
    expect(Object.keys(JSON.parse(backend.dados.get('cpm:v1:u:ana:checklist')!).state.marcados)).toEqual(['a', 'b', 'c', 'd', 'e']);
  });
});

describe('"Apagar meu progresso"', () => {
  it('remove só as chaves do escopo atual', async () => {
    backend.dados.set('cpm:v1:settings', '{"state":{},"version":2}');
    backend.dados.set('cpm:v1:u:ana:settings', '{"state":{},"version":2}');
    backend.dados.set('cpm:v1:local:settings', '{"state":{},"version":2}');
    backend.dados.set('cpm:v1:global:conta', '{}');
    await abrirEscopoStores(ESCOPO_LEGADO);
    await aguardarEscritas();

    await limparEscopoAtual();
    expect([...backend.dados.keys()].sort()).toEqual(['cpm:v1:global:conta', 'cpm:v1:local:settings', 'cpm:v1:u:ana:settings']);
  });
});

describe('cópia única do localStorage antigo', () => {
  function fonte(inicial: Record<string, string>): FonteLocalStorage & { dados: Map<string, string> } {
    const dados = new Map(Object.entries(inicial));
    return { dados, chaves: () => [...dados.keys()], ler: (k) => dados.get(k) ?? null, remover: (k) => void dados.delete(k) };
  }

  it('copia as chaves do app e as remove da origem', async () => {
    const origem = fonte({ 'cpm:v1:settings': 's', 'cpm:v1:questoes': 'q', 'outra-coisa': 'x' });
    const destino = criarBackendMemoria();
    expect(await migrarDeLocalStorage(origem, destino)).toBe(2);
    expect(destino.dados.get('cpm:v1:settings')).toBe('s');
    expect(destino.dados.get('cpm:v1:questoes')).toBe('q');
    expect([...origem.dados.keys()]).toEqual(['outra-coisa']);
  });

  it('não sobrescreve um destino que já tem dados do app', async () => {
    const origem = fonte({ 'cpm:v1:settings': 'antigo' });
    const destino = criarBackendMemoria();
    destino.dados.set('cpm:v1:settings', 'novo');
    expect(await migrarDeLocalStorage(origem, destino)).toBe(0);
    expect(destino.dados.get('cpm:v1:settings')).toBe('novo');
    expect(origem.dados.get('cpm:v1:settings')).toBe('antigo');
  });
});

describe('primeiro login: adotar o progresso que já estava no aparelho', () => {
  it('move os dados de antes das contas para a conta nova e não deixa cópia solta', async () => {
    const { adotarDadosDoAparelho } = await import('@/services/auth/conta');
    backend.dados.set('cpm:v1:checklist', '{"state":{"marcados":{"a":"d"}},"version":1}');
    backend.dados.set('cpm:v1:global:conta', '{}');
    const n = await adotarDadosDoAparelho({ modo: 'usuario', userId: 'ana', email: 'a@x', nome: '', provedores: [], atualizadoEm: '' });
    expect(n).toBe(1);
    expect(backend.dados.get('cpm:v1:u:ana:checklist')).toContain('"a"');
    expect(backend.dados.has('cpm:v1:checklist')).toBe(false);
    expect(backend.dados.has('cpm:v1:global:conta')).toBe(true);
  });

  it('o modo sem conta tem prioridade sobre os dados legados', async () => {
    const { adotarDadosDoAparelho } = await import('@/services/auth/conta');
    backend.dados.set('cpm:v1:local:checklist', 'LOCAL');
    backend.dados.set('cpm:v1:checklist', 'LEGADO');
    await adotarDadosDoAparelho({ modo: 'usuario', userId: 'ana', email: '', nome: '', provedores: [], atualizadoEm: '' });
    expect(backend.dados.get('cpm:v1:u:ana:checklist')).toBe('LOCAL');
    expect(backend.dados.get('cpm:v1:checklist')).toBe('LEGADO');
  });

  it('se a conta já tem progresso neste aparelho, nada é movido', async () => {
    const { adotarDadosDoAparelho } = await import('@/services/auth/conta');
    backend.dados.set('cpm:v1:u:ana:checklist', 'DA_CONTA');
    backend.dados.set('cpm:v1:checklist', 'LEGADO');
    expect(await adotarDadosDoAparelho({ modo: 'usuario', userId: 'ana', email: '', nome: '', provedores: [], atualizadoEm: '' })).toBe(0);
    expect(backend.dados.get('cpm:v1:u:ana:checklist')).toBe('DA_CONTA');
    expect(backend.dados.get('cpm:v1:checklist')).toBe('LEGADO');
  });

  it('o retrato da conta sobrevive a reinícios e retrato corrompido vira "sem conta"', async () => {
    const { lerContaSalva, salvarConta } = await import('@/services/auth/conta');
    await salvarConta({ modo: 'local', atualizadoEm: '2026-11-25T00:00:00Z' });
    await aguardarEscritas();
    expect(await lerContaSalva()).toEqual({ modo: 'local', atualizadoEm: '2026-11-25T00:00:00Z' });
    backend.dados.set('cpm:v1:global:conta', '{"modo":"usuario"}');
    expect(await lerContaSalva()).toBeNull();
  });
});
