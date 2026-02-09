import { useIdioma } from '../../hooks/useIdioma'
import { useAPI } from '../../hooks/useAPI'
import { portafolioAPI } from '../../servicos/portafolioAPI'

export const Projetos = () => {
  const { t } = useIdioma()
  const { dados, carregando, erro } = useAPI(portafolioAPI.listarProjetos)

  if (carregando) {
    return (
      <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">{t.comum.carregando}</p>
        </div>
      </section>
    )
  }

  if (erro || !dados) {
    return (
      <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-red-600 dark:text-red-400">{t.comum.erro}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.projetos.titulo}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t.projetos.subtitulo}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dados.projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {projeto.destaque && (
                <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 dark:bg-blue-500 rounded-full mb-3">
                  ⭐ Destaque
                </span>
              )}

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {projeto.nome}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {projeto.descricao_curta}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t.projetos.tecnologias}:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projeto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                {projeto.repositorio && (
                  <a
                    href={projeto.repositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    {t.projetos.codigo}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
