'use client';

const stats = [
  {
    num: '250M+',
    label: 'Children in school daily in India',
    sub: 'many never formally screened for vision, hearing, nutrition, or mental health barriers',
    color: '#2563EB',
    bg: '#EFF6FF',
    border: 'rgba(37,99,235,0.15)',
  },
  {
    num: '13.25%',
    label: 'Out-of-school children cite poor health',
    sub: 'third-largest driver nationally — after poverty and disinterest',
    color: '#0D9488',
    bg: '#F0FDFA',
    border: 'rgba(20,184,166,0.18)',
  },
  {
    num: '4.27M',
    label: 'Students lost to dropout each year',
    sub: 'secondary dropout ~13.3% — health is an under-reported part of the story',
    color: '#D97706',
    bg: '#FFFBEB',
    border: 'rgba(245,158,11,0.20)',
  },
  {
    num: 'NFHS-5',
    label: 'Grounded in trusted public health data',
    sub: 'NFHS-5, CNNS, ASER, UDISE+ — brought together into action at the school gate',
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: 'rgba(124,58,237,0.15)',
  },
];

export default function CredibilityStrip() {
  return (
    <section
      className="ig-reveal"
      style={{
        padding: '72px 24px 80px',
        background: 'linear-gradient(160deg, #F8FAFF 0%, #F0FDFA 100%)',
        borderTop: '1px solid rgba(37,99,235,0.07)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontSize: '12px', fontWeight: 600, color: '#D97706',
              letterSpacing: '2px', textTransform: 'uppercase' as const,
              marginBottom: '14px', fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#F59E0B', borderRadius: '2px' }} />
            The Scale of the Challenge
            <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#F59E0B', borderRadius: '2px' }} />
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800,
              letterSpacing: '-1.5px', color: '#0F2942', marginBottom: '12px',
            }}
          >
            India&apos;s school health gap — in numbers
          </h2>
          <p style={{ fontSize: '16px', color: '#3D5A73', fontFamily: "'DM Sans', sans-serif", maxWidth: '580px', margin: '0 auto' }}>
            Data from national surveys schools and parents already trust — now turned into action.
          </p>
        </div>

        {/* Stats grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '16px',
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="ig-cred-card"
              style={{
                background: s.bg,
                border: `1.5px solid ${s.border}`,
                borderRadius: '18px',
                padding: '28px 24px',
                transition: 'all 0.25s',
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(28px, 3.5vw, 40px)',
                  fontWeight: 800,
                  color: s.color,
                  marginBottom: '8px',
                  letterSpacing: '-1px',
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: '14px', fontWeight: 700,
                  color: '#0F2942', marginBottom: '6px',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontSize: '12.5px', color: '#3D5A73', lineHeight: 1.6,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p
          style={{
            textAlign: 'center', marginTop: '28px',
            fontSize: '11.5px', color: '#7A99B4',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Statistics reflect national surveys and education management data (NFHS-5, CNNS, ASER, UDISE+).
        </p>
      </div>

      <style jsx>{`
        .ig-cred-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(37,99,235,0.10);
        }
      `}</style>
    </section>
  );
}
