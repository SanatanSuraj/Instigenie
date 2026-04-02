'use client';

const audiences = [
  {
    icon: '🎒',
    label: 'For Students',
    color: '#2563EB',
    bg: '#EFF6FF',
    border: 'rgba(37,99,235,0.15)',
    benefits: [
      'Earlier help for sight, sound, teeth, iron, and stress — before problems become lifelong learning gaps',
      'Less avoidable pain and fatigue in the school day',
      'Confidence from knowing "it wasn\'t that I couldn\'t learn — it was something we could fix"',
    ],
  },
  {
    icon: '👨‍👩‍👧',
    label: 'For Parents',
    color: '#0D9488',
    bg: '#F0FDFA',
    border: 'rgba(20,184,166,0.18)',
    benefits: [
      'Plain-language reports and one place to see trends over time',
      'Actionable referrals instead of worrying in the dark',
      'Secure online portal access to your child\'s longitudinal health record',
    ],
  },
  {
    icon: '🏫',
    label: 'For Teachers & Leaders',
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: 'rgba(124,58,237,0.15)',
    benefits: [
      'Fewer mystery cases of inattention, withdrawal, or chronic absence with no explanation',
      'Better alignment between mid-day meals, wellness policy, and real student needs',
      'Aggregated health insight that informs institutional decisions',
    ],
  },
  {
    icon: '🤝',
    label: 'For System Partners',
    color: '#16A34A',
    bg: '#F0FDF4',
    border: 'rgba(34,197,94,0.16)',
    benefits: [
      'Measurable impact narrative aligned with SDG 3 (health) and SDG 4 (education)',
      'Moves budgets from late, expensive rescue care to early, evidence-led prevention',
      'Clear before/after metrics for CSR reporting and government accountability',
    ],
  },
];

export default function BenefitsSection() {
  return (
    <section
      className="ig-reveal"
      style={{
        padding: '80px 24px 90px',
        background: '#FFFFFF',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '52px' }}>
          <div
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              fontSize: '12px', fontWeight: 600, color: '#0D9488',
              letterSpacing: '2px', textTransform: 'uppercase' as const,
              marginBottom: '14px', fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px' }} />
            Benefits & Outcomes
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
              letterSpacing: '-1.5px', color: '#0F2942', marginBottom: '12px',
            }}
          >
            Everyone wins when children are healthy
          </h2>
          <p style={{ fontSize: '17px', color: '#3D5A73', lineHeight: 1.6, maxWidth: '540px', fontFamily: "'DM Sans', sans-serif" }}>
            Structured school health benefits ripple outward — from the individual student to the system.
          </p>
        </div>

        {/* Audience cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {audiences.map((a) => (
            <div
              key={a.label}
              className="ig-benefit-card"
              style={{
                background: a.bg,
                border: `1.5px solid ${a.border}`,
                borderRadius: '20px',
                padding: '28px 24px',
                transition: 'all 0.25s',
              }}
            >
              {/* Icon + label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: '#FFFFFF', border: `1.5px solid ${a.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  }}
                >
                  {a.icon}
                </div>
                <div
                  style={{
                    fontSize: '16px', fontWeight: 700, color: '#0F2942',
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {a.label}
                </div>
              </div>

              {/* Benefits list */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {a.benefits.map((b, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: '10px',
                    }}
                  >
                    <div
                      style={{
                        width: '18px', height: '18px', borderRadius: '50%',
                        background: a.color, display: 'flex', alignItems: 'center',
                        justifyContent: 'center', fontSize: '10px', color: '#fff',
                        flexShrink: 0, marginTop: '1px',
                      }}
                    >
                      ✓
                    </div>
                    <span
                      style={{
                        fontSize: '13.5px', color: '#3D5A73', lineHeight: 1.6,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Use cases strip — light palette */}
        <div
          style={{
            marginTop: '60px',
            padding: '40px 36px',
            borderRadius: '24px',
            background: 'linear-gradient(160deg, #EFF6FF 0%, #F0FDFA 100%)',
            border: '1.5px solid rgba(37,99,235,0.10)',
            boxShadow: '0 4px 24px rgba(37,99,235,0.06)',
          }}
        >
          <div
            style={{
              fontSize: '11px', fontWeight: 700, color: '#7A99B4',
              letterSpacing: '2px', textTransform: 'uppercase' as const,
              marginBottom: '10px', fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Who It&apos;s For
          </div>
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(18px, 2.5vw, 26px)', fontWeight: 800,
              color: '#0F2942', marginBottom: '28px', letterSpacing: '-0.5px',
            }}
          >
            Built for every institution that takes student wellbeing seriously
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
              gap: '12px',
            }}
          >
            {[
              { icon: '🏫', label: 'K–12 Schools & School Groups', sub: 'One consistent standard across all branches', color: '#2563EB', bg: '#EFF6FF', border: 'rgba(37,99,235,0.14)' },
              { icon: '🎓', label: 'Higher Education', sub: 'Hosteller onboarding & preventive screening', color: '#0D9488', bg: '#F0FDFA', border: 'rgba(20,184,166,0.18)' },
              { icon: '🏛️', label: 'State / District Govt.', sub: 'Repeatable operations and reporting at scale', color: '#7C3AED', bg: '#F5F3FF', border: 'rgba(124,58,237,0.14)' },
              { icon: '💼', label: 'CSR & Foundations', sub: 'Clear before/after metrics for underserved clusters', color: '#D97706', bg: '#FFFBEB', border: 'rgba(217,119,6,0.18)' },
              { icon: '🏥', label: 'Hospital & Clinic Networks', sub: 'Physicians, dentists, ENT, labs & referral depth', color: '#16A34A', bg: '#F0FDF4', border: 'rgba(34,197,94,0.16)' },
            ].map((uc) => (
              <div
                key={uc.label}
                className="ig-uc-chip"
                style={{
                  padding: '18px 16px',
                  borderRadius: '14px',
                  background: '#FFFFFF',
                  border: `1.5px solid ${uc.border}`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  transition: 'all 0.22s',
                }}
              >
                <div
                  style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    background: uc.bg, border: `1.5px solid ${uc.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '18px', marginBottom: '12px',
                  }}
                >
                  {uc.icon}
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F2942', marginBottom: '4px', fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.3 }}>
                  {uc.label}
                </div>
                <div style={{ fontSize: '12px', color: '#3D5A73', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>
                  {uc.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .ig-benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(37,99,235,0.12) !important;
        }
        .ig-uc-chip:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(37,99,235,0.10) !important;
          border-color: rgba(37,99,235,0.22) !important;
        }
      `}</style>
    </section>
  );
}
