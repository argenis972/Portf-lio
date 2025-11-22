import { Github, Linkedin, Mail } from 'lucide-react';
import { NavItem, SocialLink } from './types';

// ==============================================
// CONFIGURAÇÃO DO PERFIL
// Edite estas informações para personalizar o portfólio
// ==============================================

// Seu nome de usuário do GitHub para buscar projetos automaticamente
export const GITHUB_USERNAME = 'argenis972';

export const USER_PROFILE = {
  name: "Argenis López",
  role: "Desenvolvedor Web & Backend",
  title: "Criando soluções digitais funcionais e interfaces responsivas.",
  description: "Especialista em HTML5, CSS3 e JavaScript, com foco em Backend utilizando Python e FastAPI. Apaixonado por transformar ideias em código limpo e eficiente.",
  // URL da foto de perfil. Usando a imagem do seu GitHub automaticamente para facilitar.
  // Se quiser usar outra foto, substitua esta URL.
  avatarUrl: `https://github.com/${GITHUB_USERNAME}.png`
};

// Links: 
// Começando com '/' são rotas (páginas novas)
// Começando com '/#' são âncoras na página inicial
export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Sobre Mim', href: '/about' },
  { label: 'Projetos', href: '/#projects' },
  { label: 'Contato', href: '/#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: `https://github.com/${GITHUB_USERNAME}`,
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/argenis-lópez-649701304',
    icon: Linkedin,
  },
  {
    name: 'Email',
    url: 'mailto:argenislopez28708256@gmail.com',
    icon: Mail,
  },
];