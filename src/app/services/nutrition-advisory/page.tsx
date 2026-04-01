'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PageHero from '../../components/PageHero';

const items = [
  ['🥗 Diet Assessment', 'Individualized dietary evaluation against age-appropriate nutritional requirements.'],
  ['📊 BMI & Growth Analysis', 'Weight management and growth trajectory monitoring.'],
  ['🍱 Meal Planning', 'Customized lunch box and tiffin guidance aligned with Indian food culture.'],
  ['🩸 Deficiency Screening', 'Iron, Vitamin D, B12, and other common deficiency checks.'],
  ['🏃 Lifestyle Coaching', 'Physical activity recommendations tailored for each student.'],
  ['👨‍👩‍👦 Parent Education', 'Nutrition workshops and cookbooks for school canteen staff and parents.'],
];

export default function NutritionAdvisoryPage() {
  const router = useRouter();
  return (
    <>
      <PageHero eyebrow="Service" title="Nutrition" highlight="Advisory Service" subtitle="Evidence-based nutrition guidance to optimize student health, energy, and academic performance through better eating habits." cta={{ label: 'Book Nutrition Consult', href: '/book-checkup' }} ctaSecondary={{ label: 'All Services', href: '/services' }} gradient="linear-gradient(160deg, #F0FDF4 0%, #ECFDF5 60%, #EFF6FF 100%)" />

      {/* Original image */}
      <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1.5px solid rgba(22,163,74,0.15)', boxShadow: '0 4px 24px rgba(22,163,74,0.08)', marginBottom: '48px', position: 'relative', height: '360px' }}>
        <Image src="/images/schools/Nutrition Workshop with Students.png" alt="Nutrition Workshop with Students" fill style={{ objectFit: 'cover' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginBottom: '48px' }}>
        {items.map(([title, desc]) => (
          <div key={title} style={{ padding: '22px', borderRadius: '16px', background: '#FFFFFF', border: '1.5px solid rgba(22,163,74,0.12)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#0F2942', marginBottom: '6px' }}>{title}</div>
            <p style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{desc}</p>
          </div>
        ))}
      </div>
      <div style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #16A34A 0%, #0D9488 100%)', padding: '44px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Book Nutrition Advisory</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.88)', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" }}>Help your students fuel their potential with the right nutrition.</p>
        <button onClick={() => router.push('/book-checkup')} style={{ padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, color: '#16A34A', cursor: 'pointer', border: 'none', background: '#FFFFFF', fontFamily: "'DM Sans', sans-serif" }}>Book Consult →</button>
      </div>
    </>
  );
}
