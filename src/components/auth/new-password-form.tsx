'use client';

import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { NewPasswordSchema } from '@/schemas';
import { api } from '@/trpc/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { type z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import AuthFormWrap from './auth-form-wrap';

export default function NewPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
    },
  });

  const { mutateAsync, isPending, error, data } = api.auth.resetPassword.useMutation();

  const onSubmit = async (values: z.infer<typeof NewPasswordSchema>) => {
    console.log(values);

    try {
      const res = await mutateAsync({ ...values, token: token ?? '' });

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const isLoading = isPending;

  return (
    <Form {...form}>
      <AuthFormWrap onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Reset password</h1>
          <p className="text-balance text-muted-foreground">Enter your new password below to reset your password</p>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="******" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormError message={error?.message} />
          <FormSuccess message={data?.success} />

          <Button type="submit" className="w-full" disabled={isLoading}>
            Reset password
          </Button>
          <Button variant="link" className="w-full" asChild>
            <Link href="/auth/login">Back to Login</Link>
          </Button>
        </div>
      </AuthFormWrap>
    </Form>
  );
}
