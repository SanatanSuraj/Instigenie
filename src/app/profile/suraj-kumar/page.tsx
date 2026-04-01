'use client';

import Image from 'next/image';
import Link from 'next/link';

const achievements = [
  {
    title: 'Rashtrapati Award',
    description:
      'Honored with the prestigious Rashtrapati Award from The Bharat Scouts and Guides, recognizing outstanding achievements in scouting, youth leadership, and community service.',
    color: '#F59E0B',
    bg: '#FFFBEB',
    border: 'rgba(245,158,11,0.18)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    tags: ['Youth Leadership', 'Scouting', 'Community Service'],
  },
  {
    title: 'Innovation in Healthcare',
    description:
      'Pioneered AI-powered health screening solutions for educational institutions, driving measurable improvements in early detection and student well-being outcomes.',
    color: '#2563EB',
    bg: '#EFF6FF',
    border: 'rgba(37,99,235,0.18)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
      </svg>
    ),
    tags: ['AI Health Screening', 'EdTech', 'InstiGenie'],
  },
  {
    title: 'National Handball Player',
    description:
      'Represented at the national level in handball — an experience that deeply shaped my approach to teamwork, strategic thinking, and high-performance leadership.',
    color: '#16A34A',
    bg: '#F0FDF4',
    border: 'rgba(22,163,74,0.18)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    tags: ['Team Leadership', 'Agility', 'Strategy'],
  },
  {
    title: 'Digital Transformation',
    description:
      'Led end-to-end development of comprehensive digital health management systems, enabling schools to manage student health records securely and efficiently.',
    color: '#0D9488',
    bg: '#F0FDFA',
    border: 'rgba(13,148,136,0.18)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    tags: ['Digital Health', 'Data Security', 'SaaS'],
  },
];

const expertise = [
  { label: 'Healthcare Technology', color: '#2563EB' },
  { label: 'AI & Machine Learning', color: '#0D9488' },
  { label: 'Educational Healthcare', color: '#16A34A' },
  { label: 'Digital Health Solutions', color: '#7C3AED' },
  { label: 'School Health Programs', color: '#F59E0B' },
  { label: 'Healthcare Innovation', color: '#EF4444' },
];

export default function SurajProfile() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#F4F7FB', minHeight: '100vh' }}>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #0F2942 0%, #0D9488 100%)',
        padding: '72px 0 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative blobs */}
        <div style={{ position: 'absolute', top: '-80px', right: '-60px', width: '360px', height: '360px', borderRadius: '50%', background: 'rgba(20,184,166,0.12)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '0', left: '-80px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(37,99,235,0.12)', filter: 'blur(50px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'flex-end' }}>

            {/* Left – Text */}
            <div style={{ paddingBottom: '56px' }}>
              {/* Eyebrow */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '11px', fontWeight: 700, color: '#5EEAD4', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '20px' }}>
                <span style={{ width: '20px', height: '2px', background: '#5EEAD4', borderRadius: '2px', display: 'inline-block' }} />
                Founder Profile
              </div>

              <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, letterSpacing: '-2px', color: '#FFFFFF', margin: '0 0 10px', lineHeight: 1.05 }}>
                Suraj Kumar
              </h1>

              {/* Role pill */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(94,234,212,0.14)', border: '1px solid rgba(94,234,212,0.3)', borderRadius: '24px', padding: '6px 16px', marginBottom: '22px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#5EEAD4', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#5EEAD4', letterSpacing: '1px', textTransform: 'uppercase' }}>Founder & CEO</span>
              </div>

              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.78)', lineHeight: 1.72, marginBottom: '32px', maxWidth: '440px' }}>
                Visionary founder of InstiGenie — leading the revolution in student healthcare through innovative technology, compassionate service, and a passion for accessible health solutions.
              </p>

              {/* CTA buttons */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href="https://www.linkedin.com/in/sanatansuraj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    fontSize: '14px', fontWeight: 700, color: '#FFFFFF',
                    background: '#0077B5',
                    borderRadius: '12px', padding: '12px 22px',
                    textDecoration: 'none',
                    boxShadow: '0 6px 18px rgba(0,119,181,0.35)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  Connect on LinkedIn
                </a>
                <Link
                  href="/book-checkup"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    fontSize: '14px', fontWeight: 700, color: '#0F2942',
                    background: '#FFFFFF',
                    borderRadius: '12px', padding: '12px 22px',
                    textDecoration: 'none',
                    boxShadow: '0 6px 18px rgba(15,41,66,0.15)',
                  }}
                >
                  Book a Checkup →
                </Link>
              </div>
            </div>

            {/* Right – Photo */}
            <div style={{ position: 'relative', height: '420px', borderRadius: '20px 20px 0 0', overflow: 'hidden', boxShadow: '0 -8px 40px rgba(20,184,166,0.18)' }}>
              <Image
                src="/images/profile/suraj_kumar.png"
                alt="Suraj Kumar"
                fill
                className="object-cover"
                style={{ objectPosition: '50% 12%' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Gradient base */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, #0F2942, transparent)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK STATS BAR ─────────────────────────────────────── */}
      <div style={{
        background: '#FFFFFF',
        borderBottom: '1.5px solid rgba(37,99,235,0.07)',
        boxShadow: '0 4px 20px rgba(37,99,235,0.06)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
          {[
            { num: '500+', label: 'Partner Schools' },
            { num: '1.2M+', label: 'Students Served' },
            { num: '5+', label: 'Years of Impact' },
            { num: '4', label: 'Major Awards' },
          ].map((s, i, arr) => (
            <div key={s.label} style={{ padding: '28px 20px', textAlign: 'center', borderRight: i < arr.length - 1 ? '1px solid rgba(37,99,235,0.07)' : 'none' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '28px', fontWeight: 800, background: 'linear-gradient(135deg, #2563EB, #14B8A6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '4px' }}>
                {s.num}
              </div>
              <div style={{ fontSize: '12px', color: '#7A99B4', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CONTENT AREA ────────────────────────────────────────── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '56px 28px' }}>

        {/* Vision & Mission */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 700, color: '#0D9488', letterSpacing: '2.5px', textTransform: 'uppercase' as const, marginBottom: '10px' }}>
            <span style={{ width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px', display: 'inline-block' }} />
            Mission
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, letterSpacing: '-1px', color: '#0F2942', marginBottom: '20px' }}>
            Vision & Mission
          </h2>
          <div style={{ background: '#FFFFFF', borderRadius: '20px', border: '1.5px solid rgba(37,99,235,0.09)', boxShadow: '0 4px 22px rgba(37,99,235,0.06)', padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
            {[
              { icon: '🎯', heading: 'The Goal', text: 'Make quality healthcare accessible to every student in India and beyond, so health never becomes a barrier to learning.' },
              { icon: '🚀', heading: 'The Approach', text: 'Combine cutting-edge AI with compassionate care — building systems that catch problems early and empower schools to act.' },
              { icon: '🌏', heading: 'The Vision', text: 'A future where every school is a safe, healthy environment and every child gets the care they deserve, regardless of location.' },
            ].map((v) => (
              <div key={v.heading}>
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{v.icon}</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', fontWeight: 700, color: '#0F2942', marginBottom: '8px' }}>{v.heading}</div>
                <p style={{ fontSize: '14px', color: '#3D5A73', lineHeight: 1.72, margin: 0 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 700, color: '#0D9488', letterSpacing: '2.5px', textTransform: 'uppercase' as const, marginBottom: '10px' }}>
            <span style={{ width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px', display: 'inline-block' }} />
            Recognition
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, letterSpacing: '-1px', color: '#0F2942', marginBottom: '24px' }}>
            Achievements & Recognition
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {achievements.map((a) => (
              <div
                key={a.title}
                className="ig-ach-card"
                style={{
                  background: a.bg,
                  border: `1.5px solid ${a.border}`,
                  borderRadius: '18px',
                  padding: '26px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                {/* Icon badge */}
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#FFFFFF', border: `1.5px solid ${a.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                  {a.icon}
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', fontWeight: 700, color: '#0F2942' }}>{a.title}</div>
                <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.7, margin: 0 }}>{a.description}</p>
                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
                  {a.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: '11px', fontWeight: 700, color: a.color, background: `${a.color}14`, border: `1px solid ${a.color}28`, borderRadius: '20px', padding: '3px 10px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 700, color: '#0D9488', letterSpacing: '2.5px', textTransform: 'uppercase' as const, marginBottom: '10px' }}>
            <span style={{ width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px', display: 'inline-block' }} />
            Skills
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, letterSpacing: '-1px', color: '#0F2942', marginBottom: '22px' }}>
            Areas of Expertise
          </h2>
          <div style={{ background: '#FFFFFF', border: '1.5px solid rgba(37,99,235,0.09)', borderRadius: '20px', boxShadow: '0 4px 22px rgba(37,99,235,0.06)', padding: '32px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {expertise.map((e) => (
                <span key={e.label} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  fontSize: '13px', fontWeight: 700, color: e.color,
                  background: `${e.color}12`,
                  border: `1.5px solid ${e.color}25`,
                  borderRadius: '24px', padding: '8px 18px',
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: e.color, flexShrink: 0 }} />
                  {e.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA STRIP ───────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #0F2942, #0D9488)', padding: '64px 28px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px', letterSpacing: '-1px' }}>
            Let&apos;s Transform Healthcare Together
          </div>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, marginBottom: '32px' }}>
            Interested in bringing innovative healthcare solutions to your educational institution?
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/book-checkup"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontSize: '14px', fontWeight: 700, color: '#0F2942',
                background: '#FFFFFF',
                borderRadius: '12px', padding: '14px 28px',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
              }}
            >
              Get in Touch →
            </Link>
            <Link
              href="/about"
              style={{
                display: 'inline-flex', alignItems: 'center',
                fontSize: '14px', fontWeight: 700, color: '#5EEAD4',
                background: 'rgba(94,234,212,0.1)',
                border: '1.5px solid rgba(94,234,212,0.3)',
                borderRadius: '12px', padding: '14px 28px',
                textDecoration: 'none',
              }}
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .ig-ach-card { transition: transform 0.25s cubic-bezier(.4,0,.2,1), box-shadow 0.25s cubic-bezier(.4,0,.2,1); }
        .ig-ach-card:hover { transform: translateY(-4px); box-shadow: 0 14px 32px rgba(37,99,235,0.10); }
      `}</style>
    </div>
  );
}
