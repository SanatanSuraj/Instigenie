'use client';

import Link from 'next/link';

const quotes = [
  {
    text: 'Healthy children build strong nations — screen today, secure tomorrow.',
    color: '#2563EB',
    bg: '#EFF6FF',
    border: 'rgba(37,99,235,0.15)',
    icon: '🌱',
  },
  {
    text: 'Small check-ups, big futures — because every child deserves to be seen.',
    color: '#0D9488',
    bg: '#F0FDFA',
    border: 'rgba(20,184,166,0.18)',
    icon: '🔍',
  },
  {
    text: 'You cannot educate a hungry, sick, or unseen child — screen, nourish, empower.',
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: 'rgba(124,58,237,0.15)',
    icon: '❤️',
  },
  {
    text: 'A nation that screens its children is a nation that sees its future.',
    color: '#16A34A',
    bg: '#F0FDF4',
    border: 'rgba(34,197,94,0.16)',
    icon: '🏳️',
  },
];

export default function PrinciplesSection() {
  return (
    <section
      className="ig-reveal"
      style={{
        padding: '80px 24px 90px',
        background: 'linear-gradient(160deg, #F0FDFA 0%, #EFF6FF 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontSize: '12px', fontWeight: 600, color: '#0D9488',
            letterSpacing: '2px', textTransform: 'uppercase' as const,
            marginBottom: '14px', fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px' }} />
          Principles We Stand By
        </div>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800,
            letterSpacing: '-1.5px', color: '#0F2942',
            marginBottom: '48px', maxWidth: '560px',
          }}
        >
          The beliefs that guide every camp, every record, every referral
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          {quotes.map((q) => (
            <div
              key={q.text}
              className="ig-quote-card"
              style={{
                padding: '28px 24px',
                borderRadius: '18px',
                background: '#FFFFFF',
                border: `1.5px solid ${q.border}`,
                borderLeft: `5px solid ${q.color}`,
                boxShadow: '0 2px 14px rgba(0,0,0,0.04)',
                transition: 'all 0.25s',
              }}
            >
              <div
                style={{
                  width: '40px', height: '40px', borderRadius: '11px',
                  background: q.bg, border: `1.5px solid ${q.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', marginBottom: '18px',
                }}
              >
                {q.icon}
              </div>
              <p
                style={{
                  fontSize: '15.5px', fontStyle: 'italic',
                  color: '#3D5A73', lineHeight: 1.75,
                  fontFamily: "'DM Sans', sans-serif",
                  margin: 0,
                }}
              >
                &ldquo;{q.text}&rdquo;
              </p>
              <div
                style={{
                  marginTop: '18px', height: '2px', width: '40px',
                  borderRadius: '2px',
                  background: `linear-gradient(90deg, ${q.color}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* FAQ teaser callout */}
        <div
          style={{
            padding: '22px 28px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #EFF6FF, #F0FDFA)',
            border: '1.5px solid rgba(37,99,235,0.10)',
            boxShadow: '0 2px 12px rgba(37,99,235,0.05)',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap' as const, gap: '16px',
          }}
        >
          <div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#0F2942', marginBottom: '4px', fontFamily: "'Space Grotesk', sans-serif" }}>
              Have questions?
            </div>
            <div style={{ fontSize: '13.5px', color: '#3D5A73', fontFamily: "'DM Sans', sans-serif" }}>
              We&apos;ve answered the most common questions from schools, parents, and partners.
            </div>
          </div>
          <Link
            href="/faq"
            className="ig-faq-teaser-btn"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '10px 22px', borderRadius: '10px',
              fontSize: '14px', fontWeight: 600, color: '#2563EB',
              background: '#FFFFFF', border: '1.5px solid rgba(37,99,235,0.18)',
              textDecoration: 'none', fontFamily: "'DM Sans', sans-serif",
              boxShadow: '0 2px 10px rgba(37,99,235,0.08)',
              transition: 'all 0.22s', whiteSpace: 'nowrap' as const,
            }}
          >
            See all FAQs →
          </Link>
        </div>
      </div>

      <style jsx>{`
        .ig-quote-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 36px rgba(37,99,235,0.10) !important;
        }
        .ig-faq-teaser-btn:hover {
          background: #EFF6FF !important;
          transform: translateX(3px);
          box-shadow: 0 4px 20px rgba(37,99,235,0.14) !important;
        }
      `}</style>
    </section>
  );
}
