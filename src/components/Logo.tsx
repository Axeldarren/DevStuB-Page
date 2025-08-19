import React from 'react';

const Logo = ({ className = "", size = "md", animate = false }: { className?: string; size?: "sm" | "md" | "lg"; animate?: boolean }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  const logoShapeClass = `${sizeClasses[size]} logo-shape`;

  return (
    <div className={`flex items-center gap-2 ${animate ? 'animate-logo-entrance' : ''} ${className}`}>
      <div className="flex items-center gap-1">
        {/* Blue Star */}
        <div className={`${logoShapeClass} bg-primary rounded-lg flex items-center justify-center animate-float`} style={{ animationDelay: '0s' }}>
          <img src="/uploads/5eb264b9-0ed1-458e-aa95-e7cc0e2df093.png" alt="DevStuB Logo Star" className="w-full h-full object-contain" />
        </div>
        
        {/* Green Arrow */}
        <div className={`${logoShapeClass} bg-secondary rounded-lg flex items-center justify-center animate-float`} style={{ animationDelay: '0.5s' }}>
          <img src="/uploads/cb9cd394-f762-4850-81f6-3469cbd4c495.png" alt="DevStuB Logo Arrow" className="w-full h-full object-contain" />
        </div>
        
        {/* Yellow Quote */}
        <div className={`${logoShapeClass} bg-warning rounded-lg flex items-center justify-center animate-float`} style={{ animationDelay: '1s' }}>
          <img src="/uploads/5ade3828-f771-409a-982e-40b1b6c2468b.png" alt="DevStuB Logo Quote" className="w-full h-full object-contain" />
        </div>
        
        {/* Red Exclamation */}
        <div className={`${logoShapeClass} bg-accent rounded-lg flex items-center justify-center animate-float`} style={{ animationDelay: '1.5s' }}>
          <img src="/uploads/66403e8c-571a-4a8f-bdca-0141fabd0620.png" alt="DevStuB Logo Exclamation" className="w-full h-full object-contain" />
        </div>
      </div>
      
      <span className={`font-bold ${size === 'lg' ? 'text-4xl' : size === 'md' ? 'text-2xl' : 'text-xl'} bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent`}>
        DevStuB
      </span>
    </div>
  );
};

export default Logo;