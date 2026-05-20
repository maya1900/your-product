import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/cn';

type CardProps = ComponentPropsWithoutRef<'article'> & {
  interactive?: boolean;
};

export function Card({ className, interactive = false, ...props }: CardProps) {
  return (
    <article
      className={cn(
        'rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm shadow-slate-200/60 backdrop-blur',
        interactive && 'group transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/70',
        className,
      )}
      {...props}
    />
  );
}
