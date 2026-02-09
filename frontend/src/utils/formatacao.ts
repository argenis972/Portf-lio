export const formatarData = (dataISO: string): string => {
  const data = new Date(dataISO)
  return data.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })
}

export const formatarPeriodo = (dataInicio: string, dataFim: string | null, idioma: string): string => {
  const inicio = new Date(dataInicio)
  const fim = dataFim ? new Date(dataFim) : null
  
  const formatOptions: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' }
  const locale = idioma === 'pt-BR' ? 'pt-BR' : idioma === 'es' ? 'es' : 'en'
  
  const inicioFormatado = inicio.toLocaleDateString(locale, formatOptions)
  const fimFormatado = fim 
    ? fim.toLocaleDateString(locale, formatOptions)
    : idioma === 'pt-BR' ? 'Atual' : idioma === 'es' ? 'Actual' : 'Current'
  
  return `${inicioFormatado} - ${fimFormatado}`
}
