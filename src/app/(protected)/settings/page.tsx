import React from 'react';
import { auth } from '@/server/auth';

export default async function SettingsPage() {
  const user = await auth();
  return <div>{JSON.stringify(user)}</div>;
}
