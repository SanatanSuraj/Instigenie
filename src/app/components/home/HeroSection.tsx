'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const router = useRouter();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (heroRef.current) heroRef.current.style.opacity = '1';
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px 60px',
        overflow: 'hidden',
        textAlign: 'center',
        /* Gentle sky-to-mint gradient — fresh, airy */
        background: 'linear-gradient(160deg, #EFF6FF 0%, #F0FDFA 50%, #ECFDF5 100%)',
      }}
    >
      {/* Subtle background elements */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* Dot grid — very light */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.09) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
          }}
        />
        {/* Soft orb 1 — sky blue */}
        <div
          className="ig-drift-1"
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            top: '-20%',
            right: '-8%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Soft orb 2 — teal */}
        <div
          className="ig-drift-2"
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            bottom: '0%',
            left: '-5%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20,184,166,0.14) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Soft orb 3 — green */}
        <div
          className="ig-drift-3"
          style={{
            position: 'absolute',
            width: '380px',
            height: '380px',
            top: '30%',
            left: '15%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          borderRadius: '100px',
          border: '1px solid rgba(20,184,166,0.35)',
          background: 'rgba(20,184,166,0.08)',
          fontSize: '12px',
          fontWeight: 600,
          color: '#0D9488',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          marginBottom: '28px',
          position: 'relative',
          zIndex: 1,
          fontFamily: "'Space Grotesk', sans-serif",
          boxShadow: '0 2px 10px rgba(20,184,166,0.12)',
        }}
      >
        <div
          className="ig-pulse"
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#14B8A6',
            boxShadow: '0 0 7px #14B8A6',
          }}
        />
        School Health · Screening · Digital Records
      </div>

      {/* Headline */}
      <h1
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(40px, 6.5vw, 76px)',
          fontWeight: 800,
          lineHeight: 1.06,
          letterSpacing: '-2px',
          color: '#0F2942',
          maxWidth: '860px',
          marginBottom: '8px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        Healthy students{' '}
        <span
          style={{
            background: 'linear-gradient(90deg, #2563EB 0%, #14B8A6 60%, #22C55E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          learn better.
        </span>
        <br />
        Give every child a fair shot in class.
      </h1>

      {/* Sub-headline */}
      <p
        style={{
          fontSize: 'clamp(16px, 2vw, 19px)',
          color: '#3D5A73',
          maxWidth: '560px',
          lineHeight: 1.68,
          margin: '22px auto 48px',
          fontWeight: 400,
          position: 'relative',
          zIndex: 1,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Instigenie brings structured, school-based health screening, digital records, and clear referrals — so issues
        like poor vision, hearing, anemia, dental pain, and hidden stress stop silently holding students back.
      </p>

      {/* CTA Buttons */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <button
          onClick={() => router.push('/contact')}
          className="ig-cta-main"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '15px 34px',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 600,
            color: '#fff',
            cursor: 'pointer',
            border: 'none',
            fontFamily: "'DM Sans', sans-serif",
            background: 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)',
            boxShadow: '0 4px 20px rgba(37,99,235,0.28)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s',
          }}
        >
          <div
            className="ig-shimmer"
            style={{
              position: 'absolute',
              top: '-50%',
              left: '-100%',
              width: '60%',
              height: '200%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              transform: 'skewX(-20deg)',
            }}
          />
          Talk to us about your school →
        </button>

        <button
          onClick={() => router.push('/services')}
          className="ig-cta-secondary"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '15px 28px',
            borderRadius: '12px',
            fontSize: '15px',
            fontWeight: 500,
            color: '#3D5A73',
            cursor: 'pointer',
            border: '1px solid rgba(37,99,235,0.18)',
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.25s',
            fontFamily: "'DM Sans', sans-serif",
            boxShadow: '0 2px 8px rgba(37,99,235,0.07)',
          }}
        >
          See what&apos;s included
        </button>
      </div>




      {/* Supporting line */}
      <p
        style={{
          marginTop: '18px',
          fontSize: '12.5px', color: '#7A99B4',
          fontFamily: "'DM Sans', sans-serif",
          position: 'relative', zIndex: 1,
        }}
      >
        Designed for privacy, clinical quality, and scale — from metro campuses to towns and rural clusters.
      </p>

      <style jsx>{`
        .ig-cta-main:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 36px rgba(37, 99, 235, 0.38) !important;
        }
        .ig-cta-secondary:hover {
          color: #2563EB !important;
          border-color: rgba(37, 99, 235, 0.30) !important;
          background: rgba(255, 255, 255, 0.95) !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(37, 99, 235, 0.12) !important;
        }
      `}</style>
    </section>
  );
}
