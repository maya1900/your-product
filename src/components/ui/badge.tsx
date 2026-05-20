import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/cn';

type BadgeProps = ComponentPropsWithoutRef<'span'>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700',
        className,
      )}
      {...props}
    />
  );
}
