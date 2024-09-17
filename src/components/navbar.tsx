'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { getServerAuthSession } from '@/server/auth';
import { LogIn, LogOut, Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { LoginButton } from './auth/login-button';
import { LogoutButton } from './auth/logout-button';
import ThemeToggleBtn from './theme-provider/theme-button';

export function Navbar() {
  const session = useSession();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="inline-block font-bold">Next Start</span>
          </a>
        </div>
        <nav className="hidden items-center space-x-6 text-sm sm:flex">
          <Link href="#features" onClick={e => handleSmoothScroll(e, 'features')}>
            Features
          </Link>
          <Link href="#pricing" onClick={e => handleSmoothScroll(e, 'pricing')}>
            Pricing
          </Link>
          <Link href="#contact" onClick={e => handleSmoothScroll(e, 'contact')}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center justify-between space-x-2">
          <div className="flex w-full flex-1 items-center gap-2.5 md:w-auto md:flex-none">
            <ThemeToggleBtn />

            <div className="hidden md:block">
              {session ? (
                <LogoutButton isConfirm>
                  <Button variant="ghost">Logout</Button>
                </LogoutButton>
              ) : (
                <LoginButton asChild>
                  <Button variant="ghost">Login</Button>
                </LoginButton>
              )}
            </div>
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
                <Link href="#features" onClick={e => handleSmoothScroll(e, 'features')} className="w-full">
                  Features
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#pricing" onClick={e => handleSmoothScroll(e, 'pricing')} className="w-full">
                  Pricing
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#contact" onClick={e => handleSmoothScroll(e, 'contact')} className="w-full">
                  Contact
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                {session ? <LogOut className="mr-2 h-4 w-4" /> : <LogIn className="mr-2 h-4 w-4" />}

                {session ? (
                  <LogoutButton>
                    <span>Logout</span>
                  </LogoutButton>
                ) : (
                  <LoginButton asChild>
                    <span>Login</span>
                  </LoginButton>
                )}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
