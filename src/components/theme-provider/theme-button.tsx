'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

import { Button } from '../ui/button';

export default function ThemeToggleBtn() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  useEffect(() => {
    if (theme === 'system') {
      const themeMedia = window.matchMedia('(prefers-color-scheme: light)');
      if (themeMedia.matches) {
        setTheme('light');
      } else {
        setTheme('dark');
      }
    }
    setMounted(true);
  }, [setTheme, theme]);

  const handleThemeChange = () => {
    if (!mounted) return;
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button variant="ghost" className="text-lg" onClick={handleThemeChange} size="icon">
      {!mounted ? <Sun className="size-4" /> : theme === 'light' ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}
