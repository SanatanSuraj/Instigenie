'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PageHero from '../components/PageHero';

const tests = [
  { icon: '👁️', title: 'Visual Acuity Test', desc: 'Measures how clearly each eye can see at various distances using standardized charts.' },
  { icon: '🎨', title: 'Color Vision Test', desc: 'Identifies color blindness or deficiencies using Ishihara plates.' },
  { icon: '👂', title: 'Pure Tone Audiometry', desc: 'Tests hearing threshold across frequencies in a soundproof environment.' },
  { icon: '🔊', title: 'Speech Audiometry', desc: 'Evaluates ability to hear and understand spoken words at various volumes.' },
  { icon: '🔭', title: 'Peripheral Vision', desc: 'Examines the full width of a student\'s visual field.' },
  { icon: '📊', title: 'Digital Report', desc: 'Detailed digital report with referral recommendations sent immediately.' },
];

const stats = [
  { num: '98%', label: 'Detection Rate', color: '#2563EB' },
  { num: '10 min', label: 'Per Student', color: '#0D9488' },
  { num: '200k+', label: 'Screenings Done', color: '#22C55E' },
  { num: '45 dB', label: 'Hearing Sensitivity', color: '#7C3AED' },
];

export default function VisionHearingPage() {
  const router = useRouter();
  return (
    <>
      <PageHero eyebrow="Vision & Hearing" title="Vision & Hearing" highlight="Screening Program" subtitle="Early detection of vision and hearing problems is crucial for student learning. Our comprehensive screenings identify issues before they impact academic performance." cta={{ label: 'Book Screening', href: '/book-checkup' }} ctaSecondary={{ label: 'Learn More', href: '/services' }} />

      {/* Original image */}
      <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1.5px solid rgba(37,99,235,0.10)', boxShadow: '0 4px 24px rgba(37,99,235,0.08)', marginBottom: '48px', position: 'relative', height: '360px' }}>
        <Image src="/images/services/health screening.png" alt="Vision and Hearing Screening" fill style={{ objectFit: 'cover' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {stats.map(b => (
          <div key={b.label} style={{ padding: '20px', borderRadius: '14px', background: '#FFFFFF', border: '1.5px solid rgba(37,99,235,0.10)', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '26px', fontWeight: 800, color: b.color, marginBottom: '4px' }}>{b.num}</div>
            <div style={{ fontSize: '12px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif" }}>{b.label}</div>
          </div>
        ))}
      </div>
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0F2942', marginBottom: '24px', letterSpacing: '-0.5px' }}>Comprehensive Screening Battery</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '14px' }}>
          {tests.map(s => (
            <div key={s.title} style={{ padding: '22px', borderRadius: '16px', background: '#FFFFFF', border: '1.5px solid rgba(37,99,235,0.09)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>{s.icon}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0F2942', marginBottom: '6px' }}>{s.title}</div>
              <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #0D9488 0%, #2563EB 100%)', padding: '44px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Book Vision & Hearing Screening</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Early detection makes all the difference. Book today.</p>
        <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#0D9488', cursor: 'pointer', border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif" }}>Book Now →</button>
      </div>
    </>
  );
}
