interface AfricanPatternBgProps {
  variant?: "primary" | "secondary" | "accent" | "mixed";
  opacity?: number;
  className?: string;
}

/**
 * Motif discret inspiré des gravures végétales du visuel Ovúmá :
 * un treillis de losanges (motif béti) traversé de tiges feuillues.
 */
export function AfricanPatternBg({ variant = "mixed", opacity = 0.05, className = "" }: AfricanPatternBgProps) {
  const patternId = `ovm-pattern-${variant}`;
  const tone = variant === "secondary" ? "text-secondary" : variant === "accent" ? "text-accent" : "text-primary";

  return (
    <div className={`absolute inset-0 pointer-events-none ${tone} ${className}`} style={{ opacity }} aria-hidden="true">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={patternId} x="0" y="0" width="96" height="96" patternUnits="userSpaceOnUse">
            <path d="M48 4 L92 48 L48 92 L4 48 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M48 26 L70 48 L48 70 L26 48 Z" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <path d="M48 70 C48 58 44 52 36 48 M48 58 C52 54 56 52 62 52" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
            <ellipse cx="35" cy="46" rx="3.5" ry="1.8" transform="rotate(-30 35 46)" fill="currentColor" />
            <ellipse cx="62" cy="51" rx="3.5" ry="1.8" transform="rotate(20 62 51)" fill="currentColor" />
            <circle cx="0" cy="0" r="1.5" fill="currentColor" />
            <circle cx="96" cy="96" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
