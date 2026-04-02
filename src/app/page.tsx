'use client';

import { useEffect } from 'react';
import HeroSection from './components/home/HeroSection';
import CredibilityStrip from './components/home/CredibilityStrip';
import SilentCrisisSection from './components/home/SilentCrisisSection';
import ProblemSection from './components/home/ProblemSection';
import NationalMissionsSection from './components/home/NationalMissionsSection';
import ServicesSection from './components/home/ServicesSection';
import AIPanelSection from './components/home/AIPanelSection';
import AIInfrastructureSection from './components/home/AIInfrastructureSection';
import HowItWorksSection from './components/home/HowItWorksSection';
import BenefitsSection from './components/home/BenefitsSection';
import MaharashtraSection from './components/home/MaharashtraSection';
import PrinciplesAndFAQ from './components/home/PrinciplesAndFAQ';
import CTABanner from './components/home/CTABanner';

export default function Home() {
  useEffect(() => {
    // Scroll reveal via IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.10 }
    );

    document.querySelectorAll('.ig-reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const Divider = () => (
    <hr
      style={{
        border: 'none',
        borderTop: '1px solid rgba(37,99,235,0.07)',
        margin: '0',
      }}
    />
  );

  return (
    <>
      {/* 1. Hero */}
      <HeroSection />
      <Divider />

      {/* 2. Credibility strip */}
      <CredibilityStrip />
      <Divider />

      {/* 3. Silent Crisis — detailed national stats */}
      <SilentCrisisSection />

      {/* 4. Problem statement */}
      <ProblemSection />
      <Divider />

      {/* 5. Government alignment — National Missions */}
      <NationalMissionsSection />

      {/* 4 & 5. Solution overview + Key features */}
      <ServicesSection />
      <Divider />

      {/* Technology — AI panel */}
      <AIPanelSection />

      {/* AI-First Infrastructure deep dive */}
      <AIInfrastructureSection />
      <Divider />

      {/* 6. How it works */}
      <HowItWorksSection />
      <Divider />

      {/* 7. Benefits & outcomes */}
      <BenefitsSection />
      <Divider />

      {/* 8-10. Maharashtra package + Partner ecosystem */}
      <MaharashtraSection />
      <Divider />

      {/* 11 & 12. Principles + FAQs */}
      <PrinciplesAndFAQ />
      <Divider />

      {/* 13. Closing CTA */}
      <CTABanner />
    </>
  );
}
