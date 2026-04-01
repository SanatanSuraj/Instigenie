'use client';

const whyItems = [
  { icon: '🔍', title: 'Early Detection', desc: 'AI identifies health issues months before traditional screenings — enabling proactive, preventive care for every student.', color: '#2563EB', bg: '#EFF6FF', border: 'rgba(37,99,235,0.15)' },
  { icon: '⚡', title: 'AI-Powered', desc: 'Advanced models trained on millions of paediatric records for accurate, unbiased diagnostics at scale.', color: '#0D9488', bg: '#F0FDFA', border: 'rgba(20,184,166,0.18)' },
  { icon: '👨‍⚕️', title: 'Expert Care', desc: 'Qualified healthcare professionals and specialists on-site, backed by real-time AI decision support.', color: '#0284C7', bg: '#F0F9FF', border: 'rgba(56,189,248,0.18)' },
  { icon: '🔒', title: 'Secure Records', desc: 'End-to-end encrypted digital records with instant parent access, compliant with DPDP and HIPAA standards.', color: '#16A34A', bg: '#F0FDF4', border: 'rgba(34,197,94,0.18)' },
];

export default function WhySection() {
  return (
    <section
      className="ig-reveal"
      style={{ padding: '80px 24px 90px', background: '#FFFFFF' }}
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
          Why Choose Us
        </div>

        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
            letterSpacing: '-1.5px', color: '#0F2942', marginBottom: '48px',
          }}
        >
          Built for the Future of School Health
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '18px',
          }}
        >
          {whyItems.map((item) => (
            <div
              key={item.title}
              className="ig-why-card"
              style={{
                padding: '26px',
                borderRadius: '16px',
                border: `1.5px solid ${item.border}`,
                background: item.bg,
                transition: 'all 0.25s',
              }}
            >
              <div
                style={{
                  width: '42px', height: '42px', borderRadius: '11px',
                  background: '#FFFFFF',
                  border: `1.5px solid ${item.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px', marginBottom: '18px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                }}
              >
                {item.icon}
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '16px', fontWeight: 700,
                  color: '#0F2942', marginBottom: '8px',
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontSize: '13px', color: '#3D5A73', lineHeight: 1.65,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ig-why-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(37,99,235,0.10);
        }
      `}</style>
    </section>
  );
}
