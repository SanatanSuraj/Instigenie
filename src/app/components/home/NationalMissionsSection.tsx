'use client';

const missions = [
  {
    tag: 'Rashtriya Bal Swasthya Karyakram',
    title: 'RBSK',
    desc: "India's core child health screening program covering 4Ds: Defects, Diseases, Deficiencies, Delays.",
    points: [
      'Digitizes the entire 4D screening workflow',
      'Tracks referral closures & treatment outcomes',
    ],
    icon: '🏛️',
    color: '#2563EB',
    bg: '#EFF6FF',
    border: 'rgba(37,99,235,0.15)',
    tagColor: '#2563EB',
  },
  {
    tag: 'Poshan Abhiyaan',
    title: 'Anemia Mukt Bharat',
    desc: 'National strategy to reduce anaemia prevalence among children and adolescents (6×6×6 strategy).',
    points: [
      'Early risk identification via physical signs',
      'Digital nudges for IFA supplementation adherence',
    ],
    icon: '🩸',
    color: '#DC2626',
    bg: '#FEF2F2',
    border: 'rgba(220,38,38,0.15)',
    tagColor: '#DC2626',
  },
  {
    tag: 'Mid-Day Meal Scheme',
    title: 'PM POSHAN',
    desc: 'School feeding program improving nutritional status and enrollment. InstiGenie adds data intelligence.',
    points: [
      'Nutrition flagging (BMI/Stunting) for targeted support',
      'Data convergence between health needs & diet plans',
    ],
    icon: '🍱',
    color: '#D97706',
    bg: '#FFFBEB',
    border: 'rgba(217,119,6,0.18)',
    tagColor: '#D97706',
  },
  {
    tag: 'Global Goals',
    title: 'UN SDGs 3 + 4',
    desc: 'Contributing to Good Health (SDG 3) and Quality Education (SDG 4) through measurable outcomes.',
    points: [
      'Measurable health indicators for global reporting',
      'Reducing health-related learning barriers',
    ],
    icon: '🌐',
    color: '#16A34A',
    bg: '#F0FDF4',
    border: 'rgba(34,197,94,0.18)',
    tagColor: '#16A34A',
  },
];

export default function NationalMissionsSection() {
  return (
    <section
      className="ig-reveal"
      style={{
        padding: '80px 24px 90px',
        background: 'linear-gradient(160deg, #EFF6FF 0%, #F0FDFA 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '52px' }}>
          <div
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              fontSize: '12px', fontWeight: 600, color: '#2563EB',
              letterSpacing: '2px', textTransform: 'uppercase' as const,
              marginBottom: '14px', fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#2563EB', borderRadius: '2px' }} />
            Government Alignment
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800,
              letterSpacing: '-1.5px', color: '#0F2942',
              marginBottom: '14px',
            }}
          >
            Synergy with national missions
          </h2>
          <p
            style={{
              fontSize: '17px', color: '#3D5A73',
              fontFamily: "'DM Sans', sans-serif", lineHeight: 1.65,
              maxWidth: '560px',
            }}
          >
            InstiGenie is designed to complement and strengthen India&apos;s existing school health frameworks — not replace them.
          </p>
        </div>

        {/* Mission cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '18px',
          }}
        >
          {missions.map((m) => (
            <div
              key={m.title}
              className="ig-mission-card"
              style={{
                padding: '28px 24px',
                borderRadius: '20px',
                background: '#FFFFFF',
                border: `1.5px solid ${m.border}`,
                boxShadow: '0 2px 14px rgba(0,0,0,0.04)',
                transition: 'all 0.25s',
              }}
            >
              {/* Icon + tag */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <div
                  style={{
                    width: '46px', height: '46px', borderRadius: '13px',
                    background: m.bg, border: `1.5px solid ${m.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '21px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  {m.icon}
                </div>
                <div
                  style={{
                    fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px',
                    color: m.tagColor, textTransform: 'uppercase' as const,
                    fontFamily: "'Space Grotesk', sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  {m.tag}
                </div>
              </div>

              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '20px', fontWeight: 800,
                  color: '#0F2942', marginBottom: '10px',
                  letterSpacing: '-0.5px',
                }}
              >
                {m.title}
              </h3>

              <p
                style={{
                  fontSize: '13.5px', color: '#3D5A73',
                  lineHeight: 1.68, fontFamily: "'DM Sans', sans-serif",
                  marginBottom: '18px',
                }}
              >
                {m.desc}
              </p>

              {/* Checkpoints */}
              <div
                style={{
                  padding: '14px 16px',
                  borderRadius: '10px',
                  background: m.bg,
                  border: `1px solid ${m.border}`,
                  display: 'flex', flexDirection: 'column', gap: '8px',
                }}
              >
                {m.points.map((pt) => (
                  <div
                    key={pt}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: '8px',
                      fontSize: '13px', color: m.color,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        marginTop: '1px', flexShrink: 0,
                        width: '16px', height: '16px',
                        borderRadius: '50%',
                        background: m.color,
                        display: 'inline-flex',
                        alignItems: 'center', justifyContent: 'center',
                        fontSize: '9px', color: '#fff',
                      }}
                    >
                      ✓
                    </span>
                    <span style={{ lineHeight: 1.5, color: '#0F2942' }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ig-mission-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(37,99,235,0.12) !important;
        }
      `}</style>
    </section>
  );
}
