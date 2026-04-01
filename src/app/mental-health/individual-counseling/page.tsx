'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PageHero from '../../components/PageHero';

const benefits = [
  'Personalized treatment plans tailored to your needs',
  'Safe, confidential and judgment-free environment',
  'Evidence-based therapeutic approaches',
  'Regular progress monitoring and goal setting',
  'Flexible scheduling to fit school routines',
  'Expert mental health professionals on staff',
];

const approaches = [
  { icon: '🧠', title: 'Cognitive Behavioral Therapy', desc: 'Helps identify and change negative thought patterns and behaviors.' },
  { icon: '🌊', title: 'Mindfulness-Based Therapy', desc: 'Teaches present-moment awareness and stress-reduction techniques.' },
  { icon: '💬', title: 'Talk Therapy', desc: 'Open conversations to process emotions, experiences, and challenges.' },
  { icon: '🎨', title: 'Expressive Arts Therapy', desc: 'Uses art, music, or writing to explore feelings in a creative space.' },
];

export default function IndividualCounselingPage() {
  const router = useRouter();
  return (
    <>
      <PageHero eyebrow="Individual Counseling" title="One-on-One" highlight="Counseling Sessions" subtitle="Safe, confidential, and personalized mental health support with qualified professionals. Every session is tailored to you." cta={{ label: 'Schedule a Session', href: '/book-checkup' }} ctaSecondary={{ label: 'All Mental Health Services', href: '/mental-health' }} gradient="linear-gradient(160deg, #F0FDFA 0%, #EFF6FF 60%, #F5F3FF 100%)" />

      {/* Original image */}
      <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1.5px solid rgba(124,58,237,0.12)', boxShadow: '0 4px 24px rgba(124,58,237,0.08)', marginBottom: '48px', position: 'relative', height: '360px' }}>
        <Image src="/images/services/Supportive Counseling.png" alt="Supportive Counseling" fill style={{ objectFit: 'cover' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: '#0F2942', marginBottom: '20px', letterSpacing: '-0.5px' }}>Personalized Support for Every Student</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {benefits.map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#3D5A73', fontFamily: "'DM Sans', sans-serif" }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(20,184,166,0.12)', border: '1px solid rgba(20,184,166,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                {b}
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: '32px', borderRadius: '20px', background: 'linear-gradient(135deg, #F0FDFA, #EFF6FF)', border: '1.5px solid rgba(20,184,166,0.18)' }}>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: 800, color: '#0F2942', marginBottom: '20px' }}>Session Details</h3>
          {[['⏱️ Duration', '45–60 minutes per session'], ['📅 Frequency', 'Weekly or bi-weekly'], ['🔒 Confidentiality', 'Fully private and secure'], ['💳 Cost', 'Covered under school plan'], ['🎯 Focus Areas', 'Anxiety, stress, relationships, academics']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', gap: '10px', padding: '10px 0', borderBottom: '1px solid rgba(20,184,166,0.10)', fontSize: '13px', fontFamily: "'DM Sans', sans-serif" }}>
              <span style={{ fontWeight: 700, color: '#0F2942', minWidth: '120px' }}>{k}</span>
              <span style={{ color: '#3D5A73' }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: '#0F2942', marginBottom: '24px', letterSpacing: '-0.5px' }}>Therapeutic Approaches We Use</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '14px' }}>
          {approaches.map(a => (
            <div key={a.title} style={{ padding: '24px', borderRadius: '16px', background: '#FFFFFF', border: '1.5px solid rgba(124,58,237,0.10)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: '26px', marginBottom: '10px' }}>{a.icon}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0F2942', marginBottom: '6px' }}>{a.title}</div>
              <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)', padding: '44px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Ready to Start Your Journey?</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Schedule your first confidential counseling session today.</p>
        <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#7C3AED', cursor: 'pointer', border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif" }}>Schedule Session →</button>
      </div>
    </>
  );
}
