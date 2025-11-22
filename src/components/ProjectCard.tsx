import React from 'react';
import { Star, ExternalLink, GitFork, Code } from 'lucide-react';
import { GitHubRepo } from '../types';

interface ProjectCardProps {
  project: GitHubRepo;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  
  const getLangColor = (lang: string | null) => {
    const colors: Record<string, string> = {
      typescript: 'bg-blue-500',
      javascript: 'bg-yellow-400',
      python: 'bg-green-500',
      html: 'bg-orange-500',
      css: 'bg-indigo-500',
      java: 'bg-red-500',
      ruby: 'bg-red-600',
      go: 'bg-cyan-500',
      rust: 'bg-orange-700',
      vue: 'bg-emerald-500',
      react: 'bg-cyan-400',
    };
    return colors[lang?.toLowerCase() || ''] || 'bg-slate-500';
  };

  return (
    <div className="group relative flex flex-col h-full bg-card border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
      {/* Gradiente no topo */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-slate-800/80 rounded-xl text-blue-400 group-hover:bg-blue-500/10 group-hover:text-blue-300 transition-colors">
            <Code size={24} />
          </div>
          <div className="flex gap-2">
             {project.html_url && (
              <a 
                href={project.html_url} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
                title="Ver código"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        
        <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.name}
        </h3>
        
        <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-1 leading-relaxed">
          {project.description || "Projeto em desenvolvimento focado em escalabilidade e boas práticas de código."}
        </p>
        
        {/* Topics / Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
            {project.topics?.slice(0, 3).map(topic => (
                <span key={topic} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700/50">
                    {topic}
                </span>
            ))}
        </div>

        {/* Footer Info */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800/50 mt-auto">
          <div className="flex items-center space-x-2 text-xs text-slate-300 font-medium">
            {project.language && (
              <span className="flex items-center">
                <span className={`w-2.5 h-2.5 rounded-full mr-2 shadow-sm ${getLangColor(project.language)}`}></span>
                {project.language}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1 group-hover:text-yellow-400 transition-colors">
              <Star size={14} />
              {project.stargazers_count}
            </span>
            <span className="flex items-center gap-1 group-hover:text-purple-400 transition-colors">
              <GitFork size={14} />
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;