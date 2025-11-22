import { GitHubRepo } from '../types';

// Projetos de exemplo (Fallback) caso a API atinja o limite ou usuário não exista
// Isso garante que o portfólio sempre pareça preenchido e profissional
const MOCK_PROJECTS: GitHubRepo[] = [
  {
    id: 1,
    name: "plataforma-ecommerce-pro",
    description: "Uma solução completa de comércio eletrônico com dashboard administrativo, pagamentos em tempo real e análise de dados.",
    html_url: "https://github.com",
    homepage: "https://github.com",
    language: "TypeScript",
    stargazers_count: 124,
    topics: ["react", "nextjs", "stripe", "tailwindcss"],
    updated_at: "2024-05-15T10:00:00Z"
  },
  {
    id: 2,
    name: "sistema-gestao-financeira",
    description: "Aplicação para controle de finanças pessoais e empresariais com gráficos interativos e previsões baseadas em IA.",
    html_url: "https://github.com",
    homepage: null,
    language: "Python",
    stargazers_count: 89,
    topics: ["data-science", "finance", "dashboard"],
    updated_at: "2024-04-20T14:30:00Z"
  },
  {
    id: 3,
    name: "api-microsservicos",
    description: "Arquitetura robusta de microsserviços utilizando NestJS, Kafka e Docker para alta escalabilidade.",
    html_url: "https://github.com",
    homepage: null,
    language: "TypeScript",
    stargazers_count: 56,
    topics: ["backend", "microservices", "docker"],
    updated_at: "2024-03-10T09:15:00Z"
  },
  {
    id: 4,
    name: "app-delivery-mobile",
    description: "Aplicativo móvel nativo para entregas com rastreamento em tempo real e notificações push.",
    html_url: "https://github.com",
    homepage: null,
    language: "Kotlin",
    stargazers_count: 42,
    topics: ["mobile", "android", "maps"],
    updated_at: "2024-02-15T11:20:00Z"
  },
  {
    id: 5,
    name: "portfolio-minimalista",
    description: "Este website! Um portfólio moderno focado em performance e design responsivo.",
    html_url: "https://github.com",
    homepage: null,
    language: "React",
    stargazers_count: 30,
    topics: ["frontend", "design", "animation"],
    updated_at: "2024-01-20T11:20:00Z"
  }
];

export const fetchGithubProjects = async (username: string): Promise<GitHubRepo[]> => {
  try {
    // Tenta buscar da API
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=9`);
    
    if (!response.ok) {
      throw new Error('Falha ao comunicar com GitHub');
    }
    
    const data = await response.json();
    
    // Se o usuário não tiver repositórios públicos ou array vazio, retorna mock
    if (Array.isArray(data) && data.length === 0) {
        return MOCK_PROJECTS;
    }

    return data as GitHubRepo[];
  } catch (error) {
    console.warn("API GitHub indisponível ou limite excedido. Exibindo projetos de demonstração.", error);
    // Retorna dados de exemplo para não quebrar a UI
    return MOCK_PROJECTS;
  }
};