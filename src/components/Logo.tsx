
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden">
        <img
          src="/lovable-uploads/5d1e7cd9-1678-410d-8ef3-c3582e6d4d2c.png"
          alt="SuperLens AI Logo"
          className="w-full h-full object-cover"
          style={{ 
            filter: 'drop-shadow(0 0 5px rgba(14, 165, 233, 0.4))'
          }}
        />
      </div>
      <span className="text-xl md:text-2xl font-bold text-superlens-blue">
        SuperLens AI
      </span>
    </Link>
  );
};

export default Logo;
