'use client';

import { useState } from 'react';
import Image from 'next/image';

import SignInForm from './_components/sign-in';
import SignUpForm from './_components/sign-up';

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.";

export default function Dashboard() {
  const [type, setType] = useState<'signIn' | 'signUp'>('signIn');

  return (
    <div className="w-full px-10 py-24 lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      {type === 'signIn' && <SignInForm onToSignUp={() => setType('signUp')} />}

      {type === 'signUp' && <SignUpForm onToSignIn={() => setType('signIn')} />}

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
  );
}
