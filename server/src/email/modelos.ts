import type { Email } from './enviar';

const escapar = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

function layout(titulo: string, paragrafos: string[], botao: { texto: string; url: string }, rodape: string): string {
  return `<!doctype html><html lang="pt-BR"><body style="margin:0;background:#f7f7f5;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#37352f">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:32px 16px">
<table role="presentation" width="100%" style="max-width:520px;background:#fff;border:1px solid #e9e9e7;border-radius:8px" cellpadding="0" cellspacing="0"><tr><td style="padding:28px">
<p style="margin:0 0 4px;font-size:13px;color:#787774">Concurseiro Pro Max</p>
<h1 style="margin:0 0 16px;font-size:20px">${escapar(titulo)}</h1>
${paragrafos.map((p) => `<p style="margin:0 0 12px;font-size:15px;line-height:1.5">${escapar(p)}</p>`).join('')}
<p style="margin:20px 0"><a href="${escapar(botao.url)}" style="display:inline-block;background:#2383e2;color:#fff;text-decoration:none;padding:10px 18px;border-radius:6px;font-size:15px">${escapar(botao.texto)}</a></p>
<p style="margin:0 0 8px;font-size:12px;color:#787774">Se o botão não funcionar, copie e cole este endereço no navegador:<br><span style="word-break:break-all">${escapar(botao.url)}</span></p>
<p style="margin:16px 0 0;font-size:12px;color:#9b9a97">${escapar(rodape)}</p>
</td></tr></table></td></tr></table></body></html>`;
}

export function emailVerificacao(para: string, nome: string, url: string): Email {
  const ola = nome ? `Olá, ${nome}!` : 'Olá!';
  return {
    para,
    assunto: 'Confirme seu e-mail no Concurseiro Pro Max',
    html: layout('Confirme seu e-mail', [ola, 'Falta só confirmar este endereço para ativar sua conta e guardar seu progresso na nuvem.'], { texto: 'Confirmar e-mail', url }, 'O link vale por 24 horas. Se você não criou esta conta, ignore este e-mail.'),
    texto: `${ola}\n\nConfirme seu e-mail para ativar sua conta no Concurseiro Pro Max:\n${url}\n\nO link vale por 24 horas. Se você não criou esta conta, ignore este e-mail.`,
  };
}

export function emailRedefinirSenha(para: string, url: string): Email {
  return {
    para,
    assunto: 'Redefinir sua senha do Concurseiro Pro Max',
    html: layout('Redefinir senha', ['Recebemos um pedido para redefinir a senha da sua conta.'], { texto: 'Escolher nova senha', url }, 'O link vale por 1 hora. Se você não pediu, ignore este e-mail: sua senha continua a mesma.'),
    texto: `Recebemos um pedido para redefinir a senha da sua conta no Concurseiro Pro Max.\n\nEscolha uma nova senha:\n${url}\n\nO link vale por 1 hora. Se você não pediu, ignore este e-mail.`,
  };
}
