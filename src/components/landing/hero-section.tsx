// import { BGShapeCircle } from "@/components/bg-shape-circle";
import { FC } from 'react';

import { Button } from '@/components/ui/button';

export const HeroSection: FC = () => {
  return (
    <div className="relative bg-gradient-to-t from-zinc-50 to-black to-white dark:from-zinc-950">
      <div className="absolute inset-0 bottom-0 left-0 right-0 top-0 z-0 bg-[url('/_convertfast/gradient-bg-0.svg')] bg-auto bg-no-repeat grayscale"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary drop-shadow-md sm:text-5xl lg:text-6xl">
            Bootstrap your landing page faster than ever
          </h1>
          <p className="mb-8 text-xl text-muted-foreground sm:text-2xl">
            Build stunning landing pages with ease and convert your customers faster than ever.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#start">Sign In</a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <code className="rounded p-1">Start now</code>
            </Button>
          </div>
        </div>

        <img
          alt="app screenshot"
          src="https://ui.convertfa.st/images/graphic-walker-light-2.png"
          width={2432}
          height={1442}
          className="mt-8 block rounded-md border shadow-2xl dark:hidden sm:mt-12"
        />
        <img
          alt="app screenshot"
          src="https://ui.convertfa.st/images/graphic-walker-dark-2.png"
          width={2432}
          height={1442}
          className="mt-8 hidden rounded-md border shadow-2xl dark:block sm:mt-12"
        />
      </div>
    </div>
  );
};
