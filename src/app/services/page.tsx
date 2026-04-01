'use client';

import { useRouter } from 'next/navigation';
import PageHero from '../components/PageHero';

const services = [
  {
    icon: '🩺',
    title: 'Physical Examination',
    desc: 'Comprehensive physical assessment including vital signs, growth monitoring, and overall wellness evaluation.',
    features: ['Height and weight measurement', 'Blood pressure monitoring', 'Growth tracking', 'Physical fitness assessment'],
    tag: 'AI-ASSISTED',
    tagColor: '#2563EB', tagBg: 'rgba(37,99,235,0.07)', tagBorder: 'rgba(37,99,235,0.15)',
    iconBg: 'rgba(37,99,235,0.07)', iconBorder: 'rgba(37,99,235,0.15)',
    href: '/services/physical-examination',
  },
  {
    icon: '👁️',
    title: 'Vision & Hearing Assessment',
    desc: 'State-of-the-art vision and hearing screening using AI-powered technology for accurate results.',
    features: ['AI-powered vision screening', 'Comprehensive hearing tests', 'Early detection of issues', 'Regular monitoring'],
    tag: 'EARLY DETECTION',
    tagColor: '#0D9488', tagBg: 'rgba(20,184,166,0.07)', tagBorder: 'rgba(20,184,166,0.18)',
    iconBg: 'rgba(20,184,166,0.07)', iconBorder: 'rgba(20,184,166,0.18)',
    href: '/services/vision-hearing',
  },
  {
    icon: '🧠',
    title: 'Mental Health Support',
    desc: 'Comprehensive mental health services including counseling, stress management, and emotional well-being programs.',
    features: ['Individual counseling sessions', 'Group therapy workshops', 'Stress management techniques', 'Crisis intervention support'],
    tag: 'REAL-TIME ALERTS',
    tagColor: '#16A34A', tagBg: 'rgba(34,197,94,0.07)', tagBorder: 'rgba(34,197,94,0.18)',
    iconBg: 'rgba(34,197,94,0.07)', iconBorder: 'rgba(34,197,94,0.18)',
    href: '/services/mental-health-support',
  },
  {
    icon: '💻',
    title: 'Telemedicine Services',
    desc: 'Virtual healthcare consultations connecting students with healthcare providers for remote medical support.',
    features: ['Real-time video consultations', 'Secure medical data transmission', 'Remote health monitoring', 'Digital prescription services'],
    tag: 'VIRTUAL CARE',
    tagColor: '#0284C7', tagBg: 'rgba(56,189,248,0.07)', tagBorder: 'rgba(56,189,248,0.16)',
    iconBg: 'rgba(56,189,248,0.07)', iconBorder: 'rgba(56,189,248,0.16)',
    href: '/services/telemedicine',
  },
  {
    icon: '🥗',
    title: 'Nutrition Advisory',
    desc: 'Expert guidance on balanced nutrition, dietary planning, and healthy eating habits for optimal student health.',
    features: ['Personalized meal planning', 'Nutritional assessments', 'Dietary counseling', 'Food allergy management'],
    tag: 'WELLNESS',
    tagColor: '#0D9488', tagBg: 'rgba(20,184,166,0.07)', tagBorder: 'rgba(20,184,166,0.18)',
    iconBg: 'rgba(20,184,166,0.07)', iconBorder: 'rgba(20,184,166,0.18)',
    href: '/services/nutrition-advisory',
  },
  {
    icon: '⚡',
    title: 'Emergency Response Training',
    desc: 'Comprehensive training in emergency medical procedures and first aid for school staff and students.',
    features: ['CPR certification', 'First aid training', 'Emergency protocol education', 'Safety drill coordination'],
    tag: 'CRITICAL CARE',
    tagColor: '#D97706', tagBg: 'rgba(245,158,11,0.07)', tagBorder: 'rgba(245,158,11,0.18)',
    iconBg: 'rgba(245,158,11,0.07)', iconBorder: 'rgba(245,158,11,0.18)',
    href: '/services/emergency-response',
  },
];

export default function ServicesPage() {
  const router = useRouter();

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive"
        highlight="Health Services"
        subtitle="Our advanced health screening program combines cutting-edge technology with expert medical care to ensure the wellbeing of every student in your institution."
        cta={{ label: 'Book a Checkup', href: '/book-checkup' }}
        ctaSecondary={{ label: 'Contact Sales', href: '/contact' }}
      />

      {/* Services Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '60px',
        }}
      >
        {services.map((svc) => (
          <div
            key={svc.title}
            onClick={() => router.push(svc.href)}
            className="ig-svc-card"
            style={{
              borderRadius: '18px',
              border: `1.5px solid ${svc.iconBorder}`,
              background: '#FFFFFF',
              padding: '28px',
              cursor: 'pointer',
              transition: 'all 0.28s',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Tinted corner accent */}
            <div style={{ position: 'absolute', width: '120px', height: '120px', borderRadius: '50%', top: '-40px', right: '-30px', background: svc.iconBg, pointerEvents: 'none' }} />
            {/* Icon */}
            <div style={{ width: '46px', height: '46px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px', fontSize: '22px', background: svc.iconBg, border: `1.5px solid ${svc.iconBorder}`, position: 'relative' }}>
              {svc.icon}
            </div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '17px', fontWeight: 700, color: '#0F2942', marginBottom: '8px' }}>
              {svc.title}
            </div>
            <div style={{ fontSize: '14px', color: '#3D5A73', lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", marginBottom: '16px' }}>
              {svc.desc}
            </div>
            {/* Feature list */}
            <ul style={{ margin: '0 0 16px', padding: 0, listStyle: 'none' }}>
              {svc.features.map((f) => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#3D5A73', fontFamily: "'DM Sans', sans-serif", padding: '3px 0' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: svc.tagColor, flexShrink: 0 }} />
                  {f}
                </li>
              ))}
            </ul>
            <div style={{ display: 'inline-block', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, background: svc.tagBg, border: `1px solid ${svc.tagBorder}`, color: svc.tagColor, letterSpacing: '0.5px', fontFamily: "'Space Grotesk', sans-serif" }}>
              {svc.tag}
            </div>
          </div>
        ))}
      </div>

      {/* Technology section */}
      <div
        style={{
          borderRadius: '20px',
          background: 'linear-gradient(160deg, #F0FDFA 0%, #EFF6FF 100%)',
          border: '1.5px solid rgba(20,184,166,0.15)',
          padding: '48px',
          marginBottom: '48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 600, color: '#0D9488', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px', fontFamily: "'DM Sans', sans-serif" }}>
            <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px' }} />
            Smart Technology
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, letterSpacing: '-1px', color: '#0F2942', marginBottom: '14px' }}>
            AI-Powered Health Intelligence
          </h2>
          <p style={{ fontSize: '16px', color: '#3D5A73', lineHeight: 1.68, fontFamily: "'DM Sans', sans-serif", marginBottom: '28px' }}>
            Experience the future of school healthcare with our cutting-edge technology solutions. From digital health records to AI-powered screenings, we&apos;re revolutionizing how schools manage student health.
          </p>
          <button
            onClick={() => router.push('/book-checkup')}
            style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 600, color: '#fff', cursor: 'pointer', border: 'none', fontFamily: "'DM Sans', sans-serif", background: 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)', boxShadow: '0 4px 18px rgba(37,99,235,0.28)', transition: 'all 0.25s' }}
          >
            Schedule a Demo →
          </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          {[
            { icon: '🤖', label: 'AI Analysis', desc: 'Real-time health pattern detection' },
            { icon: '📊', label: 'Live Dashboard', desc: 'Instant insights for administrators' },
            { icon: '🔔', label: 'Smart Alerts', desc: 'Automated parent notifications' },
            { icon: '🔒', label: 'Secure Data', desc: 'HIPAA & DPDP compliant storage' },
          ].map((item) => (
            <div key={item.label} style={{ padding: '18px', borderRadius: '14px', background: '#FFFFFF', border: '1.5px solid rgba(37,99,235,0.10)', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: '22px', marginBottom: '8px' }}>{item.icon}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0F2942', marginBottom: '4px' }}>{item.label}</div>
              <div style={{ fontSize: '12px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div
        style={{
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)',
          padding: '48px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', pointerEvents: 'none' }} />
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 800, color: '#fff', marginBottom: '12px', position: 'relative' }}>
          Ready to Get Started?
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.88)', marginBottom: '28px', fontFamily: "'DM Sans', sans-serif", position: 'relative' }}>
          Contact us today to learn how we can protect and promote the health of your students.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
          <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#2563EB', cursor: 'pointer', border: 'none', background: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', transition: 'all 0.25s', fontFamily: "'DM Sans', sans-serif" }}>
            Schedule Demo →
          </button>
          <button onClick={() => router.push('/contact')} style={{ padding: '13px 24px', borderRadius: '10px', fontSize: '15px', fontWeight: 600, color: '#fff', cursor: 'pointer', border: '2px solid rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.10)', transition: 'all 0.22s', fontFamily: "'DM Sans', sans-serif" }}>
            Contact Sales
          </button>
        </div>
      </div>

      <style jsx>{`
        .ig-svc-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 42px rgba(37,99,235,0.12), 0 0 0 1.5px rgba(20,184,166,0.25) !important;
          border-color: rgba(20,184,166,0.35) !important;
        }
      `}</style>
    </>
  );
}