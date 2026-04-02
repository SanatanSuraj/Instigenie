'use client';

import { useRouter } from 'next/navigation';

const packageIncludes = [
  { icon: '🩺', label: 'Physical assessment' },
  { icon: '👁️', label: 'Vision screening' },
  { icon: '👂', label: 'ENT & hearing evaluation' },
  { icon: '🦷', label: 'Dental check-up' },
  { icon: '🩸', label: 'Targeted anemia labs (iron profile, Hb, CBC)' },
  { icon: '🧠', label: 'Mental health support (age-appropriate)' },
  { icon: '💾', label: 'Digital health record per student' },
  { icon: '🔗', label: 'Referral tracking' },
];

const partnerRows = [
  { partner: 'Government & Policymakers', role: 'Scale screenings, integrate reporting, prioritize districts by burden.', icon: '🏛️' },
  { partner: 'Education Departments', role: 'Camps, referral networks, teacher sensitization on health-linked learning barriers.', icon: '📚' },
  { partner: 'School Leadership', role: 'High participation, parent comms, feed health insight into nutrition & wellbeing policy.', icon: '🏫' },
  { partner: 'CSR & Foundations', role: 'High-impact, auditable programs; sponsorship of glasses/hearing aids where needed.', icon: '💼' },
  { partner: 'Clinical Providers', role: 'Staffing, equipment, labs, and referral depth.', icon: '🏥' },
  { partner: 'Parents', role: 'Show up, complete referrals, use online reports as a longitudinal health companion.', icon: '👨‍👩‍👧' },
];

export default function MaharashtraSection() {
  const router = useRouter();

  return (
    <section
      className="ig-reveal"
      style={{
        padding: '80px 24px 90px',
        background: 'linear-gradient(160deg, #FFF7ED 0%, #FFFBEB 50%, #F0FDFA 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Eyebrow */}
        <div
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontSize: '12px', fontWeight: 600, color: '#D97706',
            letterSpacing: '2px', textTransform: 'uppercase' as const,
            marginBottom: '14px', fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#F59E0B', borderRadius: '2px' }} />
          Example All-in Bundle
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            alignItems: 'start',
          }}
        >
          {/* Left — Package card */}
          <div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800,
                letterSpacing: '-1.5px', color: '#0F2942', marginBottom: '8px',
              }}
            >
              Full-year student health cover
            </h2>
            <p style={{ fontSize: '16px', color: '#3D5A73', fontFamily: "'DM Sans', sans-serif", marginBottom: '28px' }}>
              Two screening cycles per academic year — so every child is seen at the start{' '}
              <em>and</em> checked again mid-year.
            </p>



            {/* Proof point */}
            <div
              style={{
                padding: '16px 20px',
                borderRadius: '12px',
                background: 'rgba(239, 68, 68, 0.06)',
                border: '1.5px solid rgba(220,38,38,0.15)',
                marginBottom: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div style={{ fontSize: '20px', flexShrink: 0 }}>⚠️</div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#DC2626', marginBottom: '4px', fontFamily: "'Space Grotesk', sans-serif" }}>
                    Maharashtra NFHS-5 finding
                  </div>
                  <div style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>
                    Adolescent anemia prevalence ~<strong style={{ color: '#0F2942' }}>59.7%</strong> in state survey context — a documented
                    drag on focus and stamina in classrooms across the state.
                    <span style={{ display: 'block', marginTop: '4px', fontSize: '11px', color: '#7A99B4' }}>
                      Source: NFHS-5 Maharashtra
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Framing line */}
            <div
              style={{
                padding: '14px 18px',
                borderRadius: '10px',
                background: 'rgba(37,99,235,0.05)',
                border: '1px solid rgba(37,99,235,0.12)',
                borderLeft: '4px solid #2563EB',
                fontSize: '14px', color: '#0F2942',
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.6, fontStyle: 'italic',
              }}
            >
              &ldquo;Not a line-item expense — human capital protection for the state&apos;s future workforce.&rdquo;
            </div>

            <button
              onClick={() => router.push('/contact')}
              className="ig-maha-cta"
              style={{
                marginTop: '24px',
                padding: '15px 34px',
                borderRadius: '12px',
                fontSize: '15px', fontWeight: 700,
                color: '#fff', cursor: 'pointer',
                border: 'none', fontFamily: "'DM Sans', sans-serif",
                background: 'linear-gradient(135deg, #F59E0B, #D97706)',
                boxShadow: '0 4px 20px rgba(245,158,11,0.30)',
                transition: 'all 0.28s',
              }}
            >
              Talk to us about your district →
            </button>
          </div>

          {/* Right — Package includes */}
          <div>
            <div
              style={{
                fontSize: '11px', fontWeight: 700, color: '#7A99B4',
                letterSpacing: '1.5px', textTransform: 'uppercase' as const,
                marginBottom: '16px', fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Package includes
            </div>
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '18px',
                border: '1.5px solid rgba(245,158,11,0.18)',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(245,158,11,0.10)',
              }}
            >
              {packageIncludes.map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '16px 20px',
                    borderBottom: i < packageIncludes.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                  }}
                >
                  <div
                    style={{
                      width: '36px', height: '36px', borderRadius: '9px',
                      background: '#FFFBEB', border: '1.5px solid rgba(245,158,11,0.20)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '16px', flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ fontSize: '14px', color: '#0F2942', fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
                    {item.label}
                  </div>
                  <div
                    style={{
                      marginLeft: 'auto',
                      width: '20px', height: '20px', borderRadius: '50%',
                      background: 'rgba(34,197,94,0.12)', border: '1.5px solid rgba(34,197,94,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '10px', color: '#16A34A',
                    }}
                  >
                    ✓
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner ecosystem */}
        <div style={{ marginTop: '72px' }}>
          <div
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              fontSize: '12px', fontWeight: 600, color: '#0D9488',
              letterSpacing: '2px', textTransform: 'uppercase' as const,
              marginBottom: '14px', fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px' }} />
            Partner Ecosystem
          </div>
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800,
              letterSpacing: '-1px', color: '#0F2942', marginBottom: '28px',
            }}
          >
            One mission — many partners
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '14px',
            }}
          >
            {partnerRows.map((row) => (
              <div
                key={row.partner}
                className="ig-partner-row"
                style={{
                  display: 'flex', gap: '14px', alignItems: 'flex-start',
                  padding: '18px 20px',
                  borderRadius: '14px',
                  background: '#FFFFFF',
                  border: '1.5px solid rgba(37,99,235,0.09)',
                  boxShadow: '0 2px 10px rgba(37,99,235,0.04)',
                  transition: 'all 0.22s',
                }}
              >
                <div
                  style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    background: '#F0FDFA', border: '1.5px solid rgba(20,184,166,0.20)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '18px', flexShrink: 0,
                  }}
                >
                  {row.icon}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F2942', marginBottom: '4px', fontFamily: "'Space Grotesk', sans-serif" }}>
                    {row.partner}
                  </div>
                  <div style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>
                    {row.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .ig-maha-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(245,158,11,0.42) !important;
        }
        .ig-partner-row:hover {
          transform: translateX(4px);
          border-color: rgba(20,184,166,0.22) !important;
          box-shadow: 0 6px 22px rgba(37,99,235,0.08) !important;
        }
      `}</style>
    </section>
  );
}
