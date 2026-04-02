'use client';

const topStats = [
  {
    num: '59.1%',
    label: 'Anaemia Prevalence',
    desc: 'Adolescent girls aged 15–19 years. India\'s largest invisible learning barrier.',
    color: '#DC2626',
    bg: '#FEF2F2',
    border: 'rgba(220,38,38,0.15)',
    numBg: 'rgba(220,38,38,0.07)',
  },
  {
    num: '35.5%',
    label: 'Stunted Growth',
    desc: 'Children under 5 years. Directly impairs cognitive development and school readiness.',
    color: '#D97706',
    bg: '#FFFBEB',
    border: 'rgba(217,119,6,0.18)',
    numBg: 'rgba(245,158,11,0.08)',
  },
  {
    num: '4.27M',
    label: 'Secondary Dropouts',
    desc: 'Annual secondary dropouts. 13.25% cite health as a primary reason for leaving.',
    color: '#0D9488',
    bg: '#F0FDFA',
    border: 'rgba(20,184,166,0.18)',
    numBg: 'rgba(20,184,166,0.08)',
  },
  {
    num: '11.5%',
    label: 'Secondary Dropout Rate',
    desc: 'Each additional school year generates ~10% increase in hourly earnings. Every dropout is economic loss.',
    color: '#16A34A',
    bg: '#F0FDF4',
    border: 'rgba(34,197,94,0.18)',
    numBg: 'rgba(34,197,94,0.08)',
  },
];

const conditionCards = [
  {
    icon: '👁️',
    label: 'Vision',
    stat: '15%',
    desc: 'Urban adolescents with uncorrected refractive error. Blackboard invisible without glasses.',
    source: 'Agarwal et al., 2020',
    color: '#DC2626',
    bg: '#FEF2F2',
    border: 'rgba(220,38,38,0.15)',
  },
  {
    icon: '🦷',
    label: 'Dental',
    stat: '60–90%',
    desc: 'School-age children with dental caries. Pain directly linked to absenteeism and poor performance.',
    source: 'AJPH / PMC Study',
    color: '#D97706',
    bg: '#FFFBEB',
    border: 'rgba(217,119,6,0.18)',
  },
  {
    icon: '👂',
    label: 'Hearing',
    stat: '16.5%',
    desc: 'Hearing loss prevalence in school-age children. Most go undiagnosed in early years.',
    source: 'NMJI 2021 Review',
    color: '#0D9488',
    bg: '#F0FDFA',
    border: 'rgba(20,184,166,0.18)',
  },
  {
    icon: '🧠',
    label: 'Mental Health',
    stat: '1 in 7',
    desc: 'Adolescents globally experience a mental disorder. Anxiety and stress peak during school years.',
    source: 'WHO Adolescent MH',
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: 'rgba(124,58,237,0.15)',
  },
  {
    icon: '⚖️',
    label: 'Nutrition',
    stat: '24.1%',
    desc: 'Adolescent thinness (BMI < −2SD). Undernutrition impairs concentration and memory retention.',
    source: 'CNNS 2016–18',
    color: '#16A34A',
    bg: '#F0FDF4',
    border: 'rgba(34,197,94,0.18)',
  },
];

export default function SilentCrisisSection() {
  return (
    <section
      className="ig-reveal"
      style={{
        padding: '80px 24px 90px',
        background: 'linear-gradient(160deg, #FEF2F2 0%, #FFFBEB 50%, #FFF7ED 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '52px' }}>
          <div
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              fontSize: '12px', fontWeight: 600, color: '#DC2626',
              letterSpacing: '2px', textTransform: 'uppercase' as const,
              marginBottom: '14px', fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#EF4444', borderRadius: '2px' }} />
            The National Reality
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800,
              letterSpacing: '-2px', color: '#0F2942',
              lineHeight: 1.06, marginBottom: '14px',
            }}
          >
            A silent crisis in every classroom
          </h2>
          <p
            style={{
              fontSize: '17px', color: '#3D5A73',
              fontFamily: "'DM Sans', sans-serif", lineHeight: 1.65,
              maxWidth: '560px',
            }}
          >
            National surveys reveal critical health gaps directly impacting cognitive development and school attendance across India.
          </p>
        </div>

        {/* Top 4 big stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          {topStats.map((s) => (
            <div
              key={s.label}
              className="ig-crisis-stat"
              style={{
                padding: '28px 24px',
                borderRadius: '18px',
                background: '#FFFFFF',
                border: `1.5px solid ${s.border}`,
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                transition: 'all 0.25s',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  padding: '6px 14px',
                  borderRadius: '10px',
                  background: s.numBg,
                  marginBottom: '12px',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 'clamp(28px, 3.5vw, 40px)',
                    fontWeight: 800,
                    color: s.color,
                    letterSpacing: '-1.5px',
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>
              </div>
              <div
                style={{
                  fontSize: '13px', fontWeight: 700,
                  color: '#0F2942', marginBottom: '8px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: '0.3px',
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontSize: '13px', color: '#3D5A73',
                  lineHeight: 1.62, fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Condition cards row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(185px, 1fr))',
            gap: '14px',
          }}
        >
          {conditionCards.map((c) => (
            <div
              key={c.label}
              className="ig-condition-card"
              style={{
                padding: '22px 20px',
                borderRadius: '16px',
                background: c.bg,
                border: `1.5px solid ${c.border}`,
                transition: 'all 0.25s',
              }}
            >
              <div style={{ fontSize: '22px', marginBottom: '8px' }}>{c.icon}</div>
              <div
                style={{
                  fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px',
                  color: c.color, textTransform: 'uppercase' as const,
                  marginBottom: '6px', fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {c.label}
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  fontWeight: 800, color: '#0F2942',
                  letterSpacing: '-1px', marginBottom: '10px',
                }}
              >
                {c.stat}
              </div>
              <div
                style={{
                  fontSize: '12.5px', color: '#3D5A73',
                  lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif",
                  marginBottom: '12px',
                }}
              >
                {c.desc}
              </div>
              <div
                style={{
                  fontSize: '11px', color: c.color,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                }}
              >
                → Source: {c.source}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ig-crisis-stat:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(37,99,235,0.09) !important;
        }
        .ig-condition-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 28px rgba(37,99,235,0.08);
        }
      `}</style>
    </section>
  );
}
