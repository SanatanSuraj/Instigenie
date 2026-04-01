'use client';
import { useRouter } from 'next/navigation';
import PageHero from '../../components/PageHero';

const metrics = [
  { icon: '📈', title: 'BMI Trends', desc: 'School-wide and grade-level BMI distribution tracked over time.' },
  { icon: '👁️', title: 'Vision Stats', desc: 'Vision impairment prevalence and screening outcomes by class.' },
  { icon: '🧠', title: 'Mental Health Index', desc: 'Aggregated mental wellness scores with trend analysis.' },
  { icon: '💉', title: 'Vaccination Coverage', desc: 'Real-time immunization coverage rates across the school.' },
  { icon: '🦷', title: 'Dental Health', desc: 'Cavity prevalence and oral health score distribution.' },
  { icon: '⚠️', title: 'Risk Alerts', desc: 'Proactive alerts when health metrics fall below safe thresholds.' },
];

export default function AnalyticsDashboardPage() {
  const router = useRouter();
  return (
    <>
      <PageHero eyebrow="Schools · Analytics" title="Health Analytics" highlight="Dashboard" subtitle="Comprehensive real-time health analytics and insights for school administrators — helping you make data-driven decisions for student health." cta={{ label: 'Request Demo', href: '/book-checkup' }} ctaSecondary={{ label: 'All School Features', href: '/schools' }} gradient="linear-gradient(160deg, #EFF6FF 0%, #F0F9FF 60%, #F0FDFA 100%)" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {metrics.map(m => (
          <div key={m.title} style={{ padding: '22px', borderRadius: '16px', background: '#FFFFFF', border: '1.5px solid rgba(2,132,199,0.12)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>{m.icon}</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0F2942', marginBottom: '6px' }}>{m.title}</div>
            <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{m.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #0284C7 0%, #7C3AED 100%)', padding: '44px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>See Your School&apos;s Health Data</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Request a personalized analytics dashboard demo today.</p>
        <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#0284C7', cursor: 'pointer', border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif" }}>Request Demo →</button>
      </div>
    </>
  );
}
