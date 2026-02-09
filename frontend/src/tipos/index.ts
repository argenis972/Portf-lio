export interface DadosSobre {
  nome: string
  titulo: string
  localizacao: string
  email: string
  telefone: string
  github: string
  linkedin: string
  descricao: string
  disponibilidade: string
}

export interface ProjetoResumo {
  id: string
  nome: string
  descricao_curta: string
  tecnologias: string[]
  destaque: boolean
}

export interface ProjetoDetalhado extends ProjetoResumo {
  descricao_completa: string
  funcionalidades: string[]
  aprendizados: string[]
  repositorio: string | null
  demo: string | null
}

export interface RespostaProjetos {
  projetos: ProjetoResumo[]
  total: number
}

export type CategoriaStack = 'backend' | 'banco_dados' | 'frontend' | 'devops'

export interface ItemStack {
  nome: string
  categoria: CategoriaStack
  nivel: number
  icone: string | null
}

export interface RespostaStack {
  stack: ItemStack[]
  por_categoria: Record<string, ItemStack[]>
}

export interface Experiencia {
  id: string
  cargo: string
  empresa: string
  localizacao: string
  data_inicio: string
  data_fim: string | null
  descricao: string
  tecnologias: string[]
  atual: boolean
}

export interface RespostaExperiencias {
  experiencias: Experiencia[]
  total: number
}

export interface DadosContato {
  nome: string
  email: string
  assunto: string
  mensagem: string
}

export interface RespostaContato {
  sucesso: boolean
  mensagem: string
}

export type Idioma = 'pt-BR' | 'es' | 'en'
export type Tema = 'light' | 'dark'
