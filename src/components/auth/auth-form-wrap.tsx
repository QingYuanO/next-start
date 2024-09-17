import React from 'react';
import { cn } from '@/lib/utils';

export default function AuthFormWrap({
  children,
  className,
  onSubmit,
}: {
  children?: React.ReactNode;
  className?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form className={cn('flex items-center py-12', className)} onSubmit={onSubmit}>
      <div className="grid w-[350px] gap-6">{children}</div>
    </form>
  );
}
