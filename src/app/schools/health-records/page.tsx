'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PageHero from '../../components/PageHero';

const features = [
  ['🔒 Secure Storage', 'Bank-grade encryption for all student health data with DPDP compliance.'],
  ['📱 Any Device', 'Access records from any device — mobile, tablet, or desktop.'],
  ['🔄 Real-time Updates', 'Nurses and doctors update records in real-time after each visit.'],
  ['📊 Health Timeline', 'Complete longitudinal view of each student\'s health history.'],
  ['👨‍👩‍👦 Parent Access', 'Controlled parent portal access for reviewing their child\'s records.'],
  ['📤 Easy Export', 'Export records as PDF for external medical consultations.'],
];

export default function HealthRecordsPage() {
  const router = useRouter();
  return (
    <>
      <PageHero eyebrow="Schools · Health Records" title="Digital Health" highlight="Records System" subtitle="Modern, secure, and efficient health records system designed for Indian schools — with multilingual support and comprehensive documentation." cta={{ label: 'Get Started', href: '/book-checkup' }} ctaSecondary={{ label: 'All School Features', href: '/schools' }} />

      {/* Original image mosaic from the initial commit */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {[
          { src: '/images/healthdocumentation/Multilingual EHR Interface.png', alt: 'Multilingual EHR Interface' },
          { src: '/images/healthdocumentation/Medical Fitness Certificate.png', alt: 'Medical Fitness Certificate' },
          { src: '/images/healthdocumentation/Emergency Contact Form.png', alt: 'Emergency Contact Form' },
          { src: '/images/healthdocumentation/Indian Vaccination Record.png', alt: 'Indian Vaccination Record' },
          { src: '/images/healthdocumentation/Bilingual Health Review.png', alt: 'Bilingual Health Review' },
        ].map(img => (
          <div key={img.src} style={{ borderRadius: '14px', overflow: 'hidden', border: '1.5px solid rgba(37,99,235,0.10)', boxShadow: '0 2px 10px rgba(37,99,235,0.07)', position: 'relative', height: '180px' }}>
            <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {features.map(([title, desc]) => (
          <div key={title} style={{ padding: '22px', borderRadius: '16px', background: '#FFFFFF', border: '1.5px solid rgba(37,99,235,0.09)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0F2942', marginBottom: '6px' }}>{title}</div>
            <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{desc}</p>
          </div>
        ))}
      </div>
      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)', padding: '44px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Digitize Your School Health Records</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Join 500+ schools that have already gone digital with InstiGenie.</p>
        <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#2563EB', cursor: 'pointer', border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif" }}>Get Started →</button>
      </div>
    </>
  );
}
