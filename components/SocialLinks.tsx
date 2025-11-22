import React from 'react';
import { SOCIAL_LINKS } from '../constants';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = "", iconSize = 24 }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-blue-400 transition-all transform hover:-translate-y-1 hover:scale-110"
          aria-label={link.name}
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;