'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PageHero from '../../components/PageHero';

const howItWorks = [
  { icon: '📱', title: 'Digital Intake', desc: 'Complete a brief, structured mental health questionnaire on any device.' },
  { icon: '🤖', title: 'AI Analysis', desc: 'Our advanced AI analyzes responses against validated clinical benchmarks.' },
  { icon: '📊', title: 'Risk Scoring', desc: 'Each student receives a confidential wellness score across key domains.' },
  { icon: '🏥', title: 'Referral', desc: 'High-risk students are flagged for immediate professional intervention.' },
  { icon: '📈', title: 'Progress Tracking', desc: 'Reassessments every 3 months to track longitudinal trends.' },
  { icon: '👨‍👩‍👦', title: 'Parent Report', desc: 'Summarized, actionable reports shared with parents and school counselors.' },
];

const domains = ['Anxiety & Stress', 'Depressive Symptoms', 'Social Isolation', 'Sleep Quality', 'Academic Pressure', 'Self-Esteem', 'Substance Risk', 'Behavioral Concerns'];

export default function AIAssessmentPage() {
  const router = useRouter();
  return (
    <>
      <PageHero eyebrow="AI Assessment" title="AI-Powered Mental" highlight="Health Assessment" subtitle="Early detection of potential mental health concerns using advanced artificial intelligence and validated clinical tools — identifying risk before it becomes a crisis." cta={{ label: 'Start Assessment', href: '/book-checkup' }} ctaSecondary={{ label: 'All Mental Health Services', href: '/mental-health' }} gradient="linear-gradient(160deg, #EFF6FF 0%, #F5F3FF 60%, #F0FDFA 100%)" />

      {/* Original image */}
      <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1.5px solid rgba(124,58,237,0.12)', boxShadow: '0 4px 24px rgba(124,58,237,0.08)', marginBottom: '48px', position: 'relative', height: '360px' }}>
        <Image src="/images/services/health screening.png" alt="Health Screening" fill style={{ objectFit: 'cover' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {[{ num: '94%', l: 'Accuracy Rate', c: '#2563EB' }, { num: '8 domains', l: 'Assessed', c: '#7C3AED' }, { num: '15 min', l: 'To Complete', c: '#0D9488' }, { num: 'HIPAA', l: 'Compliant', c: '#22C55E' }].map(b => (
          <div key={b.l} style={{ padding: '20px', borderRadius: '14px', background: '#FFFFFF', border: '1.5px solid rgba(37,99,235,0.10)', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 800, color: b.c, marginBottom: '4px' }}>{b.num}</div>
            <div style={{ fontSize: '12px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif" }}>{b.l}</div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0F2942', marginBottom: '24px' }}>How It Works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
          {howItWorks.map((s, i) => (
            <div key={s.title} style={{ padding: '22px', borderRadius: '16px', background: '#FFFFFF', border: '1.5px solid rgba(124,58,237,0.09)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #7C3AED, #2563EB)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800, color: '#fff', fontFamily: "'Space Grotesk', sans-serif", flexShrink: 0 }}>{i + 1}</div>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', fontWeight: 700, color: '#0F2942', marginBottom: '4px' }}>{s.icon} {s.title}</div>
                <p style={{ fontSize: '12px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '32px', borderRadius: '20px', background: 'linear-gradient(135deg, #F5F3FF, #EFF6FF)', border: '1.5px solid rgba(124,58,237,0.15)', marginBottom: '24px' }}>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: 800, color: '#0F2942', marginBottom: '18px' }}>Domains We Assess</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {domains.map(d => (
            <span key={d} style={{ padding: '6px 14px', borderRadius: '100px', background: '#FFFFFF', border: '1.5px solid rgba(124,58,237,0.18)', fontSize: '13px', fontWeight: 600, color: '#7C3AED', fontFamily: "'DM Sans', sans-serif" }}>{d}</span>
          ))}
        </div>
      </div>

      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)', padding: '44px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Start AI Mental Health Assessment</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Early detection saves lives. Book your assessment today.</p>
        <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#7C3AED', cursor: 'pointer', border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif" }}>Get Started →</button>
      </div>
    </>
  );
}
