'use client';

const steps = [
  {
    num: '01',
    icon: '📅',
    title: 'Plan with your calendar',
    desc: 'We align with your term dates, exam pressure, and campus logistics. On-site camps maximize participation when transport or parent bandwidth is tight.',
    color: '#2563EB',
    bg: '#EFF6FF',
    border: 'rgba(37,99,235,0.15)',
  },
  {
    num: '02',
    icon: '🩺',
    title: 'Screen with a fixed, transparent protocol',
    desc: 'Students move through stations with qualified clinicians and standardized documentation — calm, child-friendly, and staff-guided.',
    color: '#0D9488',
    bg: '#F0FDFA',
    border: 'rgba(20,184,166,0.18)',
  },
  {
    num: '03',
    icon: '📱',
    title: 'Records & parent clarity',
    desc: 'Families receive clear, jargon-light summaries and next steps. Leaders get population-level visibility without exposing individual records.',
    color: '#0284C7',
    bg: '#F0F9FF',
    border: 'rgba(56,189,248,0.18)',
  },
  {
    num: '04',
    icon: '🔗',
    title: 'Referrals that stick',
    desc: 'Structured referral pathways: who to see next, why it matters, and how to follow up — with tracking so schools can support completion.',
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: 'rgba(124,58,237,0.15)',
  },
  {
    num: '05',
    icon: '📊',
    title: 'Review & improve',
    desc: 'Year-on-year comparison helps you show progress on anemia, vision, dental disease burden, ENT morbidity, and well-being themes that affect attendance.',
    color: '#16A34A',
    bg: '#F0FDF4',
    border: 'rgba(34,197,94,0.16)',
  },
];

export default function HowItWorksSection() {
  return (
    <section
      className="ig-reveal"
      style={{
        padding: '80px 24px 90px',
        background: 'linear-gradient(160deg, #F0FDFA 0%, #EFF6FF 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <div
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              fontSize: '12px', fontWeight: 600, color: '#0D9488',
              letterSpacing: '2px', textTransform: 'uppercase' as const,
              marginBottom: '14px', fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px' }} />
            How It Works
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
              letterSpacing: '-1.5px', color: '#0F2942', marginBottom: '12px',
            }}
          >
            From first conversation to yearly review
          </h2>
          <p style={{ fontSize: '17px', color: '#3D5A73', lineHeight: 1.6, maxWidth: '520px', fontFamily: "'DM Sans', sans-serif" }}>
            A predictable, five-step cycle — repeatable every academic year, configurable to your region.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="ig-step-row"
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '0',
                alignItems: 'stretch',
              }}
            >
              {/* Step number + connector line */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '64px',
                  flexShrink: 0,
                }}
              >
                <div
                  className="ig-step-num"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: step.bg,
                    border: `2px solid ${step.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: 800,
                    color: step.color,
                    fontFamily: "'Space Grotesk', sans-serif",
                    flexShrink: 0,
                    transition: 'all 0.25s',
                    zIndex: 1,
                  }}
                >
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div
                    style={{
                      width: '2px',
                      flex: 1,
                      minHeight: '32px',
                      background: `linear-gradient(to bottom, ${step.border}, rgba(37,99,235,0.05))`,
                      margin: '6px 0',
                    }}
                  />
                )}
              </div>

              {/* Content card */}
              <div
                className="ig-step-card"
                style={{
                  marginBottom: i < steps.length - 1 ? '12px' : '0',
                  marginLeft: '16px',
                  padding: '22px 24px',
                  borderRadius: '16px',
                  background: '#FFFFFF',
                  border: `1.5px solid ${step.border}`,
                  boxShadow: '0 2px 12px rgba(37,99,235,0.05)',
                  transition: 'all 0.25s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div
                    style={{
                      width: '40px', height: '40px', borderRadius: '10px',
                      background: step.bg, border: `1.5px solid ${step.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '18px', flexShrink: 0,
                    }}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '16px', fontWeight: 700, color: '#0F2942',
                        marginBottom: '6px', fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {step.title}
                    </div>
                    <div
                      style={{
                        fontSize: '14px', color: '#3D5A73', lineHeight: 1.65,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {step.desc}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rhythm callout */}
        <div
          style={{
            marginTop: '40px',
            padding: '22px 28px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(37,99,235,0.06), rgba(20,184,166,0.07))',
            border: '1.5px solid rgba(37,99,235,0.12)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
          }}
        >
          <div style={{ fontSize: '24px' }}>🔄</div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F2942', marginBottom: '4px', fontFamily: "'Space Grotesk', sans-serif" }}>
              Recommended rhythm
            </div>
            <div style={{ fontSize: '14px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>
              At least <strong style={{ color: '#0F2942' }}>one full cycle per academic year</strong>. Regional programs may support
              two touchpoints for higher-risk cohorts — configured to local need and budget.
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ig-step-card:hover {
          transform: translateX(6px);
          box-shadow: 0 8px 28px rgba(37,99,235,0.10) !important;
        }
        .ig-step-card:hover .ig-step-num {
          box-shadow: 0 4px 16px rgba(37,99,235,0.18);
        }
      `}</style>
    </section>
  );
}
