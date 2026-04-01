'use client';

const testimonials = [
  {
    stars: 5,
    quote: '"InstiGenie has transformed how we manage student health. Their AI-powered assessments have helped us identify concerns months earlier than before."',
    initials: 'SP',
    name: 'Dr. Sarah Patel',
    role: 'Principal, Riverside Academy',
    avatarFrom: '#2563EB',
    avatarTo: '#14B8A6',
    bg: '#EFF6FF',
    border: 'rgba(37,99,235,0.12)',
  },
  {
    stars: 5,
    quote: '"Digital health records and real-time updates have made it so much easier to keep parents informed. The dashboard is intuitive and the AI insights are spot-on."',
    initials: 'RK',
    name: 'Dr. Rajesh Kumar',
    role: 'Physician, Oak Grove School',
    avatarFrom: '#14B8A6',
    avatarTo: '#22C55E',
    bg: '#F0FDFA',
    border: 'rgba(20,184,166,0.15)',
  },
  {
    stars: 5,
    quote: '"Their preventive care approach and AI flagging system has significantly reduced health-related absences. It\'s like having a 24/7 health intelligence team."',
    initials: 'PS',
    name: 'Nurse Priya Singh',
    role: 'School Nurse, Sunnydale High',
    avatarFrom: '#38BDF8',
    avatarTo: '#14B8A6',
    bg: '#F0F9FF',
    border: 'rgba(56,189,248,0.15)',
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="ig-reveal"
      style={{ padding: '80px 24px 90px', background: 'linear-gradient(160deg,#EFF6FF,#F0FDFA)' }}
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
          Testimonials
        </div>

        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
            letterSpacing: '-1.5px', color: '#0F2942', marginBottom: '48px',
          }}
        >
          Trusted by Leading Institutions
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="ig-test-card"
              style={{
                padding: '26px',
                borderRadius: '18px',
                border: `1.5px solid ${t.border}`,
                background: '#FFFFFF',
                transition: 'all 0.25s',
                boxShadow: '0 2px 14px rgba(0,0,0,0.04)',
              }}
            >
              {/* Stars */}
              <div style={{ color: '#F59E0B', fontSize: '13px', marginBottom: '14px', letterSpacing: '2px' }}>
                {'★'.repeat(t.stars)}
              </div>
              {/* Quote */}
              <p
                style={{
                  fontSize: '14px', color: '#3D5A73', lineHeight: 1.72,
                  marginBottom: '22px', fontStyle: 'italic',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {t.quote}
              </p>
              {/* Separator */}
              <div style={{ height: '1px', background: t.border, marginBottom: '18px' }} />
              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '38px', height: '38px', borderRadius: '50%',
                    background: `linear-gradient(135deg, ${t.avatarFrom}, ${t.avatarTo})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '13px', fontWeight: 700, color: '#fff',
                    flexShrink: 0, fontFamily: "'Space Grotesk', sans-serif",
                    boxShadow: `0 2px 10px ${t.border}`,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F2942', fontFamily: "'Space Grotesk', sans-serif" }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '12px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif" }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ig-test-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 38px rgba(37,99,235,0.10) !important;
        }
      `}</style>
    </section>
  );
}
