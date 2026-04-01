'use client';
import { useRouter } from 'next/navigation';
import PageHero from '../../components/PageHero';

const features = [
  ['📅 Smart Scheduling', 'AI-powered schedule creation that optimizes doctor time and minimizes class disruption.'],
  ['🔔 Auto Reminders', 'Automated SMS and email reminders to parents 48 hours before each checkup.'],
  ['📊 Capacity Planning', 'Real-time view of screening capacity vs. student load across all schools.'],
  ['🔄 Rescheduling', 'Easy drag-and-drop rescheduling with automatic stakeholder notifications.'],
  ['📱 Mobile App', 'School nurse mobile app for real-time schedule updates and student check-in.'],
  ['📈 Utilization Reports', 'Monthly reports on scheduling efficiency and missed appointment rates.'],
];

export default function ScheduleManagementPage() {
  const router = useRouter();
  return (
    <>
      <PageHero eyebrow="Schools · Schedule Management" title="Smart Schedule" highlight="Management" subtitle="Efficiently plan and manage health check-ups and wellness programs across your school with our AI-powered scheduling tools." cta={{ label: 'Get Demo', href: '/book-checkup' }} ctaSecondary={{ label: 'All School Features', href: '/schools' }} gradient="linear-gradient(160deg, #EFF6FF 0%, #F0FDFA 100%)" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {features.map(([title, desc]) => (
          <div key={title} style={{ padding: '22px', borderRadius: '16px', background: '#FFFFFF', border: '1.5px solid rgba(13,148,136,0.12)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0F2942', marginBottom: '6px' }}>{title}</div>
            <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{desc}</p>
          </div>
        ))}
      </div>
      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #0D9488 0%, #2563EB 100%)', padding: '44px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Streamline Your Scheduling</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Save hours every week with intelligent scheduling automation.</p>
        <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#0D9488', cursor: 'pointer', border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif" }}>Get Demo →</button>
      </div>
    </>
  );
}
