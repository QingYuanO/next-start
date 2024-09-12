import Link from 'next/link';
import { getServerAuthSession } from '@/server/auth';
import { api } from '@/trpc/server';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import ThemeToggleBtn from './theme-provider/theme-button';

export async function Navbar() {
  const session = await getServerAuthSession();
  const hello = await api.post.hello({ text: 'from tRPC' });
  console.log(hello);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Next Start</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm">
            <a href="/about">Documents</a>
            <a href="/products">Components</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex w-full flex-1 items-center gap-2.5 md:w-auto md:flex-none">
            <ThemeToggleBtn />

            <Button variant="ghost" asChild>
              <Link href={session ? '/api/auth/signout' : '/api/auth/signin'}>{session ? 'Sign out' : 'Sign in'}</Link>
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <a href="/about" className="w-full">
                  About
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/products" className="w-full">
                  Products
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/contact" className="w-full">
                  Contact
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
