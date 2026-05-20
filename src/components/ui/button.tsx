import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/30',
  secondary: 'border border-slate-200 bg-white text-slate-950 shadow-sm shadow-slate-200/70 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-blue-100',
  ghost: 'text-slate-700 hover:bg-white hover:text-slate-950',
  link: 'px-0 text-blue-700 underline-offset-4 hover:underline',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
};

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:pointer-events-none disabled:opacity-50',
        variantClasses[variant],
        variant === 'link' ? 'h-auto' : sizeClasses[size],
        className,
      )}
      type={type}
      {...props}
    />
  );
}
