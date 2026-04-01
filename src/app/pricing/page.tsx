'use client';

import { useRouter } from 'next/navigation';
import PageHero from '../components/PageHero';

const plans = [
  {
    name: 'Starter',
    price: '₹9,999',
    period: '/month',
    desc: 'Perfect for small schools getting started with digital health management.',
    color: '#2563EB', bg: '#EFF6FF', border: 'rgba(37,99,235,0.15)',
    features: ['Up to 500 students', 'Basic health records', 'AI health screening', 'Parent notifications', 'Monthly reports', 'Email support'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '₹24,999',
    period: '/month',
    desc: 'Comprehensive solution for mid-size institutions with advanced analytics.',
    color: '#FFFFFF', bg: 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)', border: 'transparent',
    features: ['Up to 2,000 students', 'Full health records', 'AI-powered diagnostics', 'Real-time alerts', 'Custom reports', 'Telemedicine access', 'Priority support', 'Parent portal'],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Tailored solution for large institutions and school districts.',
    color: '#0D9488', bg: '#F0FDFA', border: 'rgba(20,184,166,0.18)',
    features: ['Unlimited students', 'All Professional features', 'Custom integrations', 'Dedicated account manager', 'On-site training', 'SLA guarantees', '24/7 phone support', 'Custom branding'],
    cta: 'Contact Sales',
    popular: false,
  },
];

const faqs = [
  { q: "What's included in the basic plan?", a: "The Starter plan includes essential health monitoring features suitable for small to medium-sized schools, including student health records, basic analytics, and emergency notifications." },
  { q: "Can I upgrade or downgrade my plan?", a: "Yes, you can change your plan at any time. We'll prorate any charges or credits based on your billing cycle." },
  { q: "Do you offer custom enterprise solutions?", a: "Yes, we offer customized solutions for large institutions with specific requirements. Contact our sales team to discuss your needs." },
  { q: "Is there a setup fee?", a: "No hidden fees. The price you see is what you pay, and it includes full setup and onboarding support." },
];

export default function PricingPage() {
  const router = useRouter();

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple, Transparent"
        highlight="Pricing"
        subtitle="Choose the perfect plan for your school's health monitoring needs. All plans include our core AI health services and dedicated support."
      />

      {/* Plans */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '60px',
          alignItems: 'stretch',
        }}
      >
        {plans.map((plan) => {
          const isPopular = plan.popular;
          return (
            <div
              key={plan.name}
              style={{
                borderRadius: '20px',
                border: isPopular ? 'none' : `1.5px solid ${plan.border}`,
                background: isPopular ? plan.bg : '#FFFFFF',
                padding: '32px',
                position: 'relative',
                boxShadow: isPopular ? '0 12px 40px rgba(37,99,235,0.28)' : '0 2px 14px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.28s',
              }}
              className="ig-plan-card"
            >
              {isPopular && (
                <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#F59E0B', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 14px', borderRadius: '100px', letterSpacing: '0.5px', fontFamily: "'Space Grotesk', sans-serif", whiteSpace: 'nowrap' }}>
                  MOST POPULAR
                </div>
              )}
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: isPopular ? 'rgba(255,255,255,0.75)' : '#7A99B4', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                {plan.name}
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', marginBottom: '8px' }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: isPopular ? '#fff' : '#0F2942', letterSpacing: '-1px' }}>{plan.price}</span>
                <span style={{ fontSize: '14px', color: isPopular ? 'rgba(255,255,255,0.70)' : '#7A99B4', fontFamily: "'DM Sans', sans-serif", marginBottom: '6px' }}>{plan.period}</span>
              </div>
              <p style={{ fontSize: '14px', color: isPopular ? 'rgba(255,255,255,0.80)' : '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", marginBottom: '24px' }}>{plan.desc}</p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', flex: 1 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '6px 0', fontSize: '14px', color: isPopular ? 'rgba(255,255,255,0.88)' : '#3D5A73', fontFamily: "'DM Sans', sans-serif", borderBottom: `1px solid ${isPopular ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.04)'}` }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill={isPopular ? 'rgba(255,255,255,0.20)' : 'rgba(34,197,94,0.12)'} />
                      <path d="M4 7l2 2 4-4" stroke={isPopular ? '#fff' : '#22C55E'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => router.push(plan.name === 'Enterprise' ? '/contact' : '/book-checkup')}
                style={{
                  padding: '13px 24px', borderRadius: '10px', fontSize: '15px', fontWeight: 700,
                  color: isPopular ? '#2563EB' : '#fff',
                  cursor: 'pointer', border: 'none',
                  background: isPopular ? '#FFFFFF' : 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)',
                  boxShadow: isPopular ? '0 4px 16px rgba(0,0,0,0.15)' : '0 4px 16px rgba(37,99,235,0.25)',
                  transition: 'all 0.25s', fontFamily: "'DM Sans', sans-serif", width: '100%',
                }}
              >
                {plan.cta} →
              </button>
            </div>
          );
        })}
      </div>

      {/* FAQ */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 600, color: '#0D9488', letterSpacing: '2px', textTransform: 'uppercase' as const, marginBottom: '14px', fontFamily: "'DM Sans', sans-serif" }}>
          <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px' }} />
          FAQ
        </div>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, letterSpacing: '-1px', color: '#0F2942', marginBottom: '28px' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {faqs.map((faq) => (
            <div key={faq.q} style={{ padding: '24px', borderRadius: '16px', border: '1.5px solid rgba(37,99,235,0.10)', background: '#FFFFFF', boxShadow: '0 2px 10px rgba(0,0,0,0.04)', transition: 'all 0.25s' }} className="ig-faq-card">
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '15px', fontWeight: 700, color: '#0F2942', marginBottom: '10px' }}>{faq.q}</h3>
              <p style={{ fontSize: '14px', color: '#3D5A73', lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif" }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)', padding: '48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', pointerEvents: 'none' }} />
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 800, color: '#fff', marginBottom: '12px', position: 'relative' }}>Need a Custom Solution?</h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.88)', marginBottom: '28px', fontFamily: "'DM Sans', sans-serif", position: 'relative' }}>Contact our team for personalized pricing tailored to your institution&apos;s specific requirements.</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
          <button onClick={() => router.push('/contact')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#2563EB', cursor: 'pointer', border: 'none', background: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', fontFamily: "'DM Sans', sans-serif" }}>Contact Sales →</button>
          <button style={{ padding: '13px 24px', borderRadius: '10px', fontSize: '15px', fontWeight: 600, color: '#fff', cursor: 'pointer', border: '2px solid rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.10)', fontFamily: "'DM Sans', sans-serif" }}>Download Brochure</button>
        </div>
      </div>

      <style jsx>{`
        .ig-plan-card:hover { transform: translateY(-4px); }
        .ig-faq-card:hover { border-color: rgba(20,184,166,0.30) !important; box-shadow: 0 8px 24px rgba(37,99,235,0.09) !important; }
      `}</style>
    </>
  );
}