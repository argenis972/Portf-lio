export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
}

export interface NavItem {
  label: string;
  href: string;
}