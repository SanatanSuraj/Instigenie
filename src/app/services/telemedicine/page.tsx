'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PageHero from '../../components/PageHero';

const items = [
  ['📹 Video Consultations', 'Face-to-face virtual appointments with doctors and specialists.'],
  ['💬 Chat-Based Consults', 'Instant text consultations for non-urgent health concerns.'],
  ['📋 Digital Prescriptions', 'E-prescriptions sent directly to parents with pharmacy directions.'],
  ['🔄 Follow-up Care', 'Scheduled follow-ups to monitor treatment progress remotely.'],
  ['🧪 Lab Result Review', 'Virtual review of lab reports and diagnostic results.'],
  ['🏫 School Integration', 'Seamless connection with school nurse and health records.'],
];

export default function TelemedicinePage() {
  const router = useRouter();
  return (
    <>
      <PageHero eyebrow="Service" title="Telemedicine &" highlight="Virtual Care" subtitle="Access qualified doctors and specialists from anywhere — no travel needed. Our secure telemedicine platform brings healthcare directly to students." cta={{ label: 'Book Virtual Visit', href: '/book-checkup' }} ctaSecondary={{ label: 'All Services', href: '/services' }} gradient="linear-gradient(160deg, #EFF6FF 0%, #F0F9FF 60%, #F0FDFA 100%)" />

      {/* Original image */}
      <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1.5px solid rgba(2,132,199,0.15)', boxShadow: '0 4px 24px rgba(2,132,199,0.08)', marginBottom: '48px', position: 'relative', height: '360px' }}>
        <Image src="/images/schools/Virtual Health Consultation.png" alt="Virtual Health Consultation" fill style={{ objectFit: 'cover' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {items.map(([title, desc]) => (
          <div key={title} style={{ padding: '22px', borderRadius: '16px', background: '#FFFFFF', border: '1.5px solid rgba(2,132,199,0.12)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0F2942', marginBottom: '6px' }}>{title}</div>
            <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{desc}</p>
          </div>
        ))}
      </div>
      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #0284C7 0%, #14B8A6 100%)', padding: '44px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Book a Virtual Consultation</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Healthcare made accessible for every student, anywhere in India.</p>
        <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#0284C7', cursor: 'pointer', border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif" }}>Book Virtual Visit →</button>
      </div>
    </>
  );
}
