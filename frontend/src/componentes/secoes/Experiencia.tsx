import { useIdioma } from '../../hooks/useIdioma'
import { useAPI } from '../../hooks/useAPI'
import { portafolioAPI } from '../../servicos/portafolioAPI'
import { formatarPeriodo } from '../../utils/formatacao'

interface CartaoExperienciaProps {
  cargo: string
  empresa: string
  periodo: string
  descricao: string
  tecnologias: string[]
  atual?: boolean
  atualLabel: string
}

const CartaoExperiencia = ({ 
  cargo, 
  empresa, 
  periodo, 
  descricao, 
  tecnologias, 
  atual,
  atualLabel 
}: CartaoExperienciaProps) => {
  // Split description into bullet points
  const bulletPoints = descricao
    .split('. ')
    .filter(text => text.trim().length > 0)
    .map(text => {
      const trimmed = text.trim()
      return trimmed.endsWith('.') ? trimmed : trimmed + '.'
    })

  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* 1. Encabezado: Cargo + Empresa + Período */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {cargo}
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-400 font-medium">
          {empresa}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            {periodo}
          </p>
          {atual && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
              {atualLabel}
            </span>
          )}
        </div>
      </div>

      {/* 2. Divisor */}
      <div className="border-t border-gray-200 dark:border-slate-700 my-4" />

      {/* 3. Descripción con bullet points */}
      <div className="mb-4 space-y-2">
        {bulletPoints.map((bullet, index) => (
          <div key={index} className="flex gap-3">
            <span className="text-blue-500 mt-1">•</span>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{bullet}</p>
          </div>
        ))}
      </div>

      {/* 4. Divisor */}
      <div className="border-t border-gray-200 dark:border-slate-700 my-4" />

      {/* 5. Tecnologías como badges azules */}
      <div className="flex flex-wrap gap-2">
        {tecnologias.map((tech) => (
          <span 
            key={tech}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

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

        <div className="space-y-6">
          {dados.experiencias.map((exp) => (
            <CartaoExperiencia
              key={exp.id}
              cargo={exp.cargo}
              empresa={exp.empresa}
              periodo={formatarPeriodo(exp.data_inicio, exp.data_fim, idioma)}
              descricao={exp.descricao}
              tecnologias={exp.tecnologias}
              atual={exp.atual}
              atualLabel={t.experiencia.atual}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
