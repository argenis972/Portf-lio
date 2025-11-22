import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lógica para verificar qual link está ativo
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path === '/about' && location.pathname === '/about') return true;
    return false;
  };

  // Função inteligente para navegar ou rolar
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    // Se for uma âncora (ex: /#projects)
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      
      // Se já estamos na Home, apenas rola
      if (location.pathname === '/') {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Se não estamos na Home, vai para Home e depois tenta rolar (o useEffect na Home lidaria com isso em apps complexos, 
        // mas aqui vamos simplificar navegando e usando um timeout curto como fallback simples)
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // Navegação normal para outras páginas (ex: /about)
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className={`fixed w-full z-50 top-0 start-0 transition-all duration-300 ${
      scrolled ? 'bg-dark/80 backdrop-blur-md border-b border-slate-800/50 shadow-lg' : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#/" onClick={(e) => handleNavigation(e, '/')} className="flex items-center space-x-3 group">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
            <Code2 className="text-white w-6 h-6" />
          </div>
          <span className="self-center text-xl md:text-2xl font-display font-bold whitespace-nowrap text-white tracking-tight">
            Dev<span className="text-blue-500">Portfolio</span>
          </span>
        </a>
        
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-slate-400 hover:bg-slate-800 focus:ring-slate-700 transition-colors"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Abrir menu</span>
          {isOpen ? <X /> : <Menu />}
        </button>
        
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-slate-800 rounded-2xl bg-slate-900/95 md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className={`block py-2 px-4 rounded-lg md:p-0 transition-all duration-300 relative group cursor-pointer ${
                    isActive(item.href)
                      ? 'text-blue-400 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800 md:hover:bg-transparent'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${isActive(item.href) ? 'w-full' : ''}`}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;