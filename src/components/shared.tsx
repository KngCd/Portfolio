import type { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';
import type { Theme } from '../types';

export function FadeIn({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="w-1 h-3.5 bg-current rounded-full opacity-30" />
      <span className="font-mono-code text-xs tracking-[0.18em] uppercase opacity-40" style={{ letterSpacing: '0.18em' }}>
        {children}
      </span>
    </div>
  );
}

export function Tag({ children, theme }: { children: ReactNode; theme: Theme }) {
  return (
    <span
      className="px-2.5 py-1 text-xs font-medium rounded-lg border"
      style={{
        borderColor: theme === 'dark' ? '#242424' : '#E5E5E5',
        opacity: 0.65,
      }}
    >
      {children}
    </span>
  );
}
