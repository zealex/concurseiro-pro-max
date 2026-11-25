/** Envio de e-mails transacionais (Resend, via HTTP). */

export interface Email {
  para: string;
  assunto: string;
  html: string;
  texto: string;
}

export interface Mensageiro {
  enviar(email: Email): Promise<void>;
}

export function criarMensageiroResend(apiKey: string, remetente: string): Mensageiro {
  return {
    async enviar(e) {
      const resp = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: remetente, to: [e.para], subject: e.assunto, html: e.html, text: e.texto }),
        signal: AbortSignal.timeout(10_000),
      });
      if (!resp.ok) throw new Error(`Resend respondeu ${resp.status}: ${(await resp.text()).slice(0, 300)}`);
    },
  };
}

/** Sem provedor configurado (desenvolvimento): mostra o e-mail no log. */
export function criarMensageiroConsole(): Mensageiro {
  return {
    async enviar(e) {
      console.log(`[email] para ${e.para} — ${e.assunto}\n${e.texto}`);
    },
  };
}

/** Não bloqueia a resposta da API (evita revelar, pelo tempo, se o e-mail existe) e registra falhas. */
export function enviarEmSegundoPlano(m: Mensageiro, e: Email): void {
  void m.enviar(e).catch((erro) => console.error(`[email] falha ao enviar "${e.assunto}" para ${e.para.replace(/(.).+(@.+)/, '$1***$2')}`, erro));
}
