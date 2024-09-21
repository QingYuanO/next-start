import React from 'react';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export default function LandingWrap({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
