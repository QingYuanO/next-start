'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { LoginSchema } from '@/schemas';
import { api } from '@/trpc/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { type z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import AuthFormWrap from './auth-form-wrap';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  const signError = searchParams.get('error');
  let urlError = '';
  if (signError === 'OAuthAccountNotLinked') {
    urlError = 'Email already in use with different provider!';
  } else if (signError === 'CredentialsSignin') {
    urlError = 'Please check your email and password';
  }

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutateAsync, isPending, error, data } = api.auth.checkeLogin.useMutation();

  const [isLogingWithGithub, setIsLogingWithGithub] = useState(false);

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    console.log(values);

    try {
      const res = await mutateAsync({ ...values, callbackUrl });
      if (res?.isEmailVerified) {
        await signIn('credentials', {
          email: values.email,
          password: values.password,
          redirectTo: callbackUrl ?? DEFAULT_LOGIN_REDIRECT,
        });
      }

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginWithGithub = async () => {
    setIsLogingWithGithub(true);
    await signIn('github', {
      callbackUrl: callbackUrl ?? DEFAULT_LOGIN_REDIRECT,
    });
  };

  const isLoading = isPending || isLogingWithGithub;

  return (
    <Form {...form}>
      <AuthFormWrap onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Sign in</h1>
          <p className="text-balance text-muted-foreground">Enter your email below to login to your account</p>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="m@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center">
                    <FormLabel>Password</FormLabel>
                    <Link href="/auth/reset" className="ml-auto inline-block text-sm underline">
                      Forgot your password?
                    </Link>
                  </div>
                  <FormControl>
                    <Input placeholder="******" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormError message={error?.message ?? urlError} />
          <FormSuccess message={data?.success} />

          <Button type="submit" className="w-full" disabled={isLoading}>
            Login
          </Button>
          <Button variant="outline" className="w-full" onClick={handleLoginWithGithub} disabled={isLoading}>
            Login with Github
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/auth/register" className="underline">
            Create an account
          </Link>
        </div>
      </AuthFormWrap>
    </Form>
  );
}
