import { useIdioma } from '../../hooks/useIdioma'
import { useAPI } from '../../hooks/useAPI'
import { portafolioAPI } from '../../servicos/portafolioAPI'
import type { CategoriaStack } from '../../tipos'

const emojisCategoria: Record<CategoriaStack, string> = {
  backend: '⚙️',
  banco_dados: '💾',
  frontend: '🎨',
  devops: '🚀',
}

export const Stack = () => {
  const { t } = useIdioma()
  const { dados, carregando, erro } = useAPI(portafolioAPI.obterStack)

  if (carregando) {
    return (
      <section id="stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">{t.comum.carregando}</p>
        </div>
      </section>
    )
  }

  if (erro || !dados) {
    return (
      <section id="stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-red-600 dark:text-red-400">{t.comum.erro}</p>
        </div>
      </section>
    )
  }

  const categorias = Object.keys(dados.por_categoria) as CategoriaStack[]

  return (
    <section id="stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.stack.titulo}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t.stack.subtitulo}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((categoria) => (
            <div
              key={categoria}
              className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-lg transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{emojisCategoria[categoria]}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t.stack.categorias[categoria]}
                </h3>
              </div>

              <div className="space-y-4">
                {dados.por_categoria[categoria].map((item) => {
                  // Convert nivel to percentage: nivel 3 = 65%, nivel 4 = 80%
                  const nivelToPercentage = (nivel: number): number => {
                    if (nivel === 3) return 65
                    if (nivel === 4) return 80
                    return (nivel / 5) * 100
                  }
                  
                  return (
                    <div key={item.nome}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {item.nome}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {nivelToPercentage(item.nivel)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${nivelToPercentage(item.nivel)}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
