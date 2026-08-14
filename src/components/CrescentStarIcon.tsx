interface CrescentStarIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export function CrescentStarIcon({ className = "w-6 h-6", size = 24, color = "currentColor" }: CrescentStarIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Crescent */}
      <path
        d="M 52,10 
           A 38,38 0 1 0 86,70 
           A 32,32 0 1 1 52,10 Z"
      />
      {/* 5-Pointed Star tilted towards the crescent center */}
      <polygon
        points="72,25 75,34 84,34 77,40 80,49 72,43 64,49 67,40 60,34 69,34"
      />
    </svg>
  );
}
