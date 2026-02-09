import type { DadosContato } from '../tipos'

const FORMSPREE_URL = 'https://formspree.io/f/xovbzrdn'

export const enviarMensagem = async (dados: DadosContato): Promise<boolean> => {
  const response = await fetch(FORMSPREE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  })
  return response.ok
}
