import { type FC } from 'react';
import Link from 'next/link';
import { SiGithub } from '@icons-pack/react-simple-icons';

import { Button } from '@/components/ui/button';

// import { BGShapeCircle } from "@/components/bg-shape-circle";

export const CTA: FC = () => {
  return (
    <section className="relative bg-gradient-to-t from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
      <div className="absolute inset-0 bottom-0 left-0 right-0 top-0 bg-[url('/gradient-bg-0.svg')] bg-auto bg-center bg-no-repeat grayscale"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to build your high-converting landing page?
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground opacity-90">
            With Next Start, you can create stunning landing pages that turn visitors into customers. Start building for free and see the
            difference.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="flex w-full items-center gap-2 sm:w-auto">
              <SiGithub className="size-4" />
              <Link href="https://github.com/QingYuanO/next-start" target="_blank">
                Star on GitHub
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground opacity-75">No credit card required. Start building in minutes.</p>
        </div>
      </div>
    </section>
  );
};
