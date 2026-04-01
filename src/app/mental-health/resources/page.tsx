'use client';
import { useRouter } from 'next/navigation';
import PageHero from '../../components/PageHero';
import Link from 'next/link';

const resourceSections = [
  { title: '🧘 Self-Help Tools', desc: 'Guided meditations, breathing exercises, and journaling prompts', href: '/mental-health/resources/self-help', color: '#2563EB', bg: '#EFF6FF', border: 'rgba(37,99,235,0.15)' },
  { title: '🎓 Educational Materials', desc: 'Articles, videos, and interactive modules on mental health topics', href: '/mental-health/resources/educational', color: '#0D9488', bg: '#F0FDFA', border: 'rgba(20,184,166,0.18)' },
  { title: '🆘 Crisis Support', desc: 'Immediate assistance and 24/7 helpline for mental health emergencies', href: '/mental-health/resources/crisis', color: '#EF4444', bg: '#FFF1F2', border: 'rgba(239,68,68,0.18)' },
  { title: '😴 Sleep & Wellness', desc: 'Techniques for better sleep, nutrition, and physical wellness', href: '/mental-health/resources/self-help', color: '#7C3AED', bg: '#F5F3FF', border: 'rgba(124,58,237,0.15)' },
  { title: '📓 Journaling & Reflection', desc: 'Structured prompts to build emotional self-awareness', href: '/mental-health/resources/self-help', color: '#D97706', bg: '#FFFBEB', border: 'rgba(217,119,6,0.18)' },
  { title: '🎵 Mindful Media', desc: 'Curated playlists, podcasts, and calming visual content', href: '/mental-health/resources/self-help', color: '#16A34A', bg: '#F0FDF4', border: 'rgba(22,163,74,0.15)' },
];

const helplines = [
  { name: 'iCall', number: '9152987821', desc: 'TISS — Free counseling for students' },
  { name: 'Vandrevala Foundation', number: '1860-2662-345', desc: '24/7 Mental health helpline' },
  { name: 'AASRA', number: '9820466627', desc: 'Suicide prevention, 24/7' },
  { name: 'Fortis Stress Helpline', number: '8376804102', desc: 'Free & confidential' },
];

export default function MentalHealthResourcesPage() {
  const router = useRouter();
  return (
    <>
      <PageHero eyebrow="Mental Health Resources" title="Resources for Your" highlight="Mental Wellbeing" subtitle="A curated library of tools, articles, videos, and crisis support — everything you need to take care of your mental health, available anytime, anywhere." cta={{ label: 'Talk to a Counselor', href: '/book-checkup' }} ctaSecondary={{ label: 'Back to Mental Health', href: '/mental-health' }} />

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0F2942', marginBottom: '24px' }}>Explore Resources</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
          {resourceSections.map(r => (
            <Link key={r.title} href={r.href} style={{ textDecoration: 'none' }}>
              <div className="ig-res-card" style={{ padding: '24px', borderRadius: '16px', background: '#FFFFFF', border: `1.5px solid ${r.border}`, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', transition: 'all 0.25s', cursor: 'pointer' }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '15px', fontWeight: 700, color: '#0F2942', marginBottom: '8px' }}>{r.title}</div>
                <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: '0 0 12px' }}>{r.desc}</p>
                <span style={{ fontSize: '12px', fontWeight: 700, color: r.color, fontFamily: "'DM Sans', sans-serif" }}>Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Crisis helplines */}
      <div style={{ padding: '32px', borderRadius: '20px', background: 'linear-gradient(135deg, #FFF1F2, #FFF5F5)', border: '1.5px solid rgba(239,68,68,0.20)', marginBottom: '24px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '100px', background: 'rgba(239,68,68,0.10)', border: '1px solid rgba(239,68,68,0.25)', fontSize: '11px', fontWeight: 700, color: '#EF4444', letterSpacing: '1px', marginBottom: '16px', fontFamily: "'Space Grotesk', sans-serif" }}>
          🚨 CRISIS HELPLINES
        </div>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: 800, color: '#0F2942', marginBottom: '16px' }}>Immediate Help Available</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
          {helplines.map(h => (
            <a key={h.name} href={`tel:${h.number}`} style={{ textDecoration: 'none', padding: '16px', borderRadius: '12px', background: '#FFFFFF', border: '1.5px solid rgba(239,68,68,0.15)', display: 'block' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 800, color: '#0F2942', marginBottom: '2px' }}>{h.name}</div>
              <div style={{ fontFamily: 'monospace', fontSize: '15px', fontWeight: 700, color: '#EF4444', marginBottom: '4px' }}>{h.number}</div>
              <div style={{ fontSize: '11px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif" }}>{h.desc}</div>
            </a>
          ))}
        </div>
      </div>

      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)', padding: '44px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Still Need Help?</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Our mental health professionals are here for you. Don't hesitate to reach out.</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 24px', borderRadius: '10px', fontSize: '14px', fontWeight: 700, color: '#2563EB', cursor: 'pointer', border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif" }}>Book a Consultation</button>
          <button onClick={() => router.push('/chat')} style={{ padding: '13px 20px', borderRadius: '10px', fontSize: '14px', fontWeight: 600, color: '#fff', cursor: 'pointer', border: '2px solid rgba(255,255,255,0.40)', background: 'rgba(255,255,255,0.12)', fontFamily: "'DM Sans', sans-serif" }}>💬 Chat with AIRA</button>
        </div>
      </div>
      <style jsx>{`.ig-res-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(37,99,235,0.10) !important; }`}</style>
    </>
  );
}
