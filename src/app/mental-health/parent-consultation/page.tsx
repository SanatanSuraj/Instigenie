'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PageHero from '../../components/PageHero';

const sessions = [
  { icon: '📊', title: 'Wellness Update', desc: 'Monthly summary of your child\'s mental health progress and key observations.' },
  { icon: '💬', title: 'Open Q&A', desc: 'Space for parents to ask questions, express concerns, and get expert guidance.' },
  { icon: '🏠', title: 'Home Strategies', desc: 'Practical, actionable techniques parents can use to support their child at home.' },
  { icon: '📚', title: 'Psychoeducation', desc: 'Understanding your child\'s diagnosis, triggers, and how to respond effectively.' },
  { icon: '🎯', title: 'Goal Alignment', desc: 'Aligning school-based therapy goals with family expectations and values.' },
  { icon: '🤝', title: 'Collaborative Planning', desc: 'Co-creating the support plan between parents, counselors, and teachers.' },
];

export default function ParentConsultationPage() {
  const router = useRouter();
  return (
    <>
      <PageHero eyebrow="Parent Consultation" title="Parent Guidance &" highlight="Consultation" subtitle="Regular updates and expert guidance for parents to actively support their child's mental wellbeing at home and strengthen the school-family partnership." cta={{ label: 'Book Consultation', href: '/book-checkup' }} ctaSecondary={{ label: 'All Mental Health Services', href: '/mental-health' }} gradient="linear-gradient(160deg, #F0FDF4 0%, #EFF6FF 60%, #F0FDFA 100%)" />

      {/* Original image */}
      <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1.5px solid rgba(22,163,74,0.15)', boxShadow: '0 4px 24px rgba(22,163,74,0.08)', marginBottom: '48px', position: 'relative', height: '360px' }}>
        <Image src="/images/services/Virtual Healthcare Consultation.png" alt="Virtual Healthcare Consultation" fill style={{ objectFit: 'cover' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {[{ num: '45 min', l: 'Per Session', c: '#16A34A' }, { num: 'Monthly', l: 'Check-ins', c: '#2563EB' }, { num: '100%', l: 'Private', c: '#0D9488' }, { num: '24hr', l: 'Report Turnaround', c: '#7C3AED' }].map(b => (
          <div key={b.l} style={{ padding: '20px', borderRadius: '14px', background: '#FFFFFF', border: '1.5px solid rgba(37,99,235,0.10)', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 800, color: b.c, marginBottom: '4px' }}>{b.num}</div>
            <div style={{ fontSize: '12px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif" }}>{b.l}</div>
          </div>
        ))}
      </div>

      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0F2942', marginBottom: '24px' }}>What Each Consultation Covers</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {sessions.map(s => (
          <div key={s.title} style={{ padding: '22px', borderRadius: '16px', background: '#FFFFFF', border: '1.5px solid rgba(22,163,74,0.12)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>{s.icon}</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0F2942', marginBottom: '6px' }}>{s.title}</div>
            <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{s.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #16A34A 0%, #0D9488 100%)', padding: '44px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Book a Parent Consultation</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Partner with our counselors to give your child the best mental health support.</p>
        <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#16A34A', cursor: 'pointer', border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif" }}>Book Now →</button>
      </div>
    </>
  );
}
