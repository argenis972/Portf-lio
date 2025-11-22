import React, { useEffect } from 'react';
import { Database, Layout, Server, GitBranch, Globe, Cpu, Zap, BookOpen, Target, Award } from 'lucide-react';
import { USER_PROFILE } from '../constants';

const skills = [
  { name: 'Frontend', icon: Layout, desc: 'HTML5, CSS3, JavaScript (ES6+), Design Responsivo, UI/UX Básico', color: 'text-blue-400' },
  { name: 'Backend', icon: Server, desc: 'Python (Intermediário), FastAPI, APIs REST, Manipulação de JSON', color: 'text-green-400' },
  { name: 'Ferramentas', icon: GitBranch, desc: 'Git, GitHub, GitHub Pages, Versionamento de Código', color: 'text-orange-400' },
  { name: 'Banco de Dados', icon: Database, desc: 'SQLite, Modelagem simples, Consultas SQL básicas', color: 'text-purple-400' },
];

const AboutPage: React.FC = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-dark min-h-screen pt-24 pb-20">
      
      {/* Cabeçalho da Página */}
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Mim</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Conheça um pouco mais sobre minha trajetória, meus objetivos e as tecnologias que domino.
          </p>
        </div>
      </div>

      {/* Seção Principal: Bio Detalhada */}
      <div className="container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20 transform rotate-3"></div>
            <div className="relative glass p-8 rounded-2xl border border-slate-700/50">
               <img 
                  src={USER_PROFILE.avatarUrl} 
                  alt="Argenis trabalhando" 
                  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-slate-800 shadow-xl"
               />
               <h3 className="text-2xl font-bold text-white text-center mb-2">{USER_PROFILE.name}</h3>
               <p className="text-blue-400 text-center font-medium mb-6">{USER_PROFILE.role}</p>
               
               <div className="space-y-4 text-slate-300">
                 <p>
                   Olá! Sou um desenvolvedor apaixonado por tecnologia e resolução de problemas. Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam na web e rapidamente se transformou em uma carreira focada em criar soluções digitais.
                 </p>
                 <p>
                   Atualmente, estou focado em aprimorar minhas habilidades em <strong>Full Stack Development</strong>, unindo a interatividade do React no frontend com a robustez do Python no backend.
                 </p>
               </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 mt-1">
                <BookOpen size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Aprendizado Contínuo</h4>
                <p className="text-slate-400 leading-relaxed">
                  Acredito que a programação é uma jornada sem fim. Dedico horas semanais para estudar novas documentações, testar frameworks modernos e aplicar boas práticas de código (Clean Code) em meus projetos pessoais.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 mt-1">
                <Target size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Objetivo Profissional</h4>
                <p className="text-slate-400 leading-relaxed">
                  Meu foco é integrar equipes que valorizem a qualidade e a inovação. Busco oportunidades onde possa não apenas escrever código, mas também contribuir com ideias para a arquitetura e experiência do usuário.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-green-500/10 rounded-lg text-green-400 mt-1">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Compromisso</h4>
                <p className="text-slate-400 leading-relaxed">
                  Cada projeto é tratado com seriedade. Do commit inicial ao deploy, garanto que o código seja legível, escalável e bem documentado, facilitando a manutenção futura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Skills (Reaproveitado e Expandido) */}
      <div className="container mx-auto px-6 mb-24">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-10 text-center">Stack Tecnológica</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group bg-slate-900/50 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 border border-slate-800 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${skill.color} bg-slate-950 shadow-inner`}>
                <skill.icon size={24} />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">{skill.name}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Idiomas e Estatísticas */}
      <div className="container mx-auto px-6">
         <div className="glass p-8 rounded-2xl border border-slate-800 max-w-4xl mx-auto">
            <h4 className="text-xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
                <Globe className="text-blue-500" /> Idiomas
            </h4>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-xl text-center border border-slate-700/30">
                    <span className="text-slate-300 font-medium mb-2">Espanhol</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full font-bold">Nativo</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-xl text-center border border-slate-700/30">
                    <span className="text-slate-300 font-medium mb-2">Português</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full font-bold">Avançado</span>
                </div>
                 <div className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-xl text-center border border-slate-700/30">
                    <span className="text-slate-300 font-medium mb-2">Inglês</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full font-bold">Básico</span>
                </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-slate-800 pt-8">
                {[
                    { label: 'Projetos', value: '3+', icon: Zap },
                    { label: 'Tecnologias', value: '8+', icon: Cpu },
                    { label: 'Anos Focados', value: '1+', icon: Target },
                    { label: 'Disponibilidade', value: 'Total', icon: Award },
                ].map((stat, i) => (
                    <div key={i}>
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;