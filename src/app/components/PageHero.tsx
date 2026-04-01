'use client';

import { useRouter } from 'next/navigation';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle: string;
  cta?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  gradient?: string;
}

/** Shared light-theme hero banner for all inner pages */
export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  cta,
  ctaSecondary,
  gradient = 'linear-gradient(160deg, #EFF6FF 0%, #F0FDFA 60%, #ECFDF5 100%)',
}: PageHeroProps) {
  const router = useRouter();

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        padding: '60px 48px',
        marginBottom: '48px',
        background: gradient,
        border: '1.5px solid rgba(37,99,235,0.10)',
        boxShadow: '0 4px 28px rgba(37,99,235,0.07)',
      }}
    >
      {/* Dot grid decoration */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />
      {/* Soft orbs */}
      <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', top: '-80px', right: '-60px', background: 'radial-gradient(circle, rgba(56,189,248,0.15), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: '250px', height: '250px', borderRadius: '50%', bottom: '-60px', left: '-40px', background: 'radial-gradient(circle, rgba(20,184,166,0.12), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
        {eyebrow && (
          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              padding: '5px 14px', borderRadius: '100px',
              border: '1px solid rgba(20,184,166,0.30)',
              background: 'rgba(20,184,166,0.07)',
              fontSize: '11px', fontWeight: 700,
              color: '#0D9488', letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '20px',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#14B8A6', boxShadow: '0 0 6px #14B8A6' }} />
            {eyebrow}
          </div>
        )}

        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-1.5px',
            color: '#0F2942',
            marginBottom: '16px',
          }}
        >
          {title}{' '}
          {highlight && (
            <span
              style={{
                background: 'linear-gradient(90deg, #2563EB 0%, #14B8A6 60%, #22C55E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {highlight}
            </span>
          )}
        </h1>

        <p
          style={{
            fontSize: 'clamp(15px, 1.8vw, 18px)',
            color: '#3D5A73',
            lineHeight: 1.68,
            marginBottom: cta ? '32px' : '0',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {subtitle}
        </p>

        {(cta || ctaSecondary) && (
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {cta && (
              <button
                onClick={() => router.push(cta.href)}
                style={{
                  padding: '13px 28px', borderRadius: '10px',
                  fontSize: '15px', fontWeight: 600, color: '#fff',
                  cursor: 'pointer', border: 'none',
                  fontFamily: "'DM Sans', sans-serif",
                  background: 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)',
                  boxShadow: '0 4px 18px rgba(37,99,235,0.28)',
                  transition: 'all 0.25s',
                }}
                className="ig-hero-cta"
              >
                {cta.label} →
              </button>
            )}
            {ctaSecondary && (
              <button
                onClick={() => router.push(ctaSecondary.href)}
                style={{
                  padding: '13px 24px', borderRadius: '10px',
                  fontSize: '15px', fontWeight: 500,
                  color: '#3D5A73', cursor: 'pointer',
                  border: '1.5px solid rgba(37,99,235,0.18)',
                  background: 'rgba(255,255,255,0.80)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.22s',
                  fontFamily: "'DM Sans', sans-serif",
                }}
                className="ig-hero-cta-sec"
              >
                {ctaSecondary.label}
              </button>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .ig-hero-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(37,99,235,0.38) !important; }
        .ig-hero-cta-sec:hover { color: #2563EB !important; border-color: rgba(37,99,235,0.35) !important; background: #fff !important; }
      `}</style>
    </div>
  );
}
