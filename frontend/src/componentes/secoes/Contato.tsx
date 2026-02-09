import { useState } from 'react'
import { useIdioma } from '../../hooks/useIdioma'
import { enviarMensagem } from '../../servicos/formspreeAPI'
import { validarFormularioContato } from '../../utils/validacao'
import type { DadosContato } from '../../tipos'

export const Contato = () => {
  const { t } = useIdioma()
  const [formulario, setFormulario] = useState<DadosContato>({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  })
  const [erros, setErros] = useState<Record<string, string>>({})
  const [enviando, setEnviando] = useState(false)
  const [mensagemStatus, setMensagemStatus] = useState<{ tipo: 'sucesso' | 'erro'; texto: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormulario(prev => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (erros[name]) {
      setErros(prev => {
        const novosErros = { ...prev }
        delete novosErros[name]
        return novosErros
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate
    const errosValidacao = validarFormularioContato(
      formulario.nome,
      formulario.email,
      formulario.assunto,
      formulario.mensagem,
      t
    )

    if (Object.keys(errosValidacao).length > 0) {
      setErros(errosValidacao)
      return
    }

    // Send
    setEnviando(true)
    setMensagemStatus(null)

    try {
      const sucesso = await enviarMensagem(formulario)
      
      if (sucesso) {
        setMensagemStatus({ tipo: 'sucesso', texto: t.contato.sucesso })
        setFormulario({ nome: '', email: '', assunto: '', mensagem: '' })
      } else {
        setMensagemStatus({ tipo: 'erro', texto: t.contato.erro })
      }
    } catch {
      setMensagemStatus({ tipo: 'erro', texto: t.contato.erro })
    } finally {
      setEnviando(false)
    }
  }

  const temErros = Object.keys(erros).length > 0

  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.contato.titulo}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t.contato.subtitulo}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.contato.nome}
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formulario.nome}
              onChange={handleChange}
              placeholder={t.contato.nomePlaceholder}
              className={`w-full px-4 py-3 rounded-lg border ${
                erros.nome
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
              } bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent transition-colors duration-300`}
              aria-invalid={!!erros.nome}
              aria-describedby={erros.nome ? 'nome-error' : undefined}
            />
            {erros.nome && (
              <p id="nome-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                {erros.nome}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.contato.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formulario.email}
              onChange={handleChange}
              placeholder={t.contato.emailPlaceholder}
              className={`w-full px-4 py-3 rounded-lg border ${
                erros.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
              } bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent transition-colors duration-300`}
              aria-invalid={!!erros.email}
              aria-describedby={erros.email ? 'email-error' : undefined}
            />
            {erros.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                {erros.email}
              </p>
            )}
          </div>

          {/* Assunto */}
          <div>
            <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.contato.assunto}
            </label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              value={formulario.assunto}
              onChange={handleChange}
              placeholder={t.contato.assuntoPlaceholder}
              className={`w-full px-4 py-3 rounded-lg border ${
                erros.assunto
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
              } bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent transition-colors duration-300`}
              aria-invalid={!!erros.assunto}
              aria-describedby={erros.assunto ? 'assunto-error' : undefined}
            />
            {erros.assunto && (
              <p id="assunto-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                {erros.assunto}
              </p>
            )}
          </div>

          {/* Mensagem */}
          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.contato.mensagem}
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formulario.mensagem}
              onChange={handleChange}
              placeholder={t.contato.mensagemPlaceholder}
              rows={6}
              className={`w-full px-4 py-3 rounded-lg border ${
                erros.mensagem
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
              } bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent transition-colors duration-300 resize-none`}
              aria-invalid={!!erros.mensagem}
              aria-describedby={erros.mensagem ? 'mensagem-error' : undefined}
            />
            {erros.mensagem && (
              <p id="mensagem-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                {erros.mensagem}
              </p>
            )}
          </div>

          {/* Status Message */}
          {mensagemStatus && (
            <div
              className={`p-4 rounded-lg ${
                mensagemStatus.tipo === 'sucesso'
                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                  : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
              }`}
              role="alert"
            >
              {mensagemStatus.texto}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={enviando || temErros}
            className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              enviando || temErros
                ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                : 'bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600'
            } text-white`}
          >
            {enviando ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t.contato.enviando}
              </span>
            ) : (
              t.contato.enviar
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
