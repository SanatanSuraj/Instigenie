'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PageHero from '../../components/PageHero';

const groups = [
  { icon: '😰', title: 'Stress & Anxiety', desc: 'Shared strategies for managing exam stress, social anxiety, and daily pressures.' },
  { icon: '😔', title: 'Depression Support', desc: 'A safe circle for students dealing with low mood, hopelessness, or isolation.' },
  { icon: '🤝', title: 'Social Skills', desc: 'Building confidence, communication, and meaningful peer relationships.' },
  { icon: '🏠', title: 'Family Issues', desc: 'Processing difficult family dynamics, changes, and home stress together.' },
  { icon: '📚', title: 'Academic Pressure', desc: 'Peer support for performance anxiety, procrastination, and burnout.' },
  { icon: '🌈', title: 'Identity & Self-Esteem', desc: 'Exploring self-worth, identity, and building authentic confidence.' },
];

export default function GroupSupportPage() {
  const router = useRouter();
  return (
    <>
      <PageHero eyebrow="Group Support" title="Group Support" highlight="Sessions" subtitle="Facilitated group discussions providing peer support, shared learning, and a sense of community. You are not alone in what you're going through." cta={{ label: 'Join a Group', href: '/book-checkup' }} ctaSecondary={{ label: 'All Mental Health Services', href: '/mental-health' }} gradient="linear-gradient(160deg, #EFF6FF 0%, #F0FDFA 60%, #F0FDF4 100%)" />

      {/* Original image */}
      <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1.5px solid rgba(37,99,235,0.10)', boxShadow: '0 4px 24px rgba(37,99,235,0.08)', marginBottom: '48px', position: 'relative', height: '360px' }}>
        <Image src="/images/services/Interactive Health Lesson.png" alt="Interactive Health Lesson" fill style={{ objectFit: 'cover' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {[{ num: '8–12', l: 'Students Per Group', c: '#2563EB' }, { num: '60 min', l: 'Per Session', c: '#0D9488' }, { num: 'Weekly', l: 'Session Frequency', c: '#22C55E' }, { num: '100%', l: 'Confidential', c: '#7C3AED' }].map(b => (
          <div key={b.l} style={{ padding: '20px', borderRadius: '14px', background: '#FFFFFF', border: '1.5px solid rgba(37,99,235,0.10)', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 800, color: b.c, marginBottom: '4px' }}>{b.num}</div>
            <div style={{ fontSize: '12px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif" }}>{b.l}</div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0F2942', marginBottom: '24px' }}>Available Support Groups</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
          {groups.map(g => (
            <div key={g.title} style={{ padding: '22px', borderRadius: '16px', background: '#FFFFFF', border: '1.5px solid rgba(37,99,235,0.09)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>{g.icon}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0F2942', marginBottom: '6px' }}>{g.title}</div>
              <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{g.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #2563EB 0%, #22C55E 100%)', padding: '44px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Find Your Support Group</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Join a safe, guided group session and start feeling less alone today.</p>
        <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#2563EB', cursor: 'pointer', border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif" }}>Join a Group →</button>
      </div>
    </>
  );
}
