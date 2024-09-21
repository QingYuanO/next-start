// import { BGShapeCircle } from "@/components/bg-shape-circle";
import { type FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub } from '@icons-pack/react-simple-icons';

import { Button } from '@/components/ui/button';

export const HeroSection: FC = () => {
  return (
    <div className="relative bg-gradient-to-t from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
      <div className="absolute inset-0 bottom-0 left-0 right-0 top-0 z-0 bg-[url('/gradient-bg-0.svg')] bg-auto bg-no-repeat grayscale"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto mb-16 flex max-w-4xl flex-col items-center">
          <h1 className="mb-6 text-center text-4xl font-bold tracking-tight text-primary drop-shadow-md sm:text-5xl lg:text-6xl">
            Bootstrap your landing page faster than ever
          </h1>
          <p className="mb-8 text-center text-sm text-muted-foreground sm:text-xl">
            Build stunning landing pages with ease and convert your customers faster than ever.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="https://github.com/QingYuanO/next-start" target="_blank">
                Get Started
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto flex items-center gap-2">
              <SiGithub className="size-4" />
              <Link href="https://github.com/QingYuanO/next-start" target="_blank">
                Star on GitHub
              </Link>
            </Button>
          </div>
        </div>

        <Image
          alt="app screenshot"
          src="/placeholder.png"
          width={2432}
          height={1442}
          className="block rounded-md border shadow-2xl dark:brightness-[0.2] dark:grayscale sm:mt-12"
        />
      </div>
    </div>
  );
};
