import { env } from '@/env';
import nodemailer from 'nodemailer';

export const qqEmailConfig = {
  host: 'smtp.qq.com',
  port: 465,
  secure: true,
  auth: {
    user: env.QQ_EMAIL_ADDRESS,
    pass: env.QQ_EMAIL_PASSWORD, // 使用QQ邮箱的授权码
  },
};

const domain = env.NEXT_PUBLIC_APP_URL;

export const sendVerificationEmail = async ({ email, token }: { email: string; token: string }) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  const transport = nodemailer.createTransport(qqEmailConfig);
  const res = await transport.sendMail({
    from: qqEmailConfig.auth.user,
    to: email,
    subject: 'Confirm your email',
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });

  console.log(res);

  return res;
};

export const sendPasswordResetEmail = async ({ email, token }: { email: string; token: string }) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;
  const transport = nodemailer.createTransport(qqEmailConfig);
  await transport.sendMail({
    from: qqEmailConfig.auth.user,
    to: email,
    subject: 'Reset your password',
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
  });
};
