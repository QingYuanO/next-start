'use client';

import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { ResetSchema } from '@/schemas';
import { api } from '@/trpc/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { type z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import AuthFormWrap from './auth-form-wrap';

export default function ResetForm() {
  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: '',
    },
  });

  const { mutateAsync, isPending, error, data } = api.auth.resetPasswordVerification.useMutation();

  const onSubmit = async (values: z.infer<typeof ResetSchema>) => {
    console.log(values);

    try {
      const res = await mutateAsync(values);
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
          <p className="text-balance text-muted-foreground">Enter your email below to reset your password</p>
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

          <FormError message={error?.message} />
          <FormSuccess message={data?.success} />

          <Button type="submit" className="w-full" disabled={isLoading}>
            Send reset email
          </Button>
          <Button variant="link" className="w-full" asChild>
            <Link href="/auth/login">Back to Login</Link>
          </Button>
        </div>
      </AuthFormWrap>
    </Form>
  );
}
