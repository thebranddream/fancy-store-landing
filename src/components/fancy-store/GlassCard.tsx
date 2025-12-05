/**
 * GlassCard Component
 * Reusable glass-morphism card with hover effects
 */

import { cn } from '@/lib/utils';
import { ReactNode, CSSProperties } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  style?: CSSProperties;
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const GlassCard = ({ 
  children, 
  className, 
  hover = false, 
  padding = 'md',
  style 
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        'rounded-xl border border-white/10 bg-card/40 backdrop-blur-md',
        hover && 'transition-all duration-300 hover:bg-card/60 hover:border-white/20 hover:shadow-gold',
        paddingClasses[padding],
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};
