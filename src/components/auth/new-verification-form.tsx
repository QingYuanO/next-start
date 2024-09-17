'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { api } from '@/trpc/react';
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';

import AuthFormWrap from './auth-form-wrap';

export const NewVerificationForm = () => {
  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const { data, isLoading, error } = api.auth.newVerification.useQuery({ token: token ?? '' }, { enabled: !!token });

  return (
    <AuthFormWrap>
      {!token ? (
        <>
          <h1 className="text-3xl font-bold">Not Token</h1>
          <p className="text-muted-foreground">Token is empty, please check your email for the login link.</p>
        </>
      ) : (
        <>
          {isLoading && (
            <h1 className="flex items-center justify-center gap-2 text-3xl font-bold">
              <Loader2 className="animate-spin" /> Verifying...
            </h1>
          )}
          {error && (
            <>
              <h1 className="text-3xl font-bold">Verification Failed</h1>
              <p className="text-muted-foreground">{error.message}</p>
            </>
          )}
          {data && !error && (
            <>
              <h1 className="text-3xl font-bold">Verification Success</h1>
              <p className="text-muted-foreground">You can now login to your account.</p>
            </>
          )}
        </>
      )}

      <Button variant="outline" className="w-full" asChild>
        <Link href="/auth/login">Back to Login</Link>
      </Button>
    </AuthFormWrap>
  );
};
