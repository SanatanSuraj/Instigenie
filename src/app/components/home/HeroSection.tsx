'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const router = useRouter();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Reveal animation trigger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      const revealElements = heroRef.current.querySelectorAll('.ig-reveal');
      revealElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 24px 80px',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #F8FAFC 0%, #EFF6FF 40%, #F0FDFA 100%)',
      }}
    >
      {/* Background Decor */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.06) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
          }}
        />
        {/* Soft atmospheric orbs */}
        <div style={{ position: 'absolute', width: '700px', height: '700px', top: '-10%', right: '-5%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.12), transparent 70%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', width: '500px', height: '500px', bottom: '-10%', left: '-5%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(20,184,166,0.10), transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div style={{ maxWidth: '1240px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '60px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Content */}
          <div className="ig-reveal" style={{ textAlign: 'left' }}>
            {/* Trusted Prefix */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '100px',
                background: 'rgba(37,99,235,0.05)',
                border: '1px solid rgba(37,99,235,0.12)',
                fontSize: '12px',
                fontWeight: 600,
                color: '#2563EB',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '28px',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563EB' }} />
              Health-First Education
            </div>

            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(42px, 5.5vw, 68px)',
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: '-2.5px',
                color: '#0F2942',
                marginBottom: '20px',
              }}
            >
              Healthy students <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #2563EB 0%, #14B8A6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                perform better
              </span>{' '}
              in school.
            </h1>

            <p
              style={{
                fontSize: 'clamp(17px, 1.8vw, 20px)',
                color: '#3D5A73',
                maxWidth: '540px',
                lineHeight: 1.6,
                marginBottom: '40px',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Detect vision, hearing & health issues early — before they impact learning.
            </p>

            {/* CTA Group */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => router.push('/contact')}
                  style={{
                    padding: '16px 36px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
                    boxShadow: '0 8px 24px rgba(20,184,166,0.25)',
                    transition: 'all 0.25s',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  className="ig-main-cta"
                >
                  Book School Screening
                </button>
                <button
                  onClick={() => router.push('/services')}
                  style={{
                    padding: '16px 32px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#3D5A73',
                    background: '#FFFFFF',
                    border: '1.5px solid rgba(15,41,66,0.12)',
                    cursor: 'pointer',
                    transition: 'all 0.22s',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  className="ig-sec-cta"
                >
                  See How It Works
                </button>
              </div>
              <div 
                style={{ 
                  fontSize: '13px', 
                  color: '#7A99B4', 
                  fontStyle: 'italic', 
                  paddingLeft: '4px',
                  fontFamily: "'DM Sans', sans-serif" 
                }}
              >
                Takes less than 2 minutes to get started
              </div>
            </div>

            {/* Trust Strip */}
            <div
              style={{
                marginTop: '48px',
                paddingTop: '32px',
                borderTop: '1px solid rgba(15,41,66,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#3D5A73',
                fontSize: '14px',
                fontWeight: 500,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <div style={{ display: 'flex', gap: '-8px' }}>
                {/* Visual indicator for "trusted" (avatars or icons) */}
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#14B8A6', opacity: 0.6 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2563EB', opacity: 0.6, marginLeft: '-4px' }} />
              </div>
              Trusted by 50+ schools across India · 10,000+ students screened
            </div>
          </div>

          {/* Right Column: Visual */}
          <div 
            className="ig-reveal" 
            style={{ 
              position: 'relative',
              animationDelay: '0.2s',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div 
              style={{ 
                position: 'relative',
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(15,41,66,0.12)',
                border: '6px solid #FFFFFF',
                width: '100%',
                maxWidth: '560px',
                aspectRatio: '1/1',
              }}
            >
              <Image 
                src="/images/home/hero-refined.png"
                alt="Health screening in school"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              
              {/* Floating Badges (Subtle) */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  padding: '10px 18px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.94)',
                  backdropFilter: 'blur(10px)',
                  border: '1.5px solid rgba(20,184,166,0.15)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div style={{ fontSize: '18px' }}>🛡️</div>
                <div>
                   <div style={{ fontSize: '11px', fontWeight: 800, color: '#0F2942', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif" }}>Clinical Grade</div>
                   <div style={{ fontSize: '10px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif" }}>Verified Standards</div>
                </div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  padding: '10px 18px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.94)',
                  backdropFilter: 'blur(10px)',
                  border: '1.5px solid rgba(37,99,235,0.15)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div style={{ fontSize: '18px' }}>🤖</div>
                <div>
                   <div style={{ fontSize: '11px', fontWeight: 800, color: '#0F2942', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif" }}>AI-Powered</div>
                   <div style={{ fontSize: '10px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif" }}>Automated Analytics</div>
                </div>
              </div>
            </div>
            
            {/* Background geometric accents */}
            <div style={{ position: 'absolute', zIndex: -1, top: '-20px', right: '-20px', width: '100%', height: '100%', border: '2px solid rgba(20,184,166,0.10)', borderRadius: '32px', transform: 'rotate(2deg)' }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .ig-main-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(20,184,166,0.35) !important;
        }
        .ig-sec-cta:hover {
          background: #F8FAFC !important;
          border-color: rgba(15,41,66,0.25) !important;
          transform: translateY(-1px);
        }
        @media (max-width: 768px) {
          section { padding-top: 60px !important; text-align: center !important; }
          .ig-reveal { text-align: center !important; }
          p { margin-left: auto !important; margin-right: auto !important; }
          div[style*="alignItems: flex-start"] { alignItems: center !important; }
          div[style*="justifyContent: center"] { margin-top: 40px !important; }
          div[style*="flexDirection: column"] { align-items: center !important; }
        }
      `}</style>
    </section>
  );
}
