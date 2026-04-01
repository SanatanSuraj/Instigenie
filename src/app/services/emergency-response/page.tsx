'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PageHero from '../../components/PageHero';

const items = [
  ['🚑 On-site First Aid', 'Trained nurses and first-aid equipment stationed at every school.'],
  ['📞 Emergency Hotline', '24/7 direct line to InstiGenie emergency medical coordinators.'],
  ['🏥 Hospital Liaison', 'Pre-arranged emergency pathways to nearest empaneled hospitals.'],
  ['📋 Emergency Protocols', 'School-specific emergency action plans for all common scenarios.'],
  ['🚒 Rapid Response', 'Target response time under 8 minutes for all medical emergencies.'],
  ['📊 Incident Reporting', 'Digital incident logging with root-cause analysis and prevention plans.'],
];

export default function EmergencyResponsePage() {
  const router = useRouter();
  return (
    <>
      <PageHero eyebrow="Service" title="Emergency" highlight="Response Service" subtitle="Rapid, coordinated emergency medical response ensuring every student receives immediate care when seconds count." cta={{ label: 'Set Up Emergency Plan', href: '/book-checkup' }} ctaSecondary={{ label: 'All Services', href: '/services' }} gradient="linear-gradient(160deg, #FFF1F2 0%, #EFF6FF 60%, #F0FDFA 100%)" />

      {/* Original image */}
      <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1.5px solid rgba(239,68,68,0.15)', boxShadow: '0 4px 24px rgba(239,68,68,0.08)', marginBottom: '24px', position: 'relative', height: '360px' }}>
        <Image src="/images/schools/First Aid Demonstration.png" alt="First Aid Demonstration" fill style={{ objectFit: 'cover' }} />
      </div>

      <div style={{ padding: '18px 22px', borderRadius: '14px', background: 'rgba(239,68,68,0.06)', border: '1.5px solid rgba(239,68,68,0.22)', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '20px' }}>🚨</span>
        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#EF4444' }}>Emergency? Call Now</div>
          <a href="tel:+917050140340" style={{ fontSize: '16px', fontWeight: 800, color: '#EF4444', fontFamily: 'monospace' }}>+91 70501 40340</a>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {items.map(([title, desc]) => (
          <div key={title} style={{ padding: '22px', borderRadius: '16px', background: '#FFFFFF', border: '1.5px solid rgba(239,68,68,0.12)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0F2942', marginBottom: '6px' }}>{title}</div>
            <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{desc}</p>
          </div>
        ))}
      </div>
      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #EF4444 0%, #D97706 100%)', padding: '44px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Set Up Your School&apos;s Emergency Plan</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Don&apos;t wait for an emergency to be prepared.</p>
        <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#EF4444', cursor: 'pointer', border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif" }}>Get Emergency Ready →</button>
      </div>
    </>
  );
}
