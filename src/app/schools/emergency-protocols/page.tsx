'use client';
import { useRouter } from 'next/navigation';
import PageHero from '../../components/PageHero';

const protocols = [
  { icon: '🫀', title: 'Cardiac Emergency', desc: 'Step-by-step AED and CPR protocol including roles, call tree, and hospital route.' },
  { icon: '🤕', title: 'Head Trauma / Concussion', desc: 'Concussion protocol, return-to-play guidance, and neurological monitoring checklist.' },
  { icon: '🤧', title: 'Allergic Reactions', desc: 'Anaphylaxis action plan, epinephrine auto-injector use, and antihistamine guidelines.' },
  { icon: '🔥', title: 'Fire & Evacuation', desc: 'Medical priority evacuation procedures for students with health conditions.' },
  { icon: '🧠', title: 'Mental Health Crisis', desc: 'De-escalation scripts, safe referral procedures, and counselor call protocols.' },
  { icon: '☣️', title: 'Infectious Disease', desc: 'Isolation protocols, parent notification, and health authority reporting procedures.' },
];

export default function EmergencyProtocolsPage() {
  const router = useRouter();
  return (
    <>
      <PageHero eyebrow="Schools · Emergency" title="Emergency" highlight="Protocols" subtitle="Comprehensive, school-specific emergency protocols that ensure every staff member knows exactly what to do when a medical emergency occurs." cta={{ label: 'Download Templates', href: '/book-checkup' }} ctaSecondary={{ label: 'All School Features', href: '/schools' }} gradient="linear-gradient(160deg, #FFF1F2 0%, #EFF6FF 60%, #FFFBEB 100%)" />
      <div style={{ padding: '16px 20px', borderRadius: '12px', background: 'rgba(239,68,68,0.06)', border: '1.5px solid rgba(239,68,68,0.22)', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '18px' }}>🚨</span>
        <span style={{ fontSize: '13px', color: '#DC2626', fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>Medical Emergency? Call immediately: <a href="tel:108" style={{ color: '#EF4444' }}>108 (Ambulance)</a> · <a href="tel:+917050140340" style={{ color: '#EF4444' }}>InstiGenie: +91 70501 40340</a></span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {protocols.map(p => (
          <div key={p.title} style={{ padding: '22px', borderRadius: '16px', background: '#FFFFFF', border: '1.5px solid rgba(239,68,68,0.12)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>{p.icon}</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0F2942', marginBottom: '6px' }}>{p.title}</div>
            <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{p.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #EF4444 0%, #D97706 100%)', padding: '44px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Get Your School Emergency Ready</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Download customizable emergency protocol templates for your school.</p>
        <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#EF4444', cursor: 'pointer', border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif" }}>Get Templates →</button>
      </div>
    </>
  );
}
