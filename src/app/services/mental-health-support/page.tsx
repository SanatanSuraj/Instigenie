'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PageHero from '../../components/PageHero';

const items = [
  ['🧠 Individual Therapy', 'Confidential one-on-one sessions with licensed counselors.'],
  ['👥 Group Sessions', 'Facilitated peer support groups for common challenges.'],
  ['🤖 AI Screening', 'Early detection using our validated mental health AI.'],
  ['👨‍👩‍👦 Parent Guidance', 'Monthly consultation sessions to empower parents.'],
  ['📚 Psychoeducation', 'Workshops on anxiety, depression, stress, and relationships.'],
  ['🆘 Crisis Response', '24/7 emergency support and immediate intervention.'],
];

export default function MentalHealthServicePage() {
  const router = useRouter();
  return (
    <>
      <PageHero eyebrow="Service" title="Mental Health" highlight="Support Service" subtitle="Comprehensive emotional and psychological support for students using a multi-tiered approach — from prevention to crisis intervention." cta={{ label: 'Book Support', href: '/book-checkup' }} ctaSecondary={{ label: 'All Services', href: '/services' }} gradient="linear-gradient(160deg, #F5F3FF 0%, #EFF6FF 60%, #F0FDFA 100%)" />

      {/* Original image */}
      <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1.5px solid rgba(124,58,237,0.12)', boxShadow: '0 4px 24px rgba(124,58,237,0.08)', marginBottom: '48px', position: 'relative', height: '360px' }}>
        <Image src="/images/services/Supportive Counseling.png" alt="Supportive Counseling" fill style={{ objectFit: 'cover' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {items.map(([title, desc]) => (
          <div key={title} style={{ padding: '22px', borderRadius: '16px', background: '#FFFFFF', border: '1.5px solid rgba(124,58,237,0.10)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0F2942', marginBottom: '6px' }}>{title}</div>
            <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{desc}</p>
          </div>
        ))}
      </div>
      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)', padding: '44px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Access Mental Health Support</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Every student deserves mental health support. Start today.</p>
        <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#7C3AED', cursor: 'pointer', border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif" }}>Book Consultation →</button>
      </div>
    </>
  );
}
