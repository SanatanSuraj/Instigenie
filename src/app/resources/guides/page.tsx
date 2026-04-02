'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PageHero from '../../components/PageHero';

const guideCategories = [
  { id: 'all', label: 'All Manuals', icon: '📚' },
  { id: 'admin', label: 'Administrative', icon: '🏛️' },
  { id: 'clinical', label: 'Clinical Ops', icon: '🩺' },
  { id: 'tech', label: 'Technical', icon: '💻' },
  { id: 'parents', label: 'Parental', icon: '👨‍👩‍👧' },
  { id: 'social', label: 'Impact & CSR', icon: '🤝' },
];

const guides = [
  {
    category: 'clinical',
    title: 'RBSK 4D Screening: The Digital Implementation Manual',
    description: 'A step-by-step guide to digitizing the Defects, Diseases, Deficiencies, and Developmental Delays workflow for government compliance.',
    readTime: '18 min read',
    rating: '5.0',
    difficulty: 'Intermediate',
    icon: '📊'
  },
  {
    category: 'admin',
    title: 'Mega-Camp Logistics: Screening 1,000+ Students Daily',
    description: 'Operational blueprints from the Maharashtra Mission on managing space, flow, and clinical staffing for high-volume camps.',
    readTime: '15 min read',
    rating: '4.9',
    difficulty: 'Advanced',
    icon: '🏗️'
  },
  {
    category: 'parents',
    title: 'The Parent Consultation Bridge: Closing the Referral Loop',
    description: 'Practical communication protocols for translating clinical findings into parent action and successful specialist referrals.',
    readTime: '10 min read',
    rating: '4.8',
    difficulty: 'Beginner',
    icon: '🤝'
  },
  {
    category: 'tech',
    title: 'Telemedicine Readiness: On-Campus Infrastructure',
    description: 'Technical requirements for bandwidth, hardware, and privacy-first rooms to enable specialist consults within school premises.',
    readTime: '8 min read',
    rating: '4.7',
    difficulty: 'Intermediate',
    icon: '📡'
  },
  {
    category: 'admin',
    title: 'National Mission Alignment: RBSK & Poshan Maah',
    description: 'A roadmap for school leaders to align institutional health activities with national health mission calendars and reporting.',
    readTime: '12 min read',
    rating: '4.9',
    difficulty: 'Intermediate',
    icon: '🇮🇳'
  },
  {
    category: 'clinical',
    title: 'Mental Health First Aid: An Educators Framework',
    description: 'Detecting anxiety, stress triggers, and social withdrawal in middle-school students with standardized observational tools.',
    readTime: '20 min read',
    rating: '5.0',
    difficulty: 'Advanced',
    icon: '🧠'
  }
];

export default function GuidesPage() {
  const [activeTab, setActiveTab] = useState('all');
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.ig-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  const filteredGuides = activeTab === 'all' 
    ? guides 
    : guides.filter(g => g.category === activeTab);

  return (
    <div style={{ padding: '0 24px 100px', maxWidth: '1200px', margin: '0 auto' }}>
      <PageHero
        eyebrow="Implementation Hub"
        title="Operational & Technical"
        highlight="Health Manuals"
        subtitle="Practical implementation guides derived from our large-scale missions, designed to help administrators and clinical leads run world-class health programs."
      />

      {/* Guide Categories */}
      <div 
        className="ig-reveal"
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', 
          gap: '12px',
          marginBottom: '56px'
        }}
      >
        {guideCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            style={{
              padding: '20px 16px',
              borderRadius: '20px',
              border: `1.5px solid ${activeTab === cat.id ? '#14B8A6' : 'rgba(37,99,235,0.08)'}`,
              background: activeTab === cat.id ? 'rgba(20,184,166,0.05)' : '#FFFFFF',
              color: activeTab === cat.id ? '#0D9488' : '#3D5A73',
              cursor: 'pointer',
              transition: 'all 0.22s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              fontFamily: "'Space Grotesk', sans-serif",
              boxShadow: activeTab === cat.id ? '0 4px 16px rgba(20,184,166,0.15)' : 'none'
            }}
            className="ig-cat-card"
          >
            <span style={{ fontSize: '24px' }}>{cat.icon}</span>
            <span style={{ fontSize: '13px', fontWeight: 700 }}>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Main Grid */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', 
          gap: '24px' 
        }}
      >
        {filteredGuides.map((guide, i) => (
          <div
            key={guide.title}
            className="ig-reveal"
            style={{
              padding: '32px',
              borderRadius: '24px',
              background: '#FFFFFF',
              border: '1.5px solid rgba(37,99,235,0.10)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
              transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
              display: 'flex',
              flexDirection: 'column',
              animationDelay: `${i * 0.08}s`,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(37,99,235,0.03)', filter: 'blur(30px)' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div 
                style={{ 
                  width: '52px', height: '52px', borderRadius: '16px', 
                  background: 'rgba(37,99,235,0.06)', 
                  border: '1.5px solid rgba(37,99,235,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px'
                }}
              >
                {guide.icon}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 700, color: '#D97706', fontFamily: "'Space Grotesk', sans-serif" }}>
                <span>★</span> {guide.rating}
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#7A99B4', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', fontFamily: "'Space Grotesk', sans-serif" }}>
                {guide.category} • {guide.difficulty}
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F2942', marginBottom: '12px', fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.25, letterSpacing: '-0.4px' }}>
                {guide.title}
              </h3>
              <p style={{ fontSize: '15.5px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", marginBottom: '24px' }}>
                {guide.description}
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '20px', borderTop: '1px solid rgba(37,99,235,0.07)' }}>
              <span style={{ fontSize: '13px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif" }}>{guide.readTime}</span>
              <Link 
                href={`/resources/guides/${guide.title.toLowerCase().replace(/\s+/g, '-')}`}
                style={{
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#2563EB',
                  background: 'rgba(37,99,235,0.08)',
                  textDecoration: 'none',
                  transition: 'all 0.22s',
                  fontFamily: "'DM Sans', sans-serif"
                }}
                className="ig-guide-btn"
              >
                Download PDF
              </Link>
            </div>

            <style jsx>{`
              div:hover {
                transform: translateY(-8px);
                box-shadow: 0 20px 40px rgba(37,99,235,0.12) !important;
                border-color: rgba(37,99,235,0.25) !important;
              }
              .ig-guide-btn:hover {
                background: #2563EB !important;
                color: #FFFFFF !important;
              }
              .ig-cat-card:hover {
                transform: translateY(-4px);
                border-color: #38BDF8 !important;
                background: rgba(56,189,248,0.04) !important;
              }
            `}</style>
          </div>
        ))}
      </div>

      <div 
        className="ig-reveal"
        style={{ 
          marginTop: '80px',
          padding: '48px',
          borderRadius: '24px',
          background: '#F0FDF4',
          border: '1.5px solid rgba(34,197,94,0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          flexWrap: 'wrap'
        }}
      >
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '24px', fontWeight: 800, color: '#064E3B', marginBottom: '12px' }}>
            Mission-Scale Documentation
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', color: '#166534', lineHeight: 1.6 }}>
            The manuals above are distilled from our active deployments in Maharashtra and other state missions. For custom administrative dashboard training or policy alignment whitepapers, please contact our implementation hub.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <button onClick={() => router.push('/contact')} style={{ padding: '14px 28px', borderRadius: '12px', fontSize: '15px', fontWeight: 700, color: '#fff', border: 'none', background: '#16A34A', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", boxShadow: '0 4px 12px rgba(22,163,74,0.25)' }}>Contact Hub</button>
          <button onClick={() => router.push('/faq')} style={{ padding: '14px 24px', borderRadius: '12px', fontSize: '15px', fontWeight: 600, color: '#166534', border: '1.5px solid rgba(22,163,74,0.20)', background: '#fff', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Technical FAQ</button>
        </div>
      </div>
    </div>
  );
}
