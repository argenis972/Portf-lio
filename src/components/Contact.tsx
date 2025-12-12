import React, { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react';

// 1. CORRECCIÓN DE LA URL DEL ENDPOINT
// EL DOMINIO DEBE SER SOLO UNA VEZ. La ruta es /api/send-email.
const API_ENDPOINT = 'https://portf-lio-r9ps.vercel.app/api/send-email';

const Contact: React.FC = () => {
    // 2. AÑADIR ESTADO PARA EL FORMULARIO
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        subject: '', // Usaremos 'subject' para el asunto
        message: '' 
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [responseMessage, setResponseMessage] = useState('');

    // Manejador genérico para todos los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ 
            ...formData, 
            [e.target.name]: e.target.value 
        });
    };

    // 3. IMPLEMENTAR LA LÓGICA DE ENVÍO
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Evitar envíos múltiples
        if (status === 'loading') return;

        setStatus('loading');
        setResponseMessage('');

        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Asegúrate de enviar solo los campos que tu API espera (name, email, message)
                // O puedes enviar el 'subject' también y modificar la API para incluirlo en el correo
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: `Asunto: ${formData.subject}\n\nMensaje: ${formData.message}`, // Combina para enviar un solo 'message'
                }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus('success');
                setResponseMessage('🎉 Mensaje enviado con éxito! Te contactaré pronto.');
                // Limpiar el formulario
                setFormData({ name: '', email: '', subject: '', message: '' }); 
            } else {
                // El servidor respondió con un error (ej: 400 Bad Request)
                throw new Error(data.message || 'Error al enviar el correo.');
            }
        } catch (error) {
            setStatus('error');
            setResponseMessage('❌ Ocurrió un error. Por favor, revisa tu conexión e inténtalo de nuevo.');
            console.error('API Error:', error);
        }
    };


    return (
        <section className="py-24 bg-gradient-to-b from-dark to-black relative" id="contact">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    
                    {/* Informações de Contato (sin cambios) */}
                    {/* ... (el código de la columna de información de contacto) ... */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* ... Tu contenido de contacto ... */}
                    </div>

                    {/* Formulário */}
                    <div className="lg:col-span-3">
                        <div className="glass border border-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-6">Envie uma mensagem</h3>
                            
                            {/* Conectar el formulario con el handleSubmit */}
                            <form className="space-y-6" onSubmit={handleSubmit}> 
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Nome</label>
                                        <input 
                                            id="name"
                                            name="name" // IMPORTANTE: name debe coincidir con el estado
                                            type="text" 
                                            value={formData.name}
                                            onChange={handleChange}
                                            required // Añadir validación HTML
                                            className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                                            placeholder="Seu nome"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email</label>
                                        <input 
                                            id="email"
                                            name="email" // IMPORTANTE: name debe coincidir con el estado
                                            type="email" 
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                                            placeholder="seu@email.com"
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-slate-300 ml-1">Assunto</label>
                                    <input 
                                        id="subject"
                                        name="subject" // IMPORTANTE: name debe coincidir con el estado
                                        type="text" 
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                                        placeholder="Assunto da mensagem"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Mensagem</label>
                                    <textarea 
                                        id="message"
                                        name="message" // IMPORTANTE: name debe coincidir con el estado
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all resize-none"
                                        placeholder="Sua mensagem aqui..."
                                    ></textarea>
                                </div>

                                {/* Mostrar estado y botón de envío */}
                                <button 
                                    type="submit" // Cambiar a 'submit'
                                    disabled={status === 'loading'} // Deshabilitar durante la carga
                                    className={`w-full text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3 ${
                                        status === 'loading' 
                                        ? 'bg-blue-400 cursor-not-allowed' 
                                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600'
                                    }`}
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Enviar Mensagem
                                        </>
                                    )}
                                </button>
                                
                                {/* Mostrar mensaje de respuesta */}
                                {responseMessage && (
                                    <p className={`text-center text-sm font-semibold ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                                        {responseMessage}
                                    </p>
                                )}

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;