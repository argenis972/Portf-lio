import { useIdioma } from '../../hooks/useIdioma'
import type { Idioma } from '../../tipos'

const idiomas: { codigo: Idioma; bandeira: string; nome: string }[] = [
  { codigo: 'pt-BR', bandeira: '🇧🇷', nome: 'PT' },
  { codigo: 'es', bandeira: '🇪🇸', nome: 'ES' },
  { codigo: 'en', bandeira: '🇺🇸', nome: 'EN' },
]

export const SeletorIdioma = () => {
  const { idioma, mudarIdioma } = useIdioma()

  return (
    <div className="flex gap-1">
      {idiomas.map((i) => (
        <button
          key={i.codigo}
          onClick={() => mudarIdioma(i.codigo)}
          className={`px-2 py-1 rounded transition-colors duration-300 ${
            idioma === i.codigo
              ? 'bg-blue-500 text-white'
              : 'hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
          aria-label={`Mudar para ${i.nome}`}
          title={i.nome}
        >
          <span className="text-lg">{i.bandeira}</span>
        </button>
      ))}
    </div>
  )
}
