import Image from 'next/image';

import LandingWrap from '@/components/layout/landing-wrap';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LandingWrap>
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:min-h-[600px] lg:grid-cols-2 lg:px-8 xl:min-h-[800px]">
        {children}

        <div className="hidden bg-muted lg:block">
          <Image
            src="/placeholder.svg"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </LandingWrap>
  );
};

export default AuthLayout;
