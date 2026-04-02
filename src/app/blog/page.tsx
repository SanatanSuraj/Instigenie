'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PageHero from '../components/PageHero';

const categories = ['All', 'Mission Updates', 'Case Studies', 'AI & Tech', 'Clinical Insights', 'Policy Alignment'];

const blogPosts = [
  {
    title: 'The Maharashtra Mission: A Framework for 1.2 Million Students',
    excerpt: 'How InstiGenie partnered to scale systematic health screenings across urban and rural clusters in Maharashtra, addressing the 4D gap.',
    date: 'Oct 28, 2025',
    readTime: '9 min read',
    image: '/images/schools/School Health Checkup.png',
    category: 'Case Studies',
    author: { name: 'Suraj Kumar', role: 'Founder, InstiGenie' }
  },
  {
    title: 'The 13.25% Gap: Mapping the Invisible Barrier to Education',
    excerpt: 'Detailed analysis of why nearly 13.25% of students are out-of-school or falling behind due to undiagnosed vision, hearing, and nutrition deficits.',
    date: 'Oct 22, 2025',
    readTime: '12 min read',
    image: '/images/blog/invisible-barrier.png',
    category: 'Policy Alignment',
    author: { name: 'Dr. Anjali Rao', role: 'Chief Medical Officer' }
  },
  {
    title: 'Standardizing Care: The Role of AI in Clinical Consistency',
    excerpt: 'How our AI-first infrastructure ensures that a student in a remote village receives the same diagnostic lens as one in a metro private school.',
    date: 'Oct 15, 2025',
    readTime: '7 min read',
    image: '/images/services/Caring School Nurse.png',
    category: 'AI & Tech',
    author: { name: 'InstiGenie Tech Team', role: 'Engineering Hub' }
  },
  {
    title: 'From Static Files to Longitudinal Health IDs',
    excerpt: 'The transition from paper-based record keeping to unified, ABDM-aligned digital health identities for every Indian student.',
    date: 'Oct 09, 2025',
    readTime: '6 min read',
    image: '/images/schools/Digital Vision Screening.png',
    category: 'Mission Updates',
    author: { name: 'Suraj Kumar', role: 'Founder, InstiGenie' }
  },
  {
    title: 'Combatting Anemia: Data-Led Nutrition Mapping',
    excerpt: 'Using screening data to iterate on midday meal policies and track iron-deficiency recovery cycles with precision.',
    date: 'Oct 02, 2025',
    readTime: '8 min read',
    image: '/images/blog/nutrition-mapping.png',
    category: 'Clinical Insights',
    author: { name: 'Priya Mehta', role: 'Community Health Lead' }
  },
  {
    title: 'RBSK Alignment: Digitizing the 4D Screening Protocol',
    excerpt: 'How InstiGenie plugs directly into the Rashtriya Bal Swasthya Karyakram (RBSK) mission to close the loop on referral closures.',
    date: 'Sep 24, 2025',
    readTime: '10 min read',
    image: '/images/services/Interactive Health Lesson.png',
    category: 'Policy Alignment',
    author: { name: 'Dr. Sameer Shah', role: 'Ophthalmology Lead' }
  }
];

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState('All');
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

  const filteredPosts = activeTab === 'All' 
    ? blogPosts 
    : blogPosts.filter(p => p.category === activeTab);

  return (
    <div style={{ padding: '0 24px 80px', maxWidth: '1200px', margin: '0 auto' }}>
      <PageHero
        eyebrow="Mission Insights"
        title="Evidence, Data, and"
        highlight="The Future of School Health"
        subtitle="Distilling our work from the Maharashtra Mission and National Advocacy efforts into actionable insights for educators, parents, and policy-makers."
        cta={{ label: 'Subscribe to reports', href: '#subscribe' }}
      />

      <div 
        className="ig-reveal"
        style={{ 
          display: 'flex', 
          gap: '8px', 
          overflowX: 'auto', 
          padding: '8px 4px 24px',
          marginBottom: '32px',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            style={{
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              transition: 'all 0.22s',
              background: activeTab === cat ? '#0F2942' : '#FFFFFF',
              color: activeTab === cat ? '#FFFFFF' : '#3D5A73',
              border: `1.5px solid ${activeTab === cat ? '#0F2942' : 'rgba(37,99,235,0.12)'}`,
              boxShadow: activeTab === cat ? '0 4px 12px rgba(15,41,66,0.20)' : 'none',
              fontFamily: "'DM Sans', sans-serif"
            }}
            className="ig-hover-btn"
          >
            {cat}
          </button>
        ))}
      </div>

      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', 
          gap: '32px' 
        }}
      >
        {filteredPosts.map((post, i) => (
          <article
            key={post.title}
            className="ig-reveal"
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: '#FFFFFF',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1.5px solid rgba(37,99,235,0.10)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
              transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
              cursor: 'pointer',
              position: 'relative',
              animationDelay: `${i * 0.05}s`
            }}
            onClick={() => router.push(`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`)}
          >
            <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
              <Image 
                src={post.image || '/images/hero-bg.png'} 
                alt={post.title}
                fill
                style={{ objectFit: 'cover', transition: 'transform 0.5s' }}
                className="ig-post-img"
              />
              <div 
                style={{ 
                  position: 'absolute', top: '16px', left: '16px',
                  padding: '5px 12px', borderRadius: '100px',
                  background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(4px)',
                  fontSize: '11px', fontWeight: 700, color: '#0F2942',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}
              >
                {post.category}
              </div>
            </div>

            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <span style={{ fontSize: '12px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif" }}>{post.date}</span>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#B3B8C8' }} />
                <span style={{ fontSize: '12px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif" }}>{post.readTime}</span>
              </div>

              <h2
                style={{
                  fontSize: '20px',
                  fontWeight: 800,
                  lineHeight: 1.3,
                  color: '#0F2942',
                  marginBottom: '12px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: '-0.3px'
                }}
              >
                {post.title}
              </h2>

              <p
                style={{
                  fontSize: '15.5px',
                  color: '#3D5A73',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                  fontFamily: "'DM Sans', sans-serif",
                  flex: 1
                }}
              >
                {post.excerpt}
              </p>

              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(37,99,235,0.07)'
                }}
              >
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(45deg, #2563EB, #14B8A6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px', fontWeight: 800 }}>
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F2942', fontFamily: "'Space Grotesk', sans-serif" }}>{post.author.name}</div>
                  <div style={{ fontSize: '11px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif" }}>{post.author.role}</div>
                </div>
              </div>
            </div>

            <style jsx>{`
              article:hover {
                transform: translateY(-8px);
                box-shadow: 0 20px 40px rgba(37,99,235,0.12) !important;
                border-color: rgba(37,99,235,0.25) !important;
              }
              article:hover .ig-post-img {
                transform: scale(1.08);
              }
              .ig-hover-btn:hover {
                background: rgba(37,99,235,0.05);
                border-color: #2563EB;
                color: #2563EB !important;
              }
            `}</style>
          </article>
        ))}
      </div>

      <div
        className="ig-reveal"
        style={{
          marginTop: '80px',
          padding: '60px 40px',
          borderRadius: '32px',
          background: 'linear-gradient(135deg, #0F2942 0%, #1E3A5F 100%)',
          textAlign: 'center',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(20,184,166,0.10)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(37,99,235,0.10)', filter: 'blur(40px)' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '28px', fontWeight: 800, marginBottom: '12px' }}>Operational Excellence Highlights</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', color: 'rgba(255,255,255,0.80)', marginBottom: '32px', lineHeight: 1.6 }}>
            Join our mailing list to receive the full Maharashtra Case Study report and technical policy papers on student health IDs.
          </p>
          
          <form style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your administrative email"
              style={{
                padding: '14px 24px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.08)',
                color: '#fff',
                fontSize: '15px',
                outline: 'none',
                width: 'clamp(280px, 100%, 340px)',
                fontFamily: "'DM Sans', sans-serif"
              }}
              className="ig-input-focus"
            />
            <button
              style={{
                padding: '14px 32px',
                borderRadius: '12px',
                background: '#FFFFFF',
                color: '#0F2942',
                border: 'none',
                fontWeight: 700,
                fontSize: '15px',
                cursor: 'pointer',
                transition: 'all 0.22s',
                fontFamily: "'DM Sans', sans-serif"
              }}
              className="ig-sub-btn"
            >
              Get the Report
            </button>
          </form>
        </div>

        <style jsx>{`
          .ig-input-focus:focus { border-color: #14B8A6 !important; background: rgba(255,255,255,0.12) !important; }
          .ig-sub-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.25); filter: contrast(1.1); }
        `}</style>
      </div>
    </div>
  );
}
