import { useIdioma } from '../../hooks/useIdioma'
import { useAPI } from '../../hooks/useAPI'
import { portafolioAPI } from '../../servicos/portafolioAPI'
import { formatarPeriodo } from '../../utils/formatacao'

export const Experiencia = () => {
  const { t, idioma } = useIdioma()
  const { dados, carregando, erro } = useAPI(portafolioAPI.listarExperiencias)

  if (carregando) {
    return (
      <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">{t.comum.carregando}</p>
        </div>
      </section>
    )
  }

  if (erro || !dados) {
    return (
      <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-600 dark:text-red-400">{t.comum.erro}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.experiencia.titulo}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t.experiencia.subtitulo}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-600 dark:bg-blue-500" />

          <div className="space-y-12">
            {dados.experiencias.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-gray-50 dark:border-slate-800" />

                {/* Content - Uniform card design */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                  <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    {/* Cargo */}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {exp.cargo}
                    </h3>
                    
                    {/* Empresa */}
                    <p className="text-base font-medium text-gray-600 dark:text-gray-400 mb-2">
                      {exp.empresa}
                    </p>

                    {/* Período + Badge Atual */}
                    <div className="flex items-center gap-2 mb-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        📍 {exp.localizacao} • {formatarPeriodo(exp.data_inicio, exp.data_fim, idioma)}
                      </p>
                      {exp.atual && (
                        <span className="px-2 py-1 text-xs font-semibold text-white bg-green-600 dark:bg-green-500 rounded">
                          {t.experiencia.atual}
                        </span>
                      )}
                    </div>

                    {/* Horizontal divider */}
                    <hr className="border-gray-200 dark:border-slate-700 mb-4" />

                    {/* Description as bullet points */}
                    <ul className="text-gray-600 dark:text-gray-300 mb-4 space-y-1">
                      {exp.descricao.split(/\.\s+/).filter(item => item.trim()).map((item) => {
                        const trimmedItem = item.trim()
                        // Use first 20 chars as stable key
                        const key = `${exp.id}-${trimmedItem.substring(0, 20)}`
                        return (
                          <li key={key} className="flex items-start">
                            <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                            <span>{trimmedItem}{trimmedItem.endsWith('.') ? '' : '.'}</span>
                          </li>
                        )
                      })}
                    </ul>

                    {/* Horizontal divider */}
                    <hr className="border-gray-200 dark:border-slate-700 mb-4" />

                    {/* Technology badges */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        {t.experiencia.tecnologias}:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tecnologias.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
