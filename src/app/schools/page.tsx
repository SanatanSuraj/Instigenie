'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PageHero from '../components/PageHero';

const features = [
  { title: 'Health Records', desc: 'Secure digital storage of student health records with easy access and updates.', href: '/schools/health-records', icon: '📋', color: '#2563EB', bg: '#EFF6FF', border: 'rgba(37,99,235,0.15)' },
  { title: 'Schedule Management', desc: 'Efficiently plan and manage health check-ups and wellness programs for your school.', href: '/schools/schedule-management', icon: '📅', color: '#0D9488', bg: '#F0FDFA', border: 'rgba(20,184,166,0.18)' },
  { title: 'Analytics Dashboard', desc: 'Comprehensive health analytics and real-time insights for administrators.', href: '/schools/analytics-dashboard', icon: '📊', color: '#0284C7', bg: '#F0F9FF', border: 'rgba(56,189,248,0.18)' },
  { title: 'Parent Portal', desc: "Dedicated access for parents to view their child's health records and updates.", href: '/schools/parent-portal', icon: '👨‍👩‍👦', color: '#16A34A', bg: '#F0FDF4', border: 'rgba(34,197,94,0.18)' },
  { title: 'Emergency Protocols', desc: 'Quick access to emergency procedures and instant contact information for staff.', href: '/schools/emergency-protocols', icon: '🚨', color: '#D97706', bg: '#FFFBEB', border: 'rgba(245,158,11,0.20)' },
  { title: 'Reports Generation', desc: 'Generate detailed health reports and statistics for your school on demand.', href: '/schools/reports-generation', icon: '📈', color: '#7C3AED', bg: '#F5F3FF', border: 'rgba(124,58,237,0.15)' },
];

const steps = [
  { num: '1', title: 'Register', desc: 'Complete the school registration form with your institution details.' },
  { num: '2', title: 'Verify', desc: "Verify your school's credentials and documentation with our team." },
  { num: '3', title: 'Setup', desc: 'Configure your portal, import student data, and customize settings.' },
  { num: '4', title: 'Launch', desc: "Go live and start managing your school's health programs effortlessly." },
];

export default function SchoolsPage() {
  const router = useRouter();

  return (
    <>
      <PageHero
        eyebrow="For Schools"
        title="Comprehensive School"
        highlight="Health Management"
        subtitle="Transform your school's healthcare system with our integrated digital solutions. Streamline health records, scheduling, and emergency protocols — all in one intuitive platform."
        cta={{ label: 'Schedule Demo', href: '/book-checkup' }}
        ctaSecondary={{ label: 'View Pricing', href: '/pricing' }}
      />

      {/* Image mosaic */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
          borderRadius: '18px',
          overflow: 'hidden',
          marginBottom: '48px',
          height: '260px',
        }}
      >
        {[
          '/images/schools/School Health Checkup.png',
          '/images/schools/Digital Vision Screening.png',
          '/images/schools/School Dental Checkup.png',
          '/images/schools/Indian Health Education Class.png',
        ].map((src, i) => (
          <div key={i} style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
            <Image src={src} alt={`School health ${i + 1}`} fill className="object-cover" style={{ transition: 'transform 0.3s' }} sizes="25vw" />
          </div>
        ))}
      </div>

      {/* Features grid */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 600, color: '#0D9488', letterSpacing: '2px', textTransform: 'uppercase' as const, marginBottom: '14px', fontFamily: "'DM Sans', sans-serif" }}>
          <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px' }} />
          Platform Features
        </div>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800, letterSpacing: '-1px', color: '#0F2942', marginBottom: '28px' }}>
          Everything You Need for School Healthcare
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          {features.map((f) => (
            <Link key={f.title} href={f.href} style={{ textDecoration: 'none' }}>
              <div
                className="ig-feature-card"
                style={{
                  padding: '24px', borderRadius: '16px',
                  border: `1.5px solid ${f.border}`, background: '#FFFFFF',
                  transition: 'all 0.26s', cursor: 'pointer',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.04)', height: '100%',
                }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '11px', background: f.bg, border: `1.5px solid ${f.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', marginBottom: '14px' }}>{f.icon}</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '15px', fontWeight: 700, color: '#0F2942', marginBottom: '7px' }}>{f.title}</div>
                <div style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif" }}>{f.desc}</div>
                <div style={{ marginTop: '14px', fontSize: '13px', fontWeight: 600, color: f.color, fontFamily: "'DM Sans', sans-serif" }}>Explore →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Getting Started Steps */}
      <div
        style={{
          borderRadius: '20px',
          background: 'linear-gradient(160deg, #F0FDFA 0%, #EFF6FF 100%)',
          border: '1.5px solid rgba(20,184,166,0.15)',
          padding: '48px',
          marginBottom: '48px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 600, color: '#0D9488', letterSpacing: '2px', textTransform: 'uppercase' as const, marginBottom: '14px', fontFamily: "'DM Sans', sans-serif" }}>
          <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px' }} />
          Getting Started
        </div>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, letterSpacing: '-1px', color: '#0F2942', marginBottom: '32px' }}>
          Up and Running in 4 Steps
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {steps.map((step) => (
            <div key={step.num} style={{ padding: '24px', borderRadius: '14px', background: '#FFFFFF', border: '1.5px solid rgba(37,99,235,0.10)', position: 'relative', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #2563EB, #14B8A6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 800, color: '#fff', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '14px', boxShadow: '0 2px 10px rgba(37,99,235,0.25)' }}>
                {step.num}
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '15px', fontWeight: 700, color: '#0F2942', marginBottom: '7px' }}>{step.title}</div>
              <div style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif" }}>{step.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)', padding: '48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', pointerEvents: 'none' }} />
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 800, color: '#fff', marginBottom: '12px', position: 'relative' }}>Ready to Transform Your School?</h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.88)', marginBottom: '28px', fontFamily: "'DM Sans', sans-serif", position: 'relative' }}>Join 500+ schools already using our digital health management platform.</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
          <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#2563EB', cursor: 'pointer', border: 'none', background: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', fontFamily: "'DM Sans', sans-serif" }}>Schedule Demo →</button>
          <button onClick={() => router.push('/contact')} style={{ padding: '13px 24px', borderRadius: '10px', fontSize: '15px', fontWeight: 600, color: '#fff', cursor: 'pointer', border: '2px solid rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.10)', fontFamily: "'DM Sans', sans-serif" }}>Contact Sales</button>
        </div>
      </div>

      <style jsx>{`
        .ig-feature-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(37,99,235,0.10) !important; }
      `}</style>
    </>
  );
}