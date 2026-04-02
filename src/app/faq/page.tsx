'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const categories = [
  { id: 'general',   label: 'General',       icon: '💡', color: '#2563EB', bg: '#EFF6FF', border: 'rgba(37,99,235,0.15)' },
  { id: 'safety',    label: 'Safety & Data',  icon: '🔒', color: '#0D9488', bg: '#F0FDFA', border: 'rgba(20,184,166,0.18)' },
  { id: 'process',   label: 'The Process',    icon: '🩺', color: '#7C3AED', bg: '#F5F3FF', border: 'rgba(124,58,237,0.15)' },
  { id: 'partners',  label: 'For Partners',   icon: '🤝', color: '#16A34A', bg: '#F0FDF4', border: 'rgba(34,197,94,0.18)' },
  { id: 'clinical',  label: 'Clinical',       icon: '🏥', color: '#D97706', bg: '#FFFBEB', border: 'rgba(217,119,6,0.18)' },
];

const faqs: { id: string; cat: string; q: string; a: string }[] = [
  { id: 'g1', cat: 'general', q: 'Who is InstiGenie for?', a: 'Any institution that takes student wellbeing seriously — primary schools, secondary schools, colleges, or university campuses. We work with both urban and rural institutions, private and government-aided.' },
  { id: 'g2', cat: 'general', q: 'What is school-based health screening?', a: 'A structured visit — on-site at your school or campus — where trained clinicians check each student across key health domains: vision, hearing, growth, dental, anemia, and mental well-being. Results are documented digitally, shared with parents, and tracked over time.' },
  { id: 'g3', cat: 'general', q: 'How often should we run this?', a: 'At least once per academic year is recommended. High-risk cohorts or programs targeting anemia or nutrition may run two touchpoints — beginning and middle of the academic year — for closer tracking.' },
  { id: 'g4', cat: 'general', q: 'Is this only for large schools?', a: 'No — InstiGenie is designed to scale from a school of 200 students to a district of 200,000. The program structure adapts to campus size, available space, and local clinical partner capacity.' },
  { id: 's1', cat: 'safety', q: "Is my child's data safe?", a: 'Yes. Data is stored securely with role-based access controls. Parents can view their full record through a protected portal. No individual data is shared without consent. Where used for policy or research, only fully anonymized, aggregated data is involved.' },
  { id: 's2', cat: 'safety', q: 'Who can see the health records?', a: "The student's parents and the school's designated health lead — within role-based permissions. Clinicians see only what is necessary for their domain. School leadership sees aggregated, non-identifiable population data unless specifically designated." },
  { id: 's3', cat: 'safety', q: 'Is InstiGenie compliant with data privacy laws?', a: 'Yes — InstiGenie is built with ABDM compatibility and data privacy compliance at its core. We use end-to-end encryption, anonymized aggregation for any reporting, and strict access controls throughout.' },
  { id: 'p1', cat: 'process', q: 'On-site or at a clinic?', a: 'Either. On-site screening at the school typically drives much higher participation — it removes the need for travel and works within school time, which is especially important when parents have limited availability.' },
  { id: 'p2', cat: 'process', q: 'How long does a screening camp take?', a: 'For a school of 500 students, a well-organized camp typically runs across 1–2 days, depending on the number of clinicians deployed and the domains covered. We plan the logistics with you to minimize disruption to classes.' },
  { id: 'p3', cat: 'process', q: 'What happens after something is found?', a: 'You receive clear guidance and we provide a structured referral path — who to see, why it matters, and how to follow up. Schools can track referral completion so no child falls through the cracks.' },
  { id: 'p4', cat: 'process', q: 'Do you replace our school doctor?', a: 'No. InstiGenie complements your existing care — we add systematic, documented school-wide screening and navigation. Your school doctor becomes a more empowered part of the process, not sidelined.' },
  { id: 'pt1', cat: 'partners', q: 'How does this align with RBSK?', a: 'InstiGenie is designed to be RBSK-interoperable — we digitize the 4D screening workflow (Defects, Diseases, Deficiencies, Delays) and track referral closures in a way that plugs into government health reporting requirements.' },
  { id: 'pt2', cat: 'partners', q: "Can CSR programs fund a school's participation?", a: 'Yes — this is one of the most impactful and measurable CSR use cases in education. We provide clear before/after impact metrics suitable for CSR reporting, foundation grant applications, and government accountability frameworks.' },
  { id: 'pt3', cat: 'partners', q: 'How do clinical partners work with InstiGenie?', a: 'Physicians, dentists, ENT specialists, labs, and mental health professionals are integrated as delivery partners. We coordinate staffing, equipment, and referral depth — clinical partners provide their expertise within a structured, documented protocol.' },
  { id: 'c1', cat: 'clinical', q: 'Why use AI at all?', a: 'AI makes specialty-level consistency possible at large student numbers and across varied locations — vision screening, oral cavity analysis, and anomaly detection that would otherwise require expensive specialist visits. Licensed clinicians remain accountable for all final decisions.' },
  { id: 'c2', cat: 'clinical', q: 'What conditions does screening cover?', a: 'Vision (refractive errors, colour blindness), hearing (conductive & sensorineural loss), dental health (caries, gum disease), growth (height, weight, BMI, stunting), anemia (haemoglobin, iron profile), and mental well-being (age-appropriate psychosocial screening).' },
  { id: 'c3', cat: 'clinical', q: 'Does InstiGenie work in low-connectivity areas?', a: 'Yes — the system is built offline-first. Data is captured locally and synced when connectivity is available. This makes it deployable in rural and semi-urban schools without reliable internet.' },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('general');
  const [openId, setOpenId] = useState<string | null>('g1');
  const router = useRouter();

  const filtered = faqs.filter((f) => f.cat === activeCategory);
  const activeCat = categories.find((c) => c.id === activeCategory)!;

  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: '80px 24px 72px',
          background: 'linear-gradient(160deg, #EFF6FF 0%, #F0FDFA 50%, #ECFDF5 100%)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '8px', marginBottom: '28px',
              fontSize: '13px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <Link href="/" style={{ color: '#7A99B4', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <span style={{ color: '#0F2942', fontWeight: 500 }}>FAQ</span>
          </div>

          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px', borderRadius: '100px',
              border: '1px solid rgba(20,184,166,0.30)',
              background: 'rgba(20,184,166,0.07)',
              fontSize: '12px', fontWeight: 600, color: '#0D9488',
              letterSpacing: '1px', textTransform: 'uppercase' as const,
              marginBottom: '24px', fontFamily: "'Space Grotesk', sans-serif",
              boxShadow: '0 2px 10px rgba(20,184,166,0.10)',
            }}
          >
            <div className="ig-pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#14B8A6', boxShadow: '0 0 6px #14B8A6' }} />
            {faqs.length} answers ready
          </div>

          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900,
              letterSpacing: '-2px', color: '#0F2942', lineHeight: 1.08,
              marginBottom: '18px',
            }}
          >
            Questions schools and{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #2563EB, #14B8A6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              parents ask us
            </span>
          </h1>

          <p
            style={{
              fontSize: '18px', color: '#3D5A73', lineHeight: 1.70,
              maxWidth: '520px', margin: '0 auto 40px', fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Everything you need to know about InstiGenie — from how it works to how your child&apos;s data is protected.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <button
              onClick={() => router.push('/contact')}
              className="ig-faq-cta-primary"
              style={{
                padding: '12px 28px', borderRadius: '12px',
                fontSize: '15px', fontWeight: 600, color: '#fff',
                border: 'none', fontFamily: "'DM Sans', sans-serif",
                background: 'linear-gradient(135deg, #2563EB, #14B8A6)',
                boxShadow: '0 4px 20px rgba(37,99,235,0.25)',
                transition: 'all 0.25s',
              }}
            >
              Still have a question? Talk to us →
            </button>
            <Link
              href="/"
              className="ig-faq-cta-secondary"
              style={{
                padding: '12px 24px', borderRadius: '12px',
                fontSize: '15px', fontWeight: 500, color: '#3D5A73',
                border: '1.5px solid rgba(37,99,235,0.15)',
                background: 'rgba(255,255,255,0.85)',
                textDecoration: 'none', fontFamily: "'DM Sans', sans-serif",
                transition: 'all 0.22s', display: 'inline-block',
              }}
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Body */}
      <section style={{ padding: '72px 24px 100px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Category tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '10px', marginBottom: '52px', justifyContent: 'center' }}>
            {categories.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setOpenId(null); }}
                  className="ig-faq-tab"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '10px 20px', borderRadius: '100px',
                    fontSize: '14px', fontWeight: isActive ? 700 : 500,
                    color: isActive ? cat.color : '#3D5A73',
                    background: isActive ? cat.bg : 'transparent',
                    border: isActive ? `2px solid ${cat.border}` : '1.5px solid rgba(37,99,235,0.10)',
                    boxShadow: isActive ? `0 4px 16px ${cat.color}20` : 'none',
                    transition: 'all 0.22s', fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <span style={{ fontSize: '16px' }}>{cat.icon}</span>
                  {cat.label}
                  <span
                    style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      width: '20px', height: '20px', borderRadius: '50%',
                      background: isActive ? cat.color : 'rgba(37,99,235,0.08)',
                      color: isActive ? '#fff' : '#7A99B4',
                      fontSize: '10px', fontWeight: 700,
                    }}
                  >
                    {faqs.filter((f) => f.cat === cat.id).length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grid: sidebar + accordion */}
          <div style={{ display: 'grid', gridTemplateColumns: 'clamp(180px,22%,250px) 1fr', gap: '48px', alignItems: 'start' }}>

            {/* Sidebar */}
            <div style={{ position: 'sticky', top: '90px' }}>
              <div
                style={{
                  padding: '24px 22px', borderRadius: '20px',
                  background: activeCat.bg, border: `1.5px solid ${activeCat.border}`,
                  boxShadow: '0 4px 20px rgba(37,99,235,0.06)',
                }}
              >
                <div
                  style={{
                    width: '48px', height: '48px', borderRadius: '14px',
                    background: '#FFFFFF', border: `1.5px solid ${activeCat.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '22px', marginBottom: '16px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  {activeCat.icon}
                </div>
                <div
                  style={{
                    fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px',
                    color: activeCat.color, textTransform: 'uppercase' as const,
                    marginBottom: '6px', fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {activeCat.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '28px', fontWeight: 800, color: '#0F2942',
                    letterSpacing: '-1px', marginBottom: '8px',
                  }}
                >
                  {filtered.length} questions
                </div>
                <p style={{ fontSize: '13px', color: '#3D5A73', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, margin: '0 0 18px' }}>
                  Tap any question to expand the answer.
                </p>
                <div style={{ height: '1px', background: activeCat.border, marginBottom: '18px' }} />
                <div style={{ fontSize: '12.5px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>
                  Still have a question?{' '}
                  <Link href="/contact" style={{ color: activeCat.color, textDecoration: 'none', fontWeight: 600 }}>
                    Contact us →
                  </Link>
                </div>
              </div>
            </div>

            {/* Accordion */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {filtered.map((faq, i) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    style={{
                      borderRadius: '16px',
                      background: isOpen ? '#FFFFFF' : '#FAFBFF',
                      border: isOpen ? `1.5px solid ${activeCat.border}` : '1.5px solid rgba(37,99,235,0.07)',
                      boxShadow: isOpen ? '0 8px 32px rgba(37,99,235,0.09)' : '0 1px 4px rgba(0,0,0,0.03)',
                      overflow: 'hidden',
                      transition: 'all 0.28s cubic-bezier(0.22,1,0.36,1)',
                    }}
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      style={{
                        width: '100%', textAlign: 'left' as const,
                        padding: '20px 24px',
                        display: 'flex', alignItems: 'center', gap: '16px',
                        background: 'none', border: 'none',
                      }}
                    >
                      <div
                        style={{
                          width: '30px', height: '30px', borderRadius: '9px', flexShrink: 0,
                          background: isOpen ? activeCat.bg : 'rgba(37,99,235,0.06)',
                          border: isOpen ? `1.5px solid ${activeCat.border}` : '1.5px solid rgba(37,99,235,0.10)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '11px', fontWeight: 800,
                          color: isOpen ? activeCat.color : '#7A99B4',
                          transition: 'all 0.25s',
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <span
                        style={{
                          flex: 1, fontSize: '15.5px',
                          fontWeight: isOpen ? 700 : 600,
                          color: '#0F2942', lineHeight: 1.38,
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        {faq.q}
                      </span>
                      <div
                        style={{
                          width: '28px', height: '28px', borderRadius: '8px', flexShrink: 0,
                          background: isOpen ? activeCat.color : 'rgba(37,99,235,0.07)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '13px', color: isOpen ? '#fff' : '#7A99B4',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'all 0.28s cubic-bezier(0.22,1,0.36,1)',
                        }}
                      >
                        ↓
                      </div>
                    </button>

                    <div
                      style={{
                        maxHeight: isOpen ? '500px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.40s cubic-bezier(0.22,1,0.36,1)',
                      }}
                    >
                      <div
                        style={{
                          padding: '18px 24px 22px 70px',
                          fontSize: '15px', color: '#3D5A73', lineHeight: 1.78,
                          fontFamily: "'DM Sans', sans-serif",
                          borderTop: `1px solid ${activeCat.border}`,
                        }}
                      >
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        style={{
          padding: '72px 24px',
          background: 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)',
          textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800,
              color: '#FFFFFF', letterSpacing: '-1px', marginBottom: '14px',
            }}
          >
            Didn&apos;t find your answer?
          </h2>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.70, marginBottom: '32px', fontFamily: "'DM Sans', sans-serif" }}>
            Our team is happy to answer any question about how InstiGenie works for your institution.
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="ig-faq-cta-primary"
            style={{
              padding: '14px 32px', borderRadius: '12px',
              fontSize: '16px', fontWeight: 700, color: '#2563EB',
              border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif",
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)', transition: 'all 0.25s',
            }}
          >
            Book a conversation →
          </button>
        </div>
      </section>

      <style jsx>{`
        .ig-faq-cta-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 36px rgba(0,0,0,0.22) !important; }
        .ig-faq-cta-secondary:hover { color: #2563EB !important; border-color: rgba(37,99,235,0.28) !important; background: #fff !important; transform: translateY(-1px); }
        .ig-faq-tab:hover { background: rgba(37,99,235,0.04) !important; border-color: rgba(37,99,235,0.18) !important; }
        @media (max-width: 680px) {
          div[style*="gridTemplateColumns"] { display: flex !important; flex-direction: column !important; }
          div[style*="position: sticky"] { position: relative !important; top: auto !important; }
        }
      `}</style>
    </>
  );
}
