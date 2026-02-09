import { useContext } from 'react'
import { TemaContexto } from '../contextos/TemaContexto'

export const useTema = () => {
  const contexto = useContext(TemaContexto)
  if (!contexto) {
    throw new Error('useTema deve ser usado dentro de TemaProvider')
  }
  return contexto
}
