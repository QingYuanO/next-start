import React from 'react';
import { cn } from '@/lib/utils';

export default function MainWrap({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8', className)}>{children}</div>;
}
