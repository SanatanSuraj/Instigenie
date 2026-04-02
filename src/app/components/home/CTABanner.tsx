'use client';

import { useRouter } from 'next/navigation';

export default function CTABanner() {
  const router = useRouter();

  return (
    <div
      className="ig-reveal"
      style={{
        margin: '0 0 0 0',
        padding: '80px 40px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)',
      }}
    >
      {/* Soft decorative circles */}
      <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '20px', left: '30%', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />

      {/* Eyebrow */}
      <div
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '7px',
          padding: '5px 14px', borderRadius: '100px',
          border: '1px solid rgba(255,255,255,0.30)',
          background: 'rgba(255,255,255,0.12)',
          fontSize: '12px', fontWeight: 600,
          color: 'rgba(255,255,255,0.90)',
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: '1px', marginBottom: '20px',
          position: 'relative',
        }}
      >
        <div
          className="ig-pulse"
          style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 6px rgba(255,255,255,0.7)' }}
        />
        Ready to bring InstiGenie to your school
      </div>

      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 800,
          letterSpacing: '-1px', color: '#FFFFFF',
          marginBottom: '14px', position: 'relative',
          textShadow: '0 1px 12px rgba(0,0,0,0.12)',
        }}
      >
        The best time for prevention was last year. The second-best time is this term.
      </h2>

      <p
        style={{
          fontSize: '17px', color: 'rgba(255,255,255,0.85)',
          marginBottom: '40px', position: 'relative',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Bring Instigenie to your school: calmer classrooms, clearer parents, cleaner data, and children who can see, hear, eat, and focus well enough to learn.
      </p>

      <div
        style={{
          display: 'flex', alignItems: 'center', gap: '14px',
          justifyContent: 'center', flexWrap: 'wrap', position: 'relative',
        }}
      >
        {/* Primary — white pill */}
        <button
          onClick={() => router.push('/book-checkup')}
          className="ig-cta-main"
          style={{
            padding: '15px 34px', borderRadius: '12px',
            fontSize: '16px', fontWeight: 700,
            color: '#2563EB', cursor: 'pointer',
            border: 'none', fontFamily: "'DM Sans', sans-serif",
            background: '#FFFFFF',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            position: 'relative', overflow: 'hidden',
            transition: 'all 0.28s',
          }}
        >
          <div
            className="ig-shimmer"
            style={{
              position: 'absolute', top: '-50%', left: '-100%',
              width: '60%', height: '200%',
              background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.06), transparent)',
              transform: 'skewX(-20deg)',
            }}
          />
          Book a conversation →
        </button>

        {/* Secondary — outline white */}
        <button
          onClick={() => router.push('/contact')}
          className="ig-cta-secondary"
          style={{
            padding: '15px 28px', borderRadius: '12px',
            fontSize: '15px', fontWeight: 600,
            color: '#fff', cursor: 'pointer',
            border: '2px solid rgba(255,255,255,0.50)',
            background: 'rgba(255,255,255,0.10)',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.25s', fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Download one-page overview
        </button>
      </div>

      <style jsx>{`
        .ig-cta-main:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 36px rgba(0,0,0,0.22) !important;
        }
        .ig-cta-secondary:hover {
          background: rgba(255,255,255,0.20) !important;
          border-color: rgba(255,255,255,0.75) !important;
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}
