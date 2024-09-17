import React from 'react';
import { auth } from '@/server/auth';

import MainWrap from '@/components/layout/main-wrap';

export default async function SettingsPage() {
  const user = await auth();
  return (
    <MainWrap>
      <div className="word-break-all overflow-hidden">{JSON.stringify(user)}</div>
    </MainWrap>
  );
}
