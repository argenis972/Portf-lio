import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { fetchGithubProjects } from '../services/githubService';
import { GITHUB_USERNAME } from '../constants';
import { GitHubRepo } from '../types';

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchGithubProjects(GITHUB_USERNAME);
        setProjects(data);
      } catch (error) {
        console.error("Erro ao carregar projetos", error);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Meus Projetos</h2>
           <p className="text-slate-400 max-w-2xl mx-auto">
             Uma coleção completa dos meus trabalhos, experimentos e contribuições open source.
           </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;