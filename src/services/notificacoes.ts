/** Na web o aviso de fim do Pomodoro usa a Notification API do navegador (na própria tela de foco). */
export async function agendarFimDaFase(_terminaEm: number, _fase: 'foco' | 'pausa-curta' | 'pausa-longa'): Promise<void> {}

export async function cancelarFimDaFase(): Promise<void> {}
