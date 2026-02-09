import { useContext } from 'react'
import { IdiomaContexto } from '../contextos/IdiomaContexto'

export const useIdioma = () => {
  const contexto = useContext(IdiomaContexto)
  if (!contexto) {
    throw new Error('useIdioma deve ser usado dentro de IdiomaProvider')
  }
  return contexto
}
