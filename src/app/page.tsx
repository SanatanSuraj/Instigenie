'use client';

import { useEffect } from 'react';
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/home/ServicesSection';
import AIPanelSection from './components/home/AIPanelSection';
import WhySection from './components/home/WhySection';
import TestimonialsSection from './components/home/TestimonialsSection';
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
      { threshold: 0.12 }
    );

    document.querySelectorAll('.ig-reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const Divider = () => (
    <hr
      style={{
        border: 'none',
        borderTop: '1px solid var(--ig-border)',
        margin: '0 24px',
      }}
    />
  );

  return (
    <>
      <HeroSection />
      <Divider />
      <ServicesSection />
      <Divider />
      <AIPanelSection />
      <Divider />
      <WhySection />
      <Divider />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
