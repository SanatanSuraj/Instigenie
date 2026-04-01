'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PageHero from '../../components/PageHero';

const items = [
  ['👁️ Visual Acuity', 'Standard and near-vision testing for all age groups.'],
  ['🎨 Color Vision', 'Ishihara color blindness detection test.'],
  ['👂 Audiometry', 'Pure-tone hearing threshold testing in all frequencies.'],
  ['🔊 Speech Testing', 'Speech recognition and comprehension evaluation.'],
  ['🔭 Peripheral Vision', 'Full visual field examination for both eyes.'],
  ['📊 Digital Reports', 'Results and referrals delivered instantly to parents.'],
];

export default function VisionHearingServicePage() {
  const router = useRouter();
  return (
    <>
      <PageHero eyebrow="Service" title="Vision & Hearing" highlight="Screening Service" subtitle="Comprehensive vision and hearing screenings to detect issues that may be impacting your students' learning and development." cta={{ label: 'Schedule Screening', href: '/book-checkup' }} ctaSecondary={{ label: 'All Services', href: '/services' }} gradient="linear-gradient(160deg, #EFF6FF 0%, #F0FDFA 100%)" />

      {/* Original image */}
      <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1.5px solid rgba(13,148,136,0.15)', boxShadow: '0 4px 24px rgba(13,148,136,0.08)', marginBottom: '48px', position: 'relative', height: '360px' }}>
        <Image src="/images/schools/Digital Vision Screening.png" alt="Digital Vision Screening" fill style={{ objectFit: 'cover' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {items.map(([title, desc]) => (
          <div key={title} style={{ padding: '22px', borderRadius: '16px', background: '#FFFFFF', border: '1.5px solid rgba(13,148,136,0.12)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0F2942', marginBottom: '6px' }}>{title}</div>
            <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{desc}</p>
          </div>
        ))}
      </div>
      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #0D9488 0%, #2563EB 100%)', padding: '44px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Book Vision & Hearing Screening</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Early detection makes all the difference.</p>
        <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#0D9488', cursor: 'pointer', border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif" }}>Book Now →</button>
      </div>
    </>
  );
}
