import React from 'react';
import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-dark to-black relative" id="contact">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
            
          {/* Informações de Contato */}
          <div className="lg:col-span-2 space-y-8">
            <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Vamos conversar?</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Estou disponível para novos projetos e oportunidades. Entre em contato para discutirmos como posso ajudar.
                </p>
            </div>
            
            <div className="space-y-6 mt-8">
                <a href="mailto:argenislopez28708256@gmail.com" className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-slate-800/50 transition-colors group">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Email</h3>
                    <p className="text-slate-400 text-sm break-all">argenislopez28708256@gmail.com</p>
                  </div>
                </a>

                <a href="https://wa.me/5541995103364" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-slate-800/50 transition-colors group">
                  <div className="p-3 bg-green-500/10 rounded-xl text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Celular / WhatsApp</h3>
                    <p className="text-green-400 mt-1">(41) 9 9510-3364</p>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/argenis-lópez-649701304" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-slate-800/50 transition-colors group">
                  <div className="p-3 bg-blue-700/10 rounded-xl text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">LinkedIn</h3>
                    <p className="text-blue-400 mt-1">Ver Perfil Profissional</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 p-4">
                  <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Localização</h3>
                    <p className="text-slate-400">Curitiba, Brasil</p>
                  </div>
                </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-3">
            <div className="glass border border-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Envie uma mensagem</h3>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300 ml-1">Nome</label>
                        <input 
                        type="text" 
                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                        placeholder="Seu nome"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300 ml-1">Email</label>
                        <input 
                        type="email" 
                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                        placeholder="seu@email.com"
                        />
                    </div>
                </div>
                
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Assunto</label>
                    <input 
                    type="text" 
                    className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                    placeholder="Assunto da mensagem"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Mensagem</label>
                    <textarea 
                    rows={5}
                    className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder="Sua mensagem aqui..."
                    ></textarea>
                </div>

                <button 
                    type="button"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3"
                >
                    <Send size={20} />
                    Enviar Mensagem
                </button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;