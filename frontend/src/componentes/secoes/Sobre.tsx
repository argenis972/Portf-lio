import { useIdioma } from '../../hooks/useIdioma'
import { useAPI } from '../../hooks/useAPI'
import { portafolioAPI } from '../../servicos/portafolioAPI'

export const Sobre = () => {
  const { t } = useIdioma()
  const { dados, carregando, erro } = useAPI(portafolioAPI.obterSobre)

  if (carregando) {
    return (
      <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">{t.comum.carregando}</p>
        </div>
      </section>
    )
  }

  if (erro || !dados) {
    return (
      <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-600 dark:text-red-400">{t.comum.erro}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Profile Photo */}
          <div className="flex justify-center md:justify-start md:flex-shrink-0">
            <img 
              src="/perfil.svg" 
              alt="Foto de perfil de Argenis Lopez"
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full ring-2 ring-blue-500/30 shadow-lg object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {dados.nome}
            </h2>
            <p className="text-xl text-blue-600 dark:text-blue-400 mb-6">
              {dados.titulo}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {dados.descricao}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-start space-x-3">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{t.sobre.localizacao}</h3>
              <p className="text-gray-600 dark:text-gray-400">{dados.localizacao}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{t.sobre.disponibilidade}</h3>
              <p className="text-gray-600 dark:text-gray-400">{dados.disponibilidade}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{t.sobre.email}</h3>
              <a href={`mailto:${dados.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                {dados.email}
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{t.sobre.telefone}</h3>
              <a href={`tel:${dados.telefone}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                {dados.telefone}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={dados.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
          <a
            href={dados.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
