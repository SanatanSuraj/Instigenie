'use client';

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

const faqs = [
  {
    q: 'Who is this for?',
    a: 'Any institution that takes student wellbeing seriously — primary, secondary, or university.',
  },
  {
    q: 'How often should we run this?',
    a: 'At least once per academic year; some programs run twice yearly for closer tracking on nutrition and high-burden conditions.',
  },
  {
    q: 'On-site or at a clinic?',
    a: 'Either. On-site usually drives higher participation, especially when travel or parent time is limited.',
  },
  {
    q: 'Is my child\'s data safe?',
    a: 'Yes — secure storage, strict access control, parent visibility through a protected portal, and anonymized data only where used for research or policy aggregates.',
  },
  {
    q: 'What if something is found?',
    a: 'You get clear guidance, and we support a structured referral path so the next clinical step is obvious — not a dead end.',
  },
  {
    q: 'Do you replace our school doctor?',
    a: 'No — we complement routine care with school-wide screening, documentation, and navigation.',
  },
  {
    q: 'Why use AI at all?',
    a: 'To make specialty-style consistency possible across large student numbers and varied locations — with licensed clinicians accountable for final decisions.',
  },
];

export default function PrinciplesAndFAQ() {
  return (
    <>
      {/* Principles / brand lines */}
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
        </div>

        <style jsx>{`
          .ig-quote-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 14px 36px rgba(37,99,235,0.10) !important;
          }
        `}</style>
      </section>


      {/* FAQ */}
      <section
        className="ig-reveal"
        style={{
          padding: '80px 24px 90px',
          background: '#FFFFFF',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              fontSize: '12px', fontWeight: 600, color: '#0D9488',
              letterSpacing: '2px', textTransform: 'uppercase' as const,
              marginBottom: '14px', fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px' }} />
            Frequently Asked Questions
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800,
              letterSpacing: '-1.5px', color: '#0F2942',
              marginBottom: '48px',
            }}
          >
            Questions schools and parents ask us
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="ig-faq-card"
                style={{
                  padding: '22px 24px',
                  borderRadius: '14px',
                  background: i % 2 === 0 ? '#F8FAFF' : '#F0FDFA',
                  border: `1.5px solid ${i % 2 === 0 ? 'rgba(37,99,235,0.10)' : 'rgba(20,184,166,0.14)'}`,
                  transition: 'all 0.22s',
                }}
              >
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '28px', height: '28px', borderRadius: '8px',
                      background: i % 2 === 0 ? 'rgba(37,99,235,0.08)' : 'rgba(20,184,166,0.10)',
                      border: `1px solid ${i % 2 === 0 ? 'rgba(37,99,235,0.15)' : 'rgba(20,184,166,0.20)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '13px', fontWeight: 800,
                      color: i % 2 === 0 ? '#2563EB' : '#0D9488',
                      fontFamily: "'Space Grotesk', sans-serif",
                      flexShrink: 0,
                    }}
                  >
                    Q
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '15px', fontWeight: 700, color: '#0F2942',
                        marginBottom: '8px', fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {faq.q}
                    </div>
                    <div
                      style={{
                        fontSize: '14px', color: '#3D5A73', lineHeight: 1.7,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .ig-faq-card:hover {
            transform: translateX(4px);
            box-shadow: 0 6px 20px rgba(37,99,235,0.07);
          }
        `}</style>
      </section>
    </>
  );
}
