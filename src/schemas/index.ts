import { UserRole } from '@prisma/client';
import * as z from 'zod';

export const EmailSchema = z.string().email({
  message: 'Email is required',
});

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    data => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: 'New password is required!',
      path: ['newPassword'],
    }
  )
  .refine(
    data => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: 'Password is required!',
      path: ['password'],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Minimum of 6 characters required',
  }),
});

export const NewPasswordApiSchema = NewPasswordSchema.merge(z.object({ token: z.string().min(1, { message: 'Token is required' }) }));

export const ResetSchema = z.object({
  email: EmailSchema,
});

export const LoginSchema = z.object({
  email: EmailSchema,
  password: z.string().min(1, {
    message: 'Password is required',
  }),
  callbackUrl: z.nullable(z.string()).optional(),
});

export const RegisterSchema = z.object({
  email: EmailSchema,
  password: z.string().min(6, {
    message: 'Minimum 6 characters required',
  }),
  name: z.string().min(1, {
    message: 'Name is required',
  }),
});
