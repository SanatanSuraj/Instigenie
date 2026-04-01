'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PageHero from '../components/PageHero';

const steps = [
  { icon: '🩺', title: 'Initial Assessment', desc: 'Comprehensive review of medical history and current health concerns.' },
  { icon: '📏', title: 'Growth Tracking', desc: 'Height, weight, BMI and developmental milestone monitoring.' },
  { icon: '❤️', title: 'Vital Signs', desc: 'Blood pressure, heart rate, temperature and respiratory rate checks.' },
  { icon: '🫁', title: 'System Review', desc: 'Head-to-toe examination of all major organ systems.' },
  { icon: '💉', title: 'Lab Tests', desc: 'Blood work, urine analysis and other diagnostics as needed.' },
  { icon: '📋', title: 'Health Report', desc: 'Detailed digital report with recommendations sent to parents.' },
];

const benefits = [
  { num: '99%', label: 'Accuracy Rate', color: '#2563EB' },
  { num: '15 min', label: 'Average Exam Time', color: '#0D9488' },
  { num: '50k+', label: 'Students Examined', color: '#22C55E' },
  { num: '500+', label: 'Schools Served', color: '#7C3AED' },
];

export default function PhysicalExam() {
  const router = useRouter();

  return (
    <>
      <PageHero
        eyebrow="Physical Examination"
        title="Comprehensive Physical"
        highlight="Examinations"
        subtitle="Our thorough physical examinations ensure your child's health and wellness, following the latest medical guidelines and standards."
        cta={{ label: 'Book an Exam', href: '/book-checkup' }}
        ctaSecondary={{ label: 'View Services', href: '/services' }}
      />

      {/* Hero Image */}
      <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1.5px solid rgba(37,99,235,0.10)', boxShadow: '0 4px 24px rgba(37,99,235,0.08)', marginBottom: '48px', position: 'relative', height: '360px' }}>
        <Image src="/images/services/School friends.png" alt="Physical Examination" fill style={{ objectFit: 'cover' }} />
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {benefits.map(b => (
          <div key={b.label} style={{ padding: '20px', borderRadius: '14px', background: '#FFFFFF', border: '1.5px solid rgba(37,99,235,0.10)', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '26px', fontWeight: 800, color: b.color, marginBottom: '4px' }}>{b.num}</div>
            <div style={{ fontSize: '12px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif" }}>{b.label}</div>
          </div>
        ))}
      </div>

      {/* Steps grid */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 600, color: '#0D9488', letterSpacing: '2px', textTransform: 'uppercase' as const, marginBottom: '14px', fontFamily: "'DM Sans', sans-serif" }}>
          <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px' }} /> Examination Process
        </div>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0F2942', marginBottom: '24px', letterSpacing: '-0.5px' }}>How We Conduct the Exam</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '14px' }}>
          {steps.map((s, i) => (
            <div key={s.title} style={{ padding: '22px', borderRadius: '16px', background: '#FFFFFF', border: '1.5px solid rgba(37,99,235,0.09)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(20,184,166,0.10))', border: '1.5px solid rgba(37,99,235,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>{s.icon}</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', fontWeight: 800, color: '#fff', background: 'linear-gradient(135deg, #2563EB, #14B8A6)', borderRadius: '50%', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0F2942' }}>{s.title}</span>
                </div>
                <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)', padding: '44px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Schedule a Physical Examination</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Book a comprehensive health check for your school today.</p>
        <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#2563EB', cursor: 'pointer', border: 'none', background: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.12)', fontFamily: "'DM Sans', sans-serif" }}>Book Now →</button>
      </div>
    </>
  );
}
