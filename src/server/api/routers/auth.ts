import { sendPasswordResetEmail, sendVerificationEmail } from '@/lib/email';
import { LoginSchema, NewPasswordApiSchema, NewPasswordSchema, RegisterSchema, ResetSchema } from '@/schemas';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { db } from '@/server/db';
import { generatePasswordResetToken, generateVerificationToken, getVerificationTokenByToken } from '@/server/service/token';
import { getUserByEmail } from '@/server/service/user';
import { TRPCError } from '@trpc/server';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

export const authRouter = createTRPCRouter({
  register: publicProcedure.input(RegisterSchema).mutation(async ({ input }) => {
    const { email, password, name } = input;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      throw new TRPCError({ code: 'BAD_REQUEST', message: 'Email already in use!' });
    }

    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail({ email, token: verificationToken.token });

    return { success: 'Confirmation email sent!' };
  }),
  checkeLogin: publicProcedure.input(LoginSchema).mutation(async ({ input }) => {
    const { email } = input;

    const existingUser = await getUserByEmail(email);

    if (!existingUser?.email || !existingUser?.password) {
      throw new TRPCError({ code: 'BAD_REQUEST', message: 'Email does not exist!' });
    }

    if (!existingUser.emailVerified) {
      const verificationToken = await generateVerificationToken(existingUser.email);

      await sendVerificationEmail({ email: existingUser.email, token: verificationToken.token });

      return { success: 'Confirmation email sent!', isEmailVerified: false };
    }

    return { success: '', isEmailVerified: true };
  }),
  newVerification: publicProcedure.input(z.object({ token: z.string() })).query(async ({ input }) => {
    const { token } = input;

    const existingToken = await getVerificationTokenByToken(token);

    if (!existingToken) {
      throw new TRPCError({ code: 'BAD_REQUEST', message: 'Token does not exist!' });
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) {
      throw new TRPCError({ code: 'BAD_REQUEST', message: 'Token has expired!' });
    }

    const existingUser = await getUserByEmail(existingToken.email);

    if (!existingUser) {
      throw new TRPCError({ code: 'BAD_REQUEST', message: 'Email does not exist!' });
    }

    await db.user.update({
      where: { id: existingUser.id },
      data: {
        emailVerified: new Date(),
        email: existingToken.email,
      },
    });

    await db.verificationToken.delete({
      where: { id: existingToken.id },
    });

    return { success: 'Email verified!' };
  }),

  resetPasswordVerification: publicProcedure.input(ResetSchema).mutation(async ({ input }) => {
    const { email } = input;

    const existingUser = await getUserByEmail(email);

    if (!existingUser) {
      throw new TRPCError({ code: 'BAD_REQUEST', message: 'Email not found!' });
    }

    const passwordResetToken = await generatePasswordResetToken(email);
    await sendPasswordResetEmail({ email, token: passwordResetToken.token });

    return { success: 'Reset email sent!' };
  }),
  resetPassword: publicProcedure.input(NewPasswordApiSchema).mutation(async ({ input }) => {
    const { password, token } = input;

    const existingToken = await db.passwordResetToken.findUnique({
      where: { token },
    });
    if (!existingToken) {
      throw new TRPCError({ code: 'BAD_REQUEST', message: 'Invalid token!' });
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) {
      throw new TRPCError({ code: 'BAD_REQUEST', message: 'Token has expired!' });
    }

    const existingUser = await getUserByEmail(existingToken.email);

    if (!existingUser) {
      throw new TRPCError({ code: 'BAD_REQUEST', message: 'Email does not exist!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.update({
      where: { id: existingUser.id },
      data: { password: hashedPassword },
    });

    await db.passwordResetToken.delete({
      where: { id: existingToken.id },
    });

    return { success: 'Password updated!' };
  }),
});
