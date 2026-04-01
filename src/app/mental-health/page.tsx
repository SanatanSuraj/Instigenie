'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useChat } from '../context/ChatContext';
import PageHero from '../components/PageHero';

const services = [
  {
    title: 'Individual Counseling',
    desc: 'One-on-one sessions with qualified mental health professionals in a safe, confidential environment.',
    href: '/mental-health/individual-counseling',
    icon: '🧘',
    features: ['Personalized support', 'Stress management', 'Coping strategies', 'Academic pressure support'],
    color: '#0D9488', bg: '#F0FDFA', border: 'rgba(20,184,166,0.18)',
  },
  {
    title: 'Group Support Sessions',
    desc: 'Facilitated group discussions providing peer support and shared learning experiences.',
    href: '/mental-health/group-support',
    icon: '👥',
    features: ['Peer support network', 'Shared experiences', 'Social skills development', 'Emotional resilience'],
    color: '#2563EB', bg: '#EFF6FF', border: 'rgba(37,99,235,0.15)',
  },
  {
    title: 'AI-Powered Assessment',
    desc: 'Early detection of potential mental health concerns using advanced AI analysis and behavioral tracking.',
    href: '/mental-health/ai-assessment',
    icon: '🤖',
    features: ['Early detection', 'Behavioral analysis', 'Progress tracking', 'Personalized insights'],
    color: '#0284C7', bg: '#F0F9FF', border: 'rgba(56,189,248,0.18)',
  },
  {
    title: 'Parent Consultation',
    desc: 'Regular updates and guidance for parents to support their child\'s mental wellbeing at home.',
    href: '/mental-health/parent-consultation',
    icon: '👨‍👩‍👦',
    features: ['Regular updates', 'Parenting guidance', 'Communication strategies', 'Home support tips'],
    color: '#16A34A', bg: '#F0FDF4', border: 'rgba(34,197,94,0.18)',
  },
];

const pillars = [
  { icon: '😊', title: 'Emotional Balance', desc: 'Understanding and managing emotions effectively for daily life.' },
  { icon: '🧠', title: 'Mental Clarity', desc: 'Developing focus and cognitive wellness through evidence-based methods.' },
  { icon: '🤝', title: 'Social Connection', desc: 'Building meaningful relationships and a supportive peer network.' },
  { icon: '🌱', title: 'Self Growth', desc: 'Personal development, resilience, and lifelong mental health habits.' },
];

const resources = [
  { title: 'Self-Help Tools', desc: 'Access our library of mental wellness resources, including guided meditations and stress management techniques.', href: '/mental-health/resources', icon: '📚', color: '#2563EB', bg: '#EFF6FF', border: 'rgba(37,99,235,0.15)' },
  { title: 'Educational Materials', desc: 'Learn about mental health through our curated collection of articles, videos, and interactive modules.', href: '/mental-health/resources', icon: '🎓', color: '#0D9488', bg: '#F0FDFA', border: 'rgba(20,184,166,0.18)' },
  { title: 'Crisis Support', desc: 'Immediate assistance and resources for students experiencing mental health emergencies — available 24/7.', href: '/mental-health/resources', icon: '🆘', color: '#EF4444', bg: '#FFF1F2', border: 'rgba(239,68,68,0.18)' },
];

export default function MentalHealthPage() {
  const { openChat } = useChat();

  return (
    <>
      <PageHero
        eyebrow="Mental Health"
        title="Student"
        highlight="Mental Wellness"
        subtitle="Comprehensive mental health support and resources for students, combining professional care with AI-assisted early detection — because every mind deserves attention."
        cta={{ label: 'Schedule Consultation', href: '/book-checkup' }}
        ctaSecondary={{ label: 'Learn More', href: '/services' }}
        gradient="linear-gradient(160deg, #F0FDFA 0%, #EFF6FF 60%, #F0FDF4 100%)"
      />

      {/* Services */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 600, color: '#0D9488', letterSpacing: '2px', textTransform: 'uppercase' as const, marginBottom: '14px', fontFamily: "'DM Sans', sans-serif" }}>
          <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px' }} />
          Our Services
        </div>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800, letterSpacing: '-1px', color: '#0F2942', marginBottom: '28px' }}>
          Our Mental Health Services
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {services.map((svc) => (
            <Link key={svc.title} href={svc.href} style={{ textDecoration: 'none' }}>
              <div
                className="ig-mh-card"
                style={{
                  padding: '26px', borderRadius: '18px',
                  border: `1.5px solid ${svc.border}`, background: '#FFFFFF',
                  transition: 'all 0.26s', cursor: 'pointer',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.04)', height: '100%',
                }}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: svc.bg, border: `1.5px solid ${svc.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '16px' }}>{svc.icon}</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', fontWeight: 700, color: '#0F2942', marginBottom: '8px' }}>{svc.title}</div>
                <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", marginBottom: '14px' }}>{svc.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {svc.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12px', color: '#3D5A73', fontFamily: "'DM Sans', sans-serif", padding: '2.5px 0' }}>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: svc.color, flexShrink: 0 }} />{f}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Counseling feature */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px',
          marginBottom: '48px',
          alignItems: 'center',
          borderRadius: '20px',
          background: 'linear-gradient(160deg, #F0FDFA 0%, #EFF6FF 100%)',
          border: '1.5px solid rgba(20,184,166,0.15)',
          padding: '40px',
        }}
      >
        <div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, letterSpacing: '-1px', color: '#0F2942', marginBottom: '14px' }}>
            Professional Support When<br />
            <span style={{ background: 'linear-gradient(90deg, #2563EB, #14B8A6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Students Need It Most
            </span>
          </h2>
          <p style={{ fontSize: '15px', color: '#3D5A73', lineHeight: 1.72, fontFamily: "'DM Sans', sans-serif", marginBottom: '22px' }}>
            Our team of experienced counselors and mental health professionals provides compassionate support to help students navigate their emotional and psychological well-being.
          </p>
          {['Individual counseling sessions', 'Group therapy workshops', 'Crisis intervention support', 'Stress management techniques'].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 0', fontSize: '14px', color: '#3D5A73', fontFamily: "'DM Sans', sans-serif" }}>
              <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(20,184,166,0.12)', border: '1px solid rgba(20,184,166,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              {item}
            </div>
          ))}
        </div>
        <div style={{ borderRadius: '16px', overflow: 'hidden', position: 'relative', height: '300px', boxShadow: '0 8px 28px rgba(37,99,235,0.12)' }}>
          <Image src="/images/services/Supportive Counseling.png" alt="Supportive counseling" fill className="object-cover" />
        </div>
      </div>

      {/* Stats + Photo */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px',
          marginBottom: '48px',
          alignItems: 'center',
        }}
      >
        <div style={{ borderRadius: '16px', overflow: 'hidden', position: 'relative', height: '280px', boxShadow: '0 8px 28px rgba(37,99,235,0.10)' }}>
          <Image src="/images/schools/Friendly Counseling Session.png" alt="Friendly counseling" fill className="object-cover" />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 600, color: '#0D9488', letterSpacing: '2px', textTransform: 'uppercase' as const, marginBottom: '14px', fontFamily: "'DM Sans', sans-serif" }}>
            <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px' }} />
            Making a Difference
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, letterSpacing: '-1px', color: '#0F2942', marginBottom: '14px' }}>
            Creating a Supportive Learning Environment
          </h2>
          <p style={{ fontSize: '15px', color: '#3D5A73', lineHeight: 1.72, fontFamily: "'DM Sans', sans-serif", marginBottom: '22px' }}>
            Our mental health program has helped thousands of students achieve better emotional well-being and academic success through comprehensive support and early intervention.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {[{ num: '95%', label: 'Student satisfaction with counseling' }, { num: '24/7', label: 'Access to mental health resources' }].map((stat) => (
              <div key={stat.label} style={{ padding: '20px', borderRadius: '14px', background: '#FFFFFF', border: '1.5px solid rgba(20,184,166,0.15)', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '28px', fontWeight: 800, background: 'linear-gradient(135deg, #2563EB, #14B8A6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '6px' }}>{stat.num}</div>
                <div style={{ fontSize: '12px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 600, color: '#0D9488', letterSpacing: '2px', textTransform: 'uppercase' as const, marginBottom: '14px', fontFamily: "'DM Sans', sans-serif" }}>
          <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px' }} />
          Holistic Approach
        </div>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, letterSpacing: '-1px', color: '#0F2942', marginBottom: '28px' }}>
          Pillars of Mental Wellness
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {pillars.map((p) => (
            <div key={p.title} style={{ padding: '24px', borderRadius: '16px', background: 'linear-gradient(135deg, #F0FDFA, #EFF6FF)', border: '1.5px solid rgba(20,184,166,0.15)', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{p.icon}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '15px', fontWeight: 700, color: '#0F2942', marginBottom: '7px' }}>{p.title}</div>
              <div style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, letterSpacing: '-1px', color: '#0F2942', marginBottom: '28px' }}>
          Mental Health Resources
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          {resources.map((r) => (
            <Link key={r.title} href={r.href} style={{ textDecoration: 'none' }}>
              <div className="ig-res-card" style={{ padding: '26px', borderRadius: '16px', border: `1.5px solid ${r.border}`, background: '#FFFFFF', transition: 'all 0.26s', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: r.bg, border: `1.5px solid ${r.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '16px' }}>{r.icon}</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', fontWeight: 700, color: '#0F2942', marginBottom: '8px' }}>{r.title}</div>
                <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", marginBottom: '14px' }}>{r.desc}</p>
                <span style={{ fontSize: '13px', fontWeight: 600, color: r.color, fontFamily: "'DM Sans', sans-serif" }}>Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Emergency CTA */}
      <div
        style={{
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #EF4444 0%, #D97706 100%)',
          padding: '40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', pointerEvents: 'none' }} />
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.12)', fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '1px', marginBottom: '14px', fontFamily: "'Space Grotesk', sans-serif" }}>
          🚨 IMMEDIATE SUPPORT
        </div>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 800, color: '#fff', marginBottom: '10px', position: 'relative' }}>
          Need Immediate Support?
        </h3>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif", position: 'relative' }}>
          Our mental health professionals are available 24/7 to provide immediate assistance.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
          <a href="tel:+917050140340" style={{ padding: '12px 24px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#EF4444', textDecoration: 'none', background: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', fontFamily: "'DM Sans', sans-serif" }}>
            📞 Call Helpline
          </a>
          <button onClick={openChat} style={{ padding: '12px 24px', borderRadius: '10px', fontSize: '15px', fontWeight: 600, color: '#fff', cursor: 'pointer', border: '2px solid rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.12)', fontFamily: "'DM Sans', sans-serif" }}>
            💬 Chat with Counselor
          </button>
        </div>
      </div>

      <style jsx>{`
        .ig-mh-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(37,99,235,0.10) !important; }
        .ig-res-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(37,99,235,0.09) !important; }
      `}</style>
    </>
  );
}