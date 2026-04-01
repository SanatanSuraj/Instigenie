'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PageHero from '../components/PageHero';

const services = [
  { icon: '🦷', title: 'Dental Examination', desc: 'Complete oral health assessment including bite, gum, and jaw evaluation.' },
  { icon: '🪥', title: 'Oral Hygiene Assessment', desc: 'Personalized guidance on brushing, flossing, and dietary habits.' },
  { icon: '🔬', title: 'Cavity Detection', desc: 'Early identification of cavities using modern diagnostic tools.' },
  { icon: '🦠', title: 'Gum Disease Screening', desc: 'Checks for gingivitis and early signs of periodontal disease.' },
  { icon: '📸', title: 'Dental X-rays', desc: 'Digital X-rays for detecting issues invisible to the naked eye.' },
  { icon: '📋', title: 'Treatment Planning', desc: 'Clear, parent-friendly reports with recommended next steps.' },
];

export default function DentalCarePage() {
  const router = useRouter();
  return (
    <>
      <PageHero eyebrow="Dental Care" title="School Dental" highlight="Health Program" subtitle="Comprehensive dental screenings and oral health education to ensure every student has a healthy, confident smile. Early intervention prevents bigger problems." cta={{ label: 'Book Dental Exam', href: '/book-checkup' }} ctaSecondary={{ label: 'View All Services', href: '/services' }} gradient="linear-gradient(160deg, #ECFDF5 0%, #EFF6FF 60%, #F0FDFA 100%)" />

      {/* Original image */}
      <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1.5px solid rgba(13,148,136,0.15)', boxShadow: '0 4px 24px rgba(13,148,136,0.10)', marginBottom: '48px', position: 'relative', height: '360px' }}>
        <Image src="/images/services/Modern Dental Consultation.png" alt="Modern Dental Consultation" fill style={{ objectFit: 'cover' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {[{ num: '97%', l: 'Early Detection Rate', c: '#0D9488' }, { num: '30 min', l: 'Per Student', c: '#2563EB' }, { num: '100k+', l: 'Students Screened', c: '#22C55E' }, { num: '0 pain', l: 'Non-invasive Process', c: '#7C3AED' }].map(b => (
          <div key={b.l} style={{ padding: '20px', borderRadius: '14px', background: '#FFFFFF', border: '1.5px solid rgba(37,99,235,0.10)', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '26px', fontWeight: 800, color: b.c, marginBottom: '4px' }}>{b.num}</div>
            <div style={{ fontSize: '12px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif" }}>{b.l}</div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0F2942', marginBottom: '24px', letterSpacing: '-0.5px' }}>What&apos;s Included</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
          {services.map(s => (
            <div key={s.title} style={{ padding: '22px', borderRadius: '16px', background: '#FFFFFF', border: '1.5px solid rgba(13,148,136,0.12)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>{s.icon}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0F2942', marginBottom: '6px' }}>{s.title}</div>
              <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #0D9488 0%, #22C55E 100%)', padding: '44px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Give Students a Healthy Smile</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Book a dental health program for your school today.</p>
        <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#0D9488', cursor: 'pointer', border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif" }}>Book Dental Screening →</button>
      </div>
    </>
  );
}
