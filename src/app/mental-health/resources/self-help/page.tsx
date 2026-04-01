'use client';
import { useRouter } from 'next/navigation';
import PageHero from '../../../components/PageHero';
import Link from 'next/link';

const TPATH = (slug: string) => `/mental-health/resources/self-help/${slug}`;

const tools = [
  { icon: '🧘', title: 'Guided Meditation', desc: '5–20 minute audio sessions for anxiety relief, focus, and sleep.', href: TPATH('guided-meditation'), color: '#7C3AED', bg: '#F5F3FF', border: 'rgba(124,58,237,0.15)' },
  { icon: '📊', title: 'Mood Tracking', desc: 'Daily mood logging with insights and trend analysis over time.', href: TPATH('mood-tracking'), color: '#2563EB', bg: '#EFF6FF', border: 'rgba(37,99,235,0.15)' },
  { icon: '🌬️', title: 'Stress Management', desc: 'Box breathing, progressive muscle relaxation, and grounding exercises.', href: TPATH('stress-management'), color: '#0D9488', bg: '#F0FDFA', border: 'rgba(20,184,166,0.18)' },
  { icon: '📓', title: 'Journaling Prompts', desc: 'Structured prompts to build emotional self-awareness and gratitude.', href: TPATH('guided-meditation'), color: '#D97706', bg: '#FFFBEB', border: 'rgba(217,119,6,0.18)' },
];

export default function SelfHelpPage() {
  const router = useRouter();
  return (
    <>
      <PageHero eyebrow="Self-Help Tools" title="Tools for Your" highlight="Mental Wellness" subtitle="A curated set of evidence-based tools to help you manage stress, track your mood, and build lasting mental wellness habits — at your own pace." cta={{ label: 'Talk to a Counselor', href: '/book-checkup' }} ctaSecondary={{ label: 'All Resources', href: '/mental-health/resources' }} gradient="linear-gradient(160deg, #F5F3FF 0%, #EFF6FF 60%, #F0FDFA 100%)" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {tools.map(t => (
          <Link key={t.title} href={t.href} style={{ textDecoration: 'none' }}>
            <div className="ig-tool-card" style={{ padding: '26px', borderRadius: '16px', background: '#FFFFFF', border: `1.5px solid ${t.border}`, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', transition: 'all 0.25s', height: '100%' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: t.bg, border: `1.5px solid ${t.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '14px' }}>{t.icon}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '15px', fontWeight: 700, color: '#0F2942', marginBottom: '7px' }}>{t.title}</div>
              <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", marginBottom: '12px' }}>{t.desc}</p>
              <span style={{ fontSize: '13px', fontWeight: 700, color: t.color, fontFamily: "'DM Sans', sans-serif" }}>Explore →</span>
            </div>
          </Link>
        ))}
      </div>
      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)', padding: '40px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Need More Than Self-Help?</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '22px', fontFamily: "'DM Sans', sans-serif" }}>Our counselors are here when you need personal, professional support.</p>
        <button onClick={() => router.push('/book-checkup')} style={{ padding: '12px 24px', borderRadius: '10px', fontSize: '14px', fontWeight: 700, color: '#7C3AED', cursor: 'pointer', border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif" }}>Book a Session →</button>
      </div>
      <style jsx>{`.ig-tool-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(37,99,235,0.10) !important; }`}</style>
    </>
  );
}
