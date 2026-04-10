interface AfricanPatternBgProps {
  variant?: "primary" | "secondary" | "accent" | "mixed";
  opacity?: number;
  className?: string;
}

export function AfricanPatternBg({ 
  variant = "mixed", 
  opacity = 0.05,
  className = "" 
}: AfricanPatternBgProps) {
  const patternId = `african-pattern-${variant}`;
  
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ opacity }}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={patternId} x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            {/* Triangles - motif béti */}
            <path 
              d="M20,10 L30,30 L10,30 Z" 
              fill="currentColor" 
              className={variant === "primary" || variant === "mixed" ? "text-primary" : "text-accent"} 
            />
            <path 
              d="M70,10 L80,30 L60,30 Z" 
              fill="currentColor" 
              className={variant === "secondary" || variant === "mixed" ? "text-secondary" : "text-primary"} 
            />
            <path 
              d="M45,60 L55,80 L35,80 Z" 
              fill="currentColor" 
              className={variant === "accent" || variant === "mixed" ? "text-accent" : "text-secondary"} 
            />
            
            {/* Losanges */}
            <path 
              d="M100,20 L110,30 L100,40 L90,30 Z" 
              fill="currentColor" 
              className="text-primary" 
              opacity="0.3"
            />
            <path 
              d="M15,70 L25,80 L15,90 L5,80 Z" 
              fill="currentColor" 
              className="text-accent" 
              opacity="0.3"
            />
            
            {/* Cercles */}
            <circle cx="50" cy="20" r="3" fill="currentColor" className="text-secondary" />
            <circle cx="25" cy="70" r="3" fill="currentColor" className="text-primary" />
            <circle cx="75" cy="70" r="3" fill="currentColor" className="text-accent" />
            <circle cx="100" cy="100" r="2" fill="currentColor" className="text-secondary" />
            
            {/* Lignes ondulées - motif de pagne */}
            <path 
              d="M0,50 Q10,45 20,50 T40,50 T60,50 T80,50 T100,50 T120,50" 
              stroke="currentColor" 
              strokeWidth="1" 
              fill="none" 
              className="text-primary" 
              opacity="0.2"
            />
            <path 
              d="M0,110 Q10,105 20,110 T40,110 T60,110 T80,110 T100,110 T120,110" 
              stroke="currentColor" 
              strokeWidth="1" 
              fill="none" 
              className="text-accent" 
              opacity="0.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
