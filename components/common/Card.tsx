import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({ 
  children, 
  className = "", 
  hoverEffect = true 
}: CardProps) {
  return (
    <div 
      className={`
        bg-gray-800 
        rounded-lg 
        overflow-hidden 
        shadow-lg 
        ${hoverEffect ? 'hover:shadow-2xl transition transform hover:-translate-y-1' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
}