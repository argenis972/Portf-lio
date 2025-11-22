import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { USER_PROFILE } from '../constants';
import SocialLinks from './SocialLinks';

const Hero: React.FC = () => {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-10 bg-dark overflow-hidden relative">
      {/* Elementos de Fundo (Blobs Animados) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-teal-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Conteúdo de Texto */}
        <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-blue-400 text-xs md:text-sm font-semibold tracking-wide uppercase">Disponível para projetos</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white leading-tight tracking-tight whitespace-nowrap">
            Portfólio <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Argenis López</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-slate-300 mb-6">
            {USER_PROFILE.role}
          </h2>
          
          <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
            {USER_PROFILE.title} {USER_PROFILE.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2 hover:gap-3 cursor-pointer"
            >
              Ver Portfólio <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3.5 glass text-slate-300 hover:text-white rounded-full font-semibold transition-all hover:bg-slate-800 hover:border-slate-600 flex items-center gap-2 cursor-pointer"
            >
              Contato <Download className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 border-t border-slate-800/50">
             <span className="text-slate-500 text-sm font-medium">Siga-me:</span>
             <SocialLinks />
          </div>
        </div>
        
        {/* Imagem */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            {/* Anéis decorativos */}
            <div className="absolute inset-0 border border-slate-700/50 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-8 border border-slate-800 rounded-full"></div>
            
            {/* Container da Imagem */}
            <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl shadow-blue-500/10 border-4 border-slate-800 bg-slate-800">
              <img 
                src={USER_PROFILE.avatarUrl} 
                alt={USER_PROFILE.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Card flutuante decorativo */}
            <div className="absolute -bottom-4 -left-4 md:bottom-10 md:left-0 glass p-4 rounded-2xl animate-bounce shadow-xl hidden sm:block">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <span className="text-xl">💻</span>
                    </div>
                    <div>
                        <p className="text-xs text-slate-400">Projetos</p>
                        <p className="text-sm font-bold text-white">3+</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;