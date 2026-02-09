import type { DadosSobre, RespostaProjetos, RespostaStack, RespostaExperiencias } from '../tipos'

const BASE_URL = 'http://localhost:8000'

export const portafolioAPI = {
  obterSobre: (): Promise<DadosSobre> => 
    fetch(`${BASE_URL}/api/sobre`).then(r => r.json()),
  
  listarProjetos: (): Promise<RespostaProjetos> => 
    fetch(`${BASE_URL}/api/projetos`).then(r => r.json()),
  
  obterStack: (): Promise<RespostaStack> => 
    fetch(`${BASE_URL}/api/stack`).then(r => r.json()),
  
  listarExperiencias: (): Promise<RespostaExperiencias> => 
    fetch(`${BASE_URL}/api/experiencias`).then(r => r.json()),
}
