import type { Traducoes } from '../dados/traducoes'

export const validarEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export const validarNome = (nome: string): boolean => {
  return nome.length >= 3 && nome.length <= 100
}

export const validarAssunto = (assunto: string): boolean => {
  return assunto.length >= 5 && assunto.length <= 200
}

export const validarMensagem = (mensagem: string): boolean => {
  return mensagem.length >= 10 && mensagem.length <= 5000
}

export interface ErrosFormulario {
  nome?: string
  email?: string
  assunto?: string
  mensagem?: string
}

export const validarFormularioContato = (
  nome: string,
  email: string,
  assunto: string,
  mensagem: string,
  traducoes: Traducoes
): ErrosFormulario => {
  const erros: ErrosFormulario = {}
  
  if (!validarNome(nome)) {
    erros.nome = traducoes.contato.erros.nome
  }
  
  if (!validarEmail(email)) {
    erros.email = traducoes.contato.erros.email
  }
  
  if (!validarAssunto(assunto)) {
    erros.assunto = traducoes.contato.erros.assunto
  }
  
  if (!validarMensagem(mensagem)) {
    erros.mensagem = traducoes.contato.erros.mensagem
  }
  
  return erros
}
