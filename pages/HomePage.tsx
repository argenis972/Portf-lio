import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import ProjectCard from '../components/ProjectCard';
import { fetchGithubProjects } from '../services/githubService';
import { GITHUB_USERNAME } from '../constants';
import { GitHubRepo } from '../types';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  
  useEffect(() => {
    const loadTopProjects = async () => {
      try {
        const data = await fetchGithubProjects(GITHUB_USERNAME);
        setProjects(data.slice(0, 3)); // Show top 3 on home
      } catch (error) {
        console.error("Erro ao carregar projetos da home", error);
      }
    };
    loadTopProjects();
  }, []);

  return (
    <>
      <Hero />
      
      {/* Featured Projects Section on Home */}
      <section className="py-20 bg-slate-900" id="projects">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Projetos em Destaque</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            <Link to="/projects" className="hidden md:flex text-blue-400 hover:text-white transition-colors font-medium items-center group">
              Ver todos os projetos <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link to="/projects" className="inline-block px-8 py-3 border border-slate-600 text-slate-300 rounded-full hover:bg-slate-800 transition-colors">Ver todos os projetos</Link>
          </div>
        </div>
      </section>
      
      {/* Adicionado ID para scroll funcionar */}
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default HomePage;