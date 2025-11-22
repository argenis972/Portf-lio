import React from 'react';
import { Database, Layout, Server, Smartphone, Code, Cpu, Globe, Zap, GitBranch, Terminal } from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: Layout, desc: 'HTML5, CSS3, JavaScript (ES6+), Design Responsivo, UI/UX Básico', color: 'text-blue-400' },
  { name: 'Backend', icon: Server, desc: 'Python (Intermediário), FastAPI, APIs REST, Manipulação de JSON', color: 'text-green-400' },
  { name: 'Ferramentas', icon: GitBranch, desc: 'Git, GitHub, GitHub Pages, Versionamento de Código', color: 'text-orange-400' },
  { name: 'Banco de Dados', icon: Database, desc: 'SQLite, Modelagem simples, Consultas SQL básicas', color: 'text-purple-400' },
];

const About: React.FC = () => {
  return (
    <section className="py-24 bg-dark relative" id="about">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/20 via-dark to-dark pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">Minha Jornada</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Competências Técnicas & Habilidades</h3>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-slate-400 leading-relaxed">
             Desenvolvedor com foco em criar aplicações web completas. Combino conhecimentos sólidos de Frontend (HTML/CSS/JS) com a potência do Python no Backend para entregar soluções robustas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group glass p-8 rounded-2xl hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2 border border-slate-800 hover:border-slate-700"
            >
              <div className={`w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 ${skill.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <skill.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{skill.name}</h4>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>

        {/* Idiomas Section */}
        <div className="glass p-8 rounded-2xl border border-slate-800 max-w-4xl mx-auto mb-16">
            <h4 className="text-xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
                <Globe className="text-blue-500" /> Idiomas
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-xl text-center">
                    <span className="text-slate-300 font-medium mb-2">Espanhol</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full font-bold">Nativo</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-xl text-center">
                    <span className="text-slate-300 font-medium mb-2">Português</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full font-bold">Intermediário / Avançado</span>
                </div>
                 <div className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-xl text-center">
                    <span className="text-slate-300 font-medium mb-2">Inglês</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full font-bold">Básico</span>
                </div>
            </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-slate-800 pt-12">
            {[
                { label: 'Projetos GitHub', value: '3+', icon: Code },
                { label: 'Tecnologias', value: '8+', icon: Cpu },
                { label: 'Idiomas', value: '3', icon: Globe },
                { label: 'Comprometimento', value: '100%', icon: Zap },
            ].map((stat, i) => (
                <div key={i}>
                    <div className="flex justify-center mb-2 text-slate-500">
                        <stat.icon size={20} />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;