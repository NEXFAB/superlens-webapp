
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhatIsSuperLens from '@/components/WhatIsSuperLens';
import HowSuperLensIsDifferent from '@/components/HowSuperLensIsDifferent';
import TechStack from '@/components/TechStack';
import SecurityTrust from '@/components/SecurityTrust';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div>
        <main>
          <Hero />
          <WhatIsSuperLens />
          <HowSuperLensIsDifferent />
          <TechStack />
          <SecurityTrust />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
