'use client';
import { useRouter } from 'next/navigation';
import PageHero from '../../components/PageHero';

const features = [
  ['🔐 Secure Login', 'Parents get unique login credentials ensuring only authorized access.'],
  ['📋 Health Summary', 'A clean summary of their child\'s latest health checkup results.'],
  ['📈 Growth Charts', 'Visual height, weight, and BMI growth charts over time.'],
  ['📨 Instant Notifications', 'Real-time alerts for health concerns, upcoming checkups, and reports.'],
  ['💬 Message Counselor', 'Direct messaging channel with school nurse and health team.'],
  ['📥 Download Reports', 'Download PDF health certificates for external doctors or records.'],
];

export default function ParentPortalPage() {
  const router = useRouter();
  return (
    <>
      <PageHero eyebrow="Schools · Parent Portal" title="Parent Health" highlight="Portal" subtitle="Give parents secure, real-time access to their child's health records and keep them informed and involved in their child's wellness journey." cta={{ label: 'Set Up Portal', href: '/book-checkup' }} ctaSecondary={{ label: 'All School Features', href: '/schools' }} gradient="linear-gradient(160deg, #F0FDF4 0%, #EFF6FF 60%, #F0FDFA 100%)" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {features.map(([title, desc]) => (
          <div key={title} style={{ padding: '22px', borderRadius: '16px', background: '#FFFFFF', border: '1.5px solid rgba(22,163,74,0.12)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0F2942', marginBottom: '6px' }}>{title}</div>
            <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{desc}</p>
          </div>
        ))}
      </div>
      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #16A34A 0%, #0D9488 100%)', padding: '44px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Enable the Parent Portal</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Keep parents connected to their child's health in real time.</p>
        <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#16A34A', cursor: 'pointer', border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif" }}>Set Up Now →</button>
      </div>
    </>
  );
}
