'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PageHero from '../../components/PageHero';

const items = [
  ['🩺 Annual Check-ups', 'Comprehensive yearly health assessments following CBSE/ICSE school health guidelines.'],
  ['📏 Growth Monitoring', 'Height, weight, BMI tracking with age-appropriate developmental benchmarks.'],
  ['❤️ Cardiovascular Check', 'Heart rate, blood pressure, and cardiac health screening.'],
  ['🫁 Respiratory Check', 'Lung function, breathing assessment, and allergy evaluation.'],
  ['🦴 Musculoskeletal', 'Posture analysis, spine curvature, and joint health assessment.'],
  ['🧠 Neurological Screen', 'Basic cognitive and neurological milestones check.'],
  ['💉 Immunization Review', 'Vaccination status verification and catch-up recommendations.'],
  ['📋 Digital Health Report', 'Comprehensive report shared with parents via secure portal.'],
];

export default function PhysicalExaminationServicePage() {
  const router = useRouter();
  return (
    <>
      <PageHero eyebrow="Service" title="Physical Examination" highlight="Service" subtitle="Our comprehensive school physical examination program follows national health guidelines to monitor every student's health and wellbeing." cta={{ label: 'Schedule Now', href: '/book-checkup' }} ctaSecondary={{ label: 'All Services', href: '/services' }} />

      {/* Original image */}
      <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1.5px solid rgba(37,99,235,0.10)', boxShadow: '0 4px 24px rgba(37,99,235,0.08)', marginBottom: '48px', position: 'relative', height: '360px' }}>
        <Image src="/images/schools/School Health Checkup.png" alt="School Health Checkup" fill style={{ objectFit: 'cover' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {items.map(([title, desc]) => (
          <div key={title} style={{ padding: '22px', borderRadius: '16px', background: '#FFFFFF', border: '1.5px solid rgba(37,99,235,0.09)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0F2942', marginBottom: '6px' }}>{title}</div>
            <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{desc}</p>
          </div>
        ))}
      </div>
      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)', padding: '44px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Schedule Physical Examination</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Serving 500+ schools across India. Book today.</p>
        <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#2563EB', cursor: 'pointer', border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif" }}>Book Now →</button>
      </div>
    </>
  );
}
