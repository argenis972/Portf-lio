import { useState, useEffect } from 'react'

interface UseAPIResult<T> {
  dados: T | null
  carregando: boolean
  erro: string | null
}

export const useAPI = <T,>(fetcher: () => Promise<T>): UseAPIResult<T> => {
  const [dados, setDados] = useState<T | null>(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    const carregarDados = async () => {
      try {
        setCarregando(true)
        setErro(null)
        const resultado = await fetcher()
        setDados(resultado)
      } catch (err) {
        setErro(err instanceof Error ? err.message : 'Erro desconhecido')
      } finally {
        setCarregando(false)
      }
    }

    carregarDados()
  }, [])

  return { dados, carregando, erro }
}
