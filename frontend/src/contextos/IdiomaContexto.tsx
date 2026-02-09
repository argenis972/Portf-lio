import { createContext, useState, ReactNode } from 'react'
import type { Idioma } from '../tipos'
import { traducoes, type Traducoes } from '../dados/traducoes'

interface IdiomaContextoTipo {
  idioma: Idioma
  t: Traducoes
  mudarIdioma: (novoIdioma: Idioma) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const IdiomaContexto = createContext<IdiomaContextoTipo | undefined>(undefined)

export const IdiomaProvider = ({ children }: { children: ReactNode }) => {
  const [idioma, setIdioma] = useState<Idioma>(() => {
    const idiomaArmazenado = localStorage.getItem('idioma') as Idioma | null
    return idiomaArmazenado || 'pt-BR'
  })

  const mudarIdioma = (novoIdioma: Idioma) => {
    setIdioma(novoIdioma)
    localStorage.setItem('idioma', novoIdioma)
  }

  const t = traducoes[idioma]

  return (
    <IdiomaContexto.Provider value={{ idioma, t, mudarIdioma }}>
      {children}
    </IdiomaContexto.Provider>
  )
}
