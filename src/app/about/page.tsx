'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHero from '../components/PageHero';

/** Set to true to show the Team / Our Leadership block on the about page. */
const SHOW_TEAM_LEADERSHIP_SECTION = false;

const team = [
  {
    name: 'Suraj Kumar',
    role: 'Founder & CEO',
    image: '/images/profile/suraj_kumar.png',
    bio: 'Visionary founder of InstiGenie, leading the revolution in student healthcare through innovative technology and compassionate service.',
    linkedin: 'https://www.linkedin.com/in/sanatansuraj/',
    showProfile: true,
    avatarFrom: '#2563EB', avatarTo: '#14B8A6',
  },
  {
    name: 'Rakhi Devi',
    role: 'Director',
    image: '/images/profile/rakhi_devi.png',
    bio: 'As a mother deeply invested in student well-being, Rakhi brings valuable perspective to InstiGenie, advocating for accessible healthcare solutions that benefit every child.',
    showProfile: false,
    avatarFrom: '#14B8A6', avatarTo: '#22C55E',
  },
];

const stats = [
  { num: '500+', label: 'Partner Schools' },
  { num: '1.2M+', label: 'Students Served' },
  { num: '98%', label: 'Satisfaction Rate' },
  { num: '24/7', label: 'AI Support' },
];

const values = [
  { icon: '❤️', title: 'Compassionate Care', desc: 'Every decision we make is grounded in genuine concern for student well-being and long-term health outcomes.', color: '#EF4444', bg: '#FFF1F2', border: 'rgba(239,68,68,0.15)' },
  { icon: '🔬', title: 'Evidence-Based', desc: 'Our protocols are built on the latest medical research and continuously updated with clinical feedback.', color: '#2563EB', bg: '#EFF6FF', border: 'rgba(37,99,235,0.15)' },
  { icon: '🌱', title: 'Preventive First', desc: 'We believe in catching problems early — our AI systems are designed to identify trends before they become issues.', color: '#16A34A', bg: '#F0FDF4', border: 'rgba(34,197,94,0.15)' },
  { icon: '🔒', title: 'Privacy & Trust', desc: 'Student health data is sacred. We maintain the highest security standards and are fully HIPAA & DPDP compliant.', color: '#0D9488', bg: '#F0FDFA', border: 'rgba(20,184,166,0.15)' },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Empowering"
        highlight="School Healthcare"
        subtitle="Pioneering a new era of student well-being through innovative health solutions, personalized care, and cutting-edge AI technology — built in India, used by the world."
        cta={{ label: 'Get Started', href: '/book-checkup' }}
        ctaSecondary={{ label: 'Our Services', href: '/services' }}
      />

      {/* Mission + Image */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          marginBottom: '48px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            borderRadius: '18px',
            border: '1.5px solid rgba(37,99,235,0.10)',
            background: '#FFFFFF',
            padding: '36px',
            boxShadow: '0 2px 14px rgba(0,0,0,0.04)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 600, color: '#0D9488', letterSpacing: '2px', textTransform: 'uppercase' as const, marginBottom: '14px', fontFamily: "'DM Sans', sans-serif" }}>
            <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px' }} />
            Our Mission
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, letterSpacing: '-1px', color: '#0F2942', marginBottom: '16px' }}>
            Healthy Students, Better Learners
          </h2>
          <p style={{ fontSize: '15px', color: '#3D5A73', lineHeight: 1.72, fontFamily: "'DM Sans', sans-serif", marginBottom: '14px' }}>
            At InstiGenie, we are committed to providing comprehensive healthcare solutions that enhance the well-being of students and support their academic success.
          </p>
          <p style={{ fontSize: '15px', color: '#3D5A73', lineHeight: 1.72, fontFamily: "'DM Sans', sans-serif" }}>
            We believe that healthy students are better learners, and our mission is to create healthier school communities through preventive care, education, and accessible healthcare services.
          </p>
          {/* Mission quote */}
          <div style={{ marginTop: '24px', padding: '18px 20px', borderRadius: '12px', background: 'linear-gradient(135deg, #EFF6FF, #F0FDFA)', border: '1.5px solid rgba(20,184,166,0.18)', borderLeft: '4px solid #14B8A6' }}>
            <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#0F2942', lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>
              &ldquo;Our mission is to create healthier learning environments where every student can thrive.&rdquo;
            </p>
          </div>
        </div>
        <div style={{ borderRadius: '18px', overflow: 'hidden', height: '380px', position: 'relative', boxShadow: '0 8px 32px rgba(37,99,235,0.12)' }}>
          <Image src="/images/schools/School Health Checkup.png" alt="School Health Checkup" fill className="object-cover" />
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 0,
          borderRadius: '18px',
          overflow: 'hidden',
          border: '1.5px solid rgba(37,99,235,0.10)',
          background: '#FFFFFF',
          marginBottom: '48px',
          boxShadow: '0 4px 20px rgba(37,99,235,0.08)',
        }}
      >
        {stats.map((stat, i, arr) => (
          <div key={stat.label} style={{ padding: '32px 24px', textAlign: 'center', borderRight: i < arr.length - 1 ? '1px solid rgba(37,99,235,0.08)' : 'none' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '32px', fontWeight: 800, background: 'linear-gradient(135deg, #2563EB, #14B8A6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '6px' }}>
              {stat.num}
            </div>
            <div style={{ fontSize: '13px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Values */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 600, color: '#0D9488', letterSpacing: '2px', textTransform: 'uppercase' as const, marginBottom: '14px', fontFamily: "'DM Sans', sans-serif" }}>
          <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px' }} />
          Our Values
        </div>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800, letterSpacing: '-1px', color: '#0F2942', marginBottom: '28px' }}>
          What Drives Us
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {values.map((v) => (
            <div key={v.title} style={{ padding: '24px', borderRadius: '16px', border: `1.5px solid ${v.border}`, background: v.bg, transition: 'all 0.25s' }} className="ig-val-card">
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#FFFFFF', border: `1.5px solid ${v.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', marginBottom: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>{v.icon}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '15px', fontWeight: 700, color: '#0F2942', marginBottom: '7px' }}>{v.title}</div>
              <div style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif" }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {SHOW_TEAM_LEADERSHIP_SECTION && (
      <div style={{ marginBottom: '56px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 700, color: '#0D9488', letterSpacing: '2.5px', textTransform: 'uppercase' as const, marginBottom: '12px', fontFamily: "'DM Sans', sans-serif" }}>
            <span style={{ display: 'inline-block', width: '24px', height: '2px', background: 'linear-gradient(90deg,#14B8A6,#2563EB)', borderRadius: '2px' }} />
            The Team
            <span style={{ display: 'inline-block', width: '24px', height: '2px', background: 'linear-gradient(90deg,#2563EB,#14B8A6)', borderRadius: '2px' }} />
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#0F2942', margin: '0 0 10px' }}>
            Our Leadership
          </h2>
          <p style={{ fontSize: '15px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif", maxWidth: '460px', margin: '0 auto', lineHeight: 1.6 }}>
            Passionate people building a healthier future for every student.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', justifyItems: 'center' }}>
          {team.map((member) => (
            <div
              key={member.name}
              className="ig-leader-card"
              style={{
                width: '100%',
                maxWidth: '400px',
                borderRadius: '22px',
                border: '1.5px solid rgba(37,99,235,0.10)',
                background: '#FFFFFF',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(37,99,235,0.07)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', height: '260px', background: `linear-gradient(135deg, ${member.avatarFrom}22, ${member.avatarTo}22)`, overflow: 'hidden' }}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: '50% 12%' }}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to top, #FFFFFF, transparent)' }} />
              </div>

              <div style={{ padding: '20px 28px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: 800, color: '#0F2942', letterSpacing: '-0.5px' }}>
                    {member.name}
                  </div>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '5px',
                    fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' as const,
                    color: member.avatarFrom,
                    background: `${member.avatarFrom}15`,
                    border: `1px solid ${member.avatarFrom}30`,
                    borderRadius: '20px', padding: '4px 12px',
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: member.avatarFrom, flexShrink: 0 }} />
                    {member.role}
                  </div>
                </div>

                <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(37,99,235,0.12), transparent)', marginBottom: '14px' }} />

                <p style={{ fontSize: '14px', color: '#3D5A73', lineHeight: 1.72, fontFamily: "'DM Sans', sans-serif", marginBottom: '20px', flex: 1 }}>
                  {member.bio}
                </p>

                {member.showProfile && (
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <Link
                      href="/profile/suraj-kumar"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        fontSize: '13px', fontWeight: 700, fontFamily: "'DM Sans', sans-serif",
                        color: '#FFFFFF',
                        background: 'linear-gradient(135deg, #2563EB, #14B8A6)',
                        borderRadius: '10px', padding: '9px 18px',
                        textDecoration: 'none',
                        boxShadow: '0 4px 14px rgba(37,99,235,0.22)',
                        transition: 'opacity 0.2s',
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                      View Profile
                    </Link>

                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '6px',
                          fontSize: '13px', fontWeight: 700, fontFamily: "'DM Sans', sans-serif",
                          color: '#2563EB',
                          background: '#EFF6FF',
                          border: '1.5px solid rgba(37,99,235,0.18)',
                          borderRadius: '10px', padding: '9px 18px',
                          textDecoration: 'none',
                          transition: 'background 0.2s',
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                        LinkedIn
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      )}

      <style jsx>{`
        .ig-val-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(37,99,235,0.09); }
        .ig-leader-card { transition: transform 0.25s cubic-bezier(.4,0,.2,1), box-shadow 0.25s cubic-bezier(.4,0,.2,1); }
        .ig-leader-card:hover { transform: translateY(-5px); box-shadow: 0 18px 40px rgba(37,99,235,0.14); }
      `}</style>
    </>
  );
}
