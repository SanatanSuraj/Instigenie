'use client';

const problems = [
  {
    num: '01',
    icon: '📋',
    title: 'No unified school-level health picture',
    desc: 'Leaders and parents get only scattered surveys and household stats — never a single, actionable view of what\'s happening in their school.',
    color: '#2563EB',
    bg: '#EFF6FF',
    border: 'rgba(37,99,235,0.15)',
  },
  {
    num: '02',
    icon: '🗺️',
    title: 'Urban–rural gaps in specialist access',
    desc: 'Eye care, ENT, dental, and mental health support remain geographically uneven — children far from cities wait longest for help.',
    color: '#0D9488',
    bg: '#F0FDFA',
    border: 'rgba(20,184,166,0.18)',
  },
  {
    num: '03',
    icon: '🔍',
    title: 'Strong programs — weak screening',
    desc: 'Public health initiatives exist on paper, but without systematic screening, there is no way to know which child needs what, or whether things improve.',
    color: '#D97706',
    bg: '#FFFBEB',
    border: 'rgba(245,158,11,0.20)',
  },
  {
    num: '04',
    icon: '👦',
    title: 'Double burden for children with special needs',
    desc: 'Health and inclusion challenges stack together — school absence is driven disproportionately by poor health among children who need the most support.',
    color: '#DC2626',
    bg: '#FEF2F2',
    border: 'rgba(220,38,38,0.15)',
  },
];

const healthBarriers = [
  { label: 'Vision problems',      pct: 80, color: '#2563EB', icon: '👁️' },
  { label: 'Dental pain',          pct: 72, color: '#7C3AED', icon: '🦷' },
  { label: 'Hearing issues',       pct: 65, color: '#0D9488', icon: '👂' },
  { label: 'Anemia & nutrition',   pct: 59, color: '#D97706', icon: '🩸' },
  { label: 'Mental health / stress', pct: 55, color: '#DC2626', icon: '🧠' },
];

export default function ProblemSection() {
  return (
    <section
      className="ig-reveal"
      style={{
        padding: '96px 24px 100px',
        background: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background accent */}
      <div
        style={{
          position: 'absolute',
          top: 0, right: 0,
          width: '45%', height: '100%',
          background: 'linear-gradient(135deg, transparent 0%, rgba(239,68,68,0.025) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── TOP: Full-width editorial header ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '48px',
            alignItems: 'end',
            marginBottom: '72px',
            paddingBottom: '48px',
            borderBottom: '1px solid rgba(37,99,235,0.07)',
          }}
        >
          {/* Left — headline block */}
          <div>
            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '5px 14px',
                borderRadius: '100px',
                background: 'rgba(220,38,38,0.07)',
                border: '1px solid rgba(220,38,38,0.18)',
                fontSize: '11px', fontWeight: 700, color: '#DC2626',
                letterSpacing: '1.5px', textTransform: 'uppercase' as const,
                marginBottom: '24px', fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              <div
                className="ig-pulse"
                style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: '#EF4444',
                }}
              />
              The Invisible Barrier
            </div>

            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 900,
                letterSpacing: '-2.5px', color: '#0F2942', lineHeight: 1.06,
                marginBottom: '0',
              }}
            >
              Millions show up
              <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #DC2626, #D97706)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                to learn — but can&apos;t.
              </span>
            </h2>
          </div>

          {/* Right — context paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p
              style={{
                fontSize: '17px', color: '#3D5A73', lineHeight: 1.75,
                fontFamily: "'DM Sans', sans-serif", margin: 0,
              }}
            >
              Many can&apos;t see the board clearly. Can&apos;t hear well enough to follow lessons.
              Or are running low on iron and energy. Dental pain quietly ruins appetite.
              Anxiety and stress hide behind &quot;behavior&quot; — and nobody connects it to health.
            </p>

            {/* Key insight callout */}
            <div
              style={{
                display: 'flex', alignItems: 'flex-start', gap: '14px',
                padding: '18px 20px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #FEF2F2, #FFF7ED)',
                border: '1.5px solid rgba(220,38,38,0.14)',
                borderLeft: '4px solid #EF4444',
              }}
            >
              <span style={{ fontSize: '20px', flexShrink: 0, marginTop: '1px' }}>⚡</span>
              <p
                style={{
                  fontSize: '15px', color: '#3D5A73', lineHeight: 1.72,
                  fontFamily: "'DM Sans', sans-serif", margin: 0,
                }}
              >
                <strong style={{ color: '#0F2942', fontFamily: "'Space Grotesk', sans-serif" }}>
                  Health and learning are not separate.
                </strong>{' '}
                When the body is under-fueled, the senses are strained, or the mind is overwhelmed —
                attention, attendance, and confidence drop long before anyone notices.
              </p>
            </div>
          </div>
        </div>

        {/* ── BOTTOM: Two-panel layout ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {/* LEFT — Numbered problem list */}
          <div>
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                marginBottom: '28px',
              }}
            >
              <span
                style={{
                  display: 'inline-block', width: '20px', height: '2px',
                  background: '#EF4444', borderRadius: '2px',
                }}
              />
              <span
                style={{
                  fontSize: '11px', fontWeight: 700, color: '#7A99B4',
                  letterSpacing: '2px', textTransform: 'uppercase' as const,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                What&apos;s broken in the system today
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {problems.map((p, i) => (
                <div
                  key={p.title}
                  className="ig-problem-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '44px 1fr',
                    gap: '16px',
                    padding: '20px 0',
                    borderBottom: i < problems.length - 1 ? '1px solid rgba(37,99,235,0.07)' : 'none',
                    alignItems: 'flex-start',
                    transition: 'all 0.22s',
                    cursor: 'default',
                  }}
                >
                  {/* Numbered icon */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <div
                      style={{
                        width: '44px', height: '44px', borderRadius: '12px',
                        background: p.bg, border: `1.5px solid ${p.border}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '20px', flexShrink: 0,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                      }}
                    >
                      {p.icon}
                    </div>
                    <span
                      style={{
                        fontSize: '10px', fontWeight: 800, color: p.color,
                        fontFamily: "'Space Grotesk', sans-serif",
                        opacity: 0.6,
                      }}
                    >
                      {p.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ paddingTop: '4px' }}>
                    <div
                      style={{
                        fontSize: '15px', fontWeight: 700, color: '#0F2942',
                        marginBottom: '6px', fontFamily: "'Space Grotesk', sans-serif",
                        lineHeight: 1.3,
                      }}
                    >
                      {p.title}
                    </div>
                    <div
                      style={{
                        fontSize: '13.5px', color: '#3D5A73', lineHeight: 1.65,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {p.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Bar chart panel + quote */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Bar chart card */}
            <div
              style={{
                background: 'linear-gradient(160deg, #F8FAFF 0%, #F0FDFA 100%)',
                border: '1.5px solid rgba(37,99,235,0.10)',
                borderRadius: '20px',
                padding: '28px 28px 24px',
                flex: 1,
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                <div
                  style={{
                    fontSize: '11px', fontWeight: 700, color: '#7A99B4',
                    letterSpacing: '2px', textTransform: 'uppercase' as const,
                    marginBottom: '6px', fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  Undetected health barriers
                </div>
                <p
                  style={{
                    fontSize: '13px', color: '#3D5A73',
                    fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, margin: 0,
                  }}
                >
                  Estimated share of students with conditions silently affecting classroom performance:
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {healthBarriers.map((bar) => (
                  <div key={bar.label}>
                    <div
                      style={{
                        display: 'flex', justifyContent: 'space-between',
                        alignItems: 'center', marginBottom: '8px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '14px' }}>{bar.icon}</span>
                        <span
                          style={{
                            fontSize: '13.5px', color: '#0F2942',
                            fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
                          }}
                        >
                          {bar.label}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: '15px', fontWeight: 800, color: bar.color,
                          fontFamily: "'Space Grotesk', sans-serif",
                          letterSpacing: '-0.5px',
                        }}
                      >
                        {bar.pct}%
                      </span>
                    </div>
                    {/* Track */}
                    <div
                      style={{
                        height: '8px', background: 'rgba(0,0,0,0.06)',
                        borderRadius: '100px', overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      <div
                        className="ig-bar-fill"
                        style={{
                          height: '100%',
                          width: `${bar.pct}%`,
                          borderRadius: '100px',
                          background: `linear-gradient(90deg, ${bar.color}70, ${bar.color})`,
                          position: 'relative',
                        }}
                      >
                        {/* Shine dot at end of bar */}
                        <div
                          style={{
                            position: 'absolute', right: '0', top: '50%',
                            transform: 'translateY(-50%)',
                            width: '10px', height: '10px', borderRadius: '50%',
                            background: bar.color,
                            boxShadow: `0 0 6px ${bar.color}`,
                            border: '2px solid #fff',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p
                style={{
                  fontSize: '11px', color: '#7A99B4', marginTop: '20px',
                  fontFamily: "'DM Sans', sans-serif", fontStyle: 'italic', margin: '20px 0 0',
                }}
              >
                Indicative national estimates. Actual prevalence varies by state, school type, and age group.
              </p>
            </div>

            {/* Quote callout — light, on-palette */}
            <div
              style={{
                padding: '22px 24px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #EFF6FF, #F0FDFA)',
                border: '1.5px solid rgba(37,99,235,0.12)',
                borderLeft: '4px solid #2563EB',
                display: 'flex', alignItems: 'flex-start', gap: '14px',
              }}
            >
              <div
                style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: '#FFFFFF', border: '1.5px solid rgba(37,99,235,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '17px', flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(37,99,235,0.08)',
                }}
              >
                💬
              </div>
              <div>
                <p
                  style={{
                    fontSize: '14.5px', fontStyle: 'italic', lineHeight: 1.72,
                    color: '#3D5A73', fontFamily: "'DM Sans', sans-serif",
                    margin: '0 0 8px 0',
                  }}
                >
                  &ldquo;You cannot educate a hungry, sick, or unseen child — screen, nourish, empower.&rdquo;
                </p>
                <div
                  style={{
                    fontSize: '11.5px', color: '#7A99B4',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600, letterSpacing: '0.3px',
                  }}
                >
                  InstiGenie core principle
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ig-problem-row:hover {
          padding-left: 10px !important;
        }
        .ig-problem-row:hover > div:first-child > div {
          box-shadow: 0 6px 18px rgba(37,99,235,0.12) !important;
        }
      `}</style>
    </section>
  );
}
