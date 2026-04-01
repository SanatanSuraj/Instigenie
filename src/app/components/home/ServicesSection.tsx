'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const services = [
  {
    icon: '🩺',
    title: 'Physical Examination',
    desc: 'Comprehensive health assessment including vital signs, growth monitoring, and full wellness evaluation — all digitized instantly.',
    tag: 'AI-ASSISTED',
    image: '/images/services/Health Assessment.png',
    sectionBg: '#EFF6FF',
    cardBg: '#FFFFFF',
    glowColor: 'rgba(37,99,235,0.08)',
    iconBg: 'rgba(37,99,235,0.08)',
    iconBorder: 'rgba(37,99,235,0.15)',
    tagColor: '#2563EB',
    tagBg: 'rgba(37,99,235,0.07)',
    tagBorder: 'rgba(37,99,235,0.15)',
    href: '/physical-exam',
  },
  {
    icon: '👁️',
    title: 'Vision & Hearing',
    desc: 'Advanced screening using AI-powered technology for early detection of vision and hearing impairments before they affect learning.',
    tag: 'EARLY DETECTION',
    image: '/images/services/AI Vision Hearing Screening.png',
    sectionBg: '#F0FDFA',
    cardBg: '#FFFFFF',
    glowColor: 'rgba(20,184,166,0.08)',
    iconBg: 'rgba(20,184,166,0.08)',
    iconBorder: 'rgba(20,184,166,0.18)',
    tagColor: '#0D9488',
    tagBg: 'rgba(20,184,166,0.07)',
    tagBorder: 'rgba(20,184,166,0.18)',
    href: '/vision-hearing',
  },
  {
    icon: '🦷',
    title: 'Dental Care',
    desc: 'Expert dental evaluations with state-of-the-art equipment and on-site specialist consultation, reported digitally.',
    tag: 'SPECIALIST CARE',
    image: '/images/services/Modern Dental Consultation.png',
    sectionBg: '#F0F9FF',
    cardBg: '#FFFFFF',
    glowColor: 'rgba(56,189,248,0.08)',
    iconBg: 'rgba(56,189,248,0.08)',
    iconBorder: 'rgba(56,189,248,0.18)',
    tagColor: '#0284C7',
    tagBg: 'rgba(56,189,248,0.07)',
    tagBorder: 'rgba(56,189,248,0.16)',
    href: '/dental-care',
  },
  {
    icon: '🧠',
    title: 'Mental Health',
    desc: 'AI-driven mental health assessments with empathetic counsellor matching and real-time alert systems for at-risk students.',
    tag: 'REAL-TIME ALERTS',
    image: '/images/services/Supportive Counseling.png',
    sectionBg: '#F0FDF4',
    cardBg: '#FFFFFF',
    glowColor: 'rgba(34,197,94,0.08)',
    iconBg: 'rgba(34,197,94,0.08)',
    iconBorder: 'rgba(34,197,94,0.18)',
    tagColor: '#16A34A',
    tagBg: 'rgba(34,197,94,0.07)',
    tagBorder: 'rgba(34,197,94,0.16)',
    href: '/mental-health',
  },
];

export default function ServicesSection() {
  const router = useRouter();

  return (
    <section
      className="ig-reveal"
      style={{
        padding: '80px 24px 90px',
        background: '#FFFFFF',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            fontWeight: 600,
            color: '#0D9488',
            letterSpacing: '2px',
            textTransform: 'uppercase' as const,
            marginBottom: '14px',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px' }} />
          Our Services
        </div>

        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            letterSpacing: '-1.5px',
            color: '#0F2942',
            marginBottom: '12px',
          }}
        >
          Comprehensive Health Services
        </h2>

        <p style={{ fontSize: '17px', color: '#3D5A73', lineHeight: 1.6, maxWidth: '520px', fontFamily: "'DM Sans', sans-serif", marginBottom: '48px' }}>
          Complete healthcare solutions for educational institutions, powered by AI and delivered by experts.
        </p>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {services.map((svc) => (
            <div
              key={svc.title}
              onClick={() => router.push(svc.href)}
              className="ig-service-card"
              style={{
                position: 'relative',
                borderRadius: '18px',
                border: `1px solid ${svc.iconBorder}`,
                background: svc.cardBg,
                padding: '0',
                cursor: 'pointer',
                transition: 'all 0.28s',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
            >
              {/* Card Image */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '180px',
                  overflow: 'hidden',
                  borderRadius: '18px 18px 0 0',
                }}
              >
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover', transition: 'transform 0.35s ease' }}
                  className="ig-service-img"
                />
                {/* Subtle colour overlay at bottom of image */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to bottom, transparent 50%, ${svc.sectionBg}cc 100%)`,
                    pointerEvents: 'none',
                  }}
                />
              </div>

              {/* Card Body */}
              <div style={{ padding: '22px 24px 24px' }}>
                {/* Soft tinted corner glow */}
                <div
                  style={{
                    position: 'absolute',
                    width: '130px',
                    height: '130px',
                    borderRadius: '50%',
                    top: '140px',
                    right: '-30px',
                    background: svc.sectionBg,
                    pointerEvents: 'none',
                  }}
                />
                {/* Icon */}
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px',
                    fontSize: '20px',
                    position: 'relative',
                    zIndex: 1,
                    background: svc.iconBg,
                    border: `1.5px solid ${svc.iconBorder}`,
                  }}
                >
                  {svc.icon}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '17px',
                    fontWeight: 700,
                    color: '#0F2942',
                    marginBottom: '8px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {svc.title}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    color: '#3D5A73',
                    lineHeight: 1.65,
                    position: 'relative',
                    zIndex: 1,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {svc.desc}
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    marginTop: '16px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 700,
                    background: svc.tagBg,
                    border: `1px solid ${svc.tagBorder}`,
                    color: svc.tagColor,
                    position: 'relative',
                    zIndex: 1,
                    letterSpacing: '0.5px',
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {svc.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ig-service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 42px rgba(37, 99, 235, 0.12), 0 0 0 1.5px rgba(20,184,166,0.25);
          border-color: rgba(20,184,166,0.35) !important;
        }
        .ig-service-card:hover .ig-service-img {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
}
