import { createContext, useEffect, useState, ReactNode } from 'react'
import type { Tema } from '../tipos'

interface TemaContextoTipo {
  tema: Tema
  alternarTema: () => void
}

export const TemaContexto = createContext<TemaContextoTipo | undefined>(undefined)

export const TemaProvider = ({ children }: { children: ReactNode }) => {
  const [tema, setTema] = useState<Tema>(() => {
    const temaArmazenado = localStorage.getItem('tema') as Tema | null
    return temaArmazenado || 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (tema === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('tema', tema)
  }, [tema])

  const alternarTema = () => {
    setTema(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <TemaContexto.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContexto.Provider>
  )
}
