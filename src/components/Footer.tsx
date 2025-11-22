import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-slate-900">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Desenvolvido com React, Tailwind e TypeScript.
        </p>
      </div>
    </footer>
  );
};

export default Footer;