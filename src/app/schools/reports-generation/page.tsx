'use client';
import { useRouter } from 'next/navigation';
import PageHero from '../../components/PageHero';

const reportTypes = [
  { icon: '📊', title: 'Health Summary Report', desc: 'Overall school health status with key metrics and year-on-year trends.' },
  { icon: '📈', title: 'Growth Analysis', desc: 'Grade and gender-wise BMI, height, and weight distribution charts.' },
  { icon: '👁️', title: 'Screening Outcomes', desc: 'Vision, hearing, and dental screening results with referral rates.' },
  { icon: '🧠', title: 'Mental Wellness Report', desc: 'Aggregated mental health index scores and counseling utilization rates.' },
  { icon: '💉', title: 'Immunization Report', desc: 'Vaccination coverage status and pending immunization tracking.' },
  { icon: '📋', title: 'Compliance Report', desc: 'Regulatory health compliance documentation for school boards and government.' },
];

export default function ReportsGenerationPage() {
  const router = useRouter();
  return (
    <>
      <PageHero eyebrow="Schools · Reports" title="Health Reports" highlight="Generation" subtitle="Generate detailed, professional health reports and statistics for your school on demand — ready for board meetings, government submissions, or parent communication." cta={{ label: 'Generate Sample Report', href: '/book-checkup' }} ctaSecondary={{ label: 'All School Features', href: '/schools' }} gradient="linear-gradient(160deg, #EFF6FF 0%, #F5F3FF 60%, #F0FDFA 100%)" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {reportTypes.map(r => (
          <div key={r.title} style={{ padding: '22px', borderRadius: '16px', background: '#FFFFFF', border: '1.5px solid rgba(124,58,237,0.10)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>{r.icon}</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0F2942', marginBottom: '6px' }}>{r.title}</div>
            <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{r.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ padding: '28px', borderRadius: '18px', background: 'linear-gradient(135deg, #F5F3FF, #EFF6FF)', border: '1.5px solid rgba(124,58,237,0.15)', marginBottom: '24px' }}>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', fontWeight: 800, color: '#0F2942', marginBottom: '14px' }}>📤 Export Formats Available</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {['PDF Report', 'Excel Spreadsheet', 'CSV Data', 'PowerPoint Slides', 'Print-Ready Format'].map(f => (
            <span key={f} style={{ padding: '6px 14px', borderRadius: '100px', background: '#FFFFFF', border: '1.5px solid rgba(124,58,237,0.18)', fontSize: '13px', fontWeight: 600, color: '#7C3AED', fontFamily: "'DM Sans', sans-serif" }}>{f}</span>
          ))}
        </div>
      </div>
      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)', padding: '44px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Generate Your First Report</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Professional health reports ready in minutes, not days.</p>
        <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#7C3AED', cursor: 'pointer', border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif" }}>Get Started →</button>
      </div>
    </>
  );
}
