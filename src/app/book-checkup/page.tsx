'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PageHero from '../components/PageHero';

const checkupTypes = [
  { id: 'general', label: '🩺 General Health Checkup' },
  { id: 'physical', label: '📏 Physical Examination' },
  { id: 'vision', label: '👁️ Vision & Hearing' },
  { id: 'dental', label: '🦷 Dental Screening' },
  { id: 'mental', label: '🧠 Mental Health Assessment' },
  { id: 'nutrition', label: '🥗 Nutrition Advisory' },
];

const inputSty: React.CSSProperties = { width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid rgba(37,99,235,0.18)', background: '#F8FAFF', color: '#0F2942', fontSize: '14px', fontFamily: "'DM Sans', sans-serif", outline: 'none', boxSizing: 'border-box' };
const labelSty: React.CSSProperties = { display: 'block', fontSize: '12px', fontWeight: 700, color: '#3D5A73', marginBottom: '6px', letterSpacing: '0.3px', fontFamily: "'DM Sans', sans-serif" };

export default function BookCheckupPage() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: '', contactName: '', email: '', phone: '',
    studentCount: '', checkupType: 'general', preferredDate: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero eyebrow="Book Checkup" title="Schedule a Health" highlight="Checkup Program" subtitle="Book a comprehensive health screening program for your school. Our team will get back to you within 24 hours to confirm." cta={undefined} ctaSecondary={undefined} />

      {/* Original images */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '200px 160px', gap: '10px', marginBottom: '40px' }}>
        <div style={{ gridRow: '1 / 3', borderRadius: '16px', overflow: 'hidden', position: 'relative', border: '1.5px solid rgba(37,99,235,0.10)', boxShadow: '0 2px 10px rgba(37,99,235,0.07)' }}>
          <Image src="/images/services/School friends.png" alt="School friends" fill style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ borderRadius: '12px', overflow: 'hidden', position: 'relative', border: '1.5px solid rgba(37,99,235,0.10)' }}>
          <Image src="/images/services/Modern Dental Consultation.png" alt="Dental Consultation" fill style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ borderRadius: '12px', overflow: 'hidden', position: 'relative', border: '1.5px solid rgba(37,99,235,0.10)' }}>
          <Image src="/images/services/health screening.png" alt="Health Screening" fill style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ borderRadius: '12px', overflow: 'hidden', position: 'relative', border: '1.5px solid rgba(37,99,235,0.10)' }}>
          <Image src="/images/schools/School Health Checkup.png" alt="School Health Checkup" fill style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ borderRadius: '12px', overflow: 'hidden', position: 'relative', border: '1.5px solid rgba(37,99,235,0.10)' }}>
          <Image src="/images/schools/School Vaccination Day.png" alt="School Vaccination Day" fill style={{ objectFit: 'cover' }} />
        </div>
      </div>

      {submitted ? (
        <div style={{ textAlign: 'center', padding: '48px 24px', borderRadius: '20px', background: 'linear-gradient(135deg, #F0FDFA, #EFF6FF)', border: '1.5px solid rgba(20,184,166,0.20)' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(34,197,94,0.12)', border: '2px solid rgba(34,197,94,0.30)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', margin: '0 auto 20px' }}>✅</div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '26px', fontWeight: 800, color: '#0F2942', marginBottom: '10px' }}>Booking Request Received!</h2>
          <p style={{ fontSize: '15px', color: '#3D5A73', fontFamily: "'DM Sans', sans-serif", marginBottom: '24px' }}>Our team will contact you within 24 hours to confirm your appointment.</p>
          <button onClick={() => router.push('/')} style={{ padding: '12px 24px', borderRadius: '10px', background: 'linear-gradient(135deg, #2563EB, #14B8A6)', color: '#fff', fontWeight: 700, fontSize: '14px', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Back to Home →</button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', alignItems: 'start' }}>
          {/* Form */}
          <div style={{ background: '#FFFFFF', borderRadius: '20px', border: '1.5px solid rgba(37,99,235,0.10)', boxShadow: '0 4px 20px rgba(37,99,235,0.07)', padding: '32px' }}>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: 800, color: '#0F2942', marginBottom: '24px' }}>📋 Booking Details</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={labelSty}>School Name *</label>
                <input name="schoolName" required value={formData.schoolName} onChange={handleChange} placeholder="Your school's full name" style={inputSty} />
              </div>
              <div>
                <label style={labelSty}>Contact Person *</label>
                <input name="contactName" required value={formData.contactName} onChange={handleChange} placeholder="Principal / Health Coordinator name" style={inputSty} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelSty}>Email *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="school@email.com" style={inputSty} />
                </div>
                <div>
                  <label style={labelSty}>Phone *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" style={inputSty} />
                </div>
              </div>
              <div>
                <label style={labelSty}>Number of Students</label>
                <input type="number" name="studentCount" value={formData.studentCount} onChange={handleChange} placeholder="Approximate count" style={inputSty} />
              </div>
              <div>
                <label style={labelSty}>Type of Health Checkup *</label>
                <select name="checkupType" required value={formData.checkupType} onChange={handleChange} style={inputSty}>
                  {checkupTypes.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
                </select>
              </div>
              <div>
                <label style={labelSty}>Preferred Date</label>
                <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} min={new Date(Date.now() + 86400000).toISOString().split('T')[0]} style={inputSty} />
              </div>
              <div>
                <label style={labelSty}>Additional Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Any specific requirements or questions..." style={{ ...inputSty, resize: 'vertical' }} />
              </div>
              <button type="submit" style={{ width: '100%', padding: '14px', borderRadius: '12px', border: 'none', fontSize: '15px', fontWeight: 700, color: '#fff', cursor: 'pointer', background: 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)', boxShadow: '0 4px 18px rgba(37,99,235,0.30)', fontFamily: "'DM Sans', sans-serif" }}>
                Submit Booking Request →
              </button>
            </form>
          </div>

          {/* Right info column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ background: 'linear-gradient(135deg, #F0FDFA, #EFF6FF)', borderRadius: '18px', border: '1.5px solid rgba(20,184,166,0.18)', padding: '24px' }}>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', fontWeight: 800, color: '#0F2942', marginBottom: '16px' }}>⚡ What Happens Next</h3>
              {['We receive your booking request', 'Team contacts you within 24 hours', 'We confirm date, time & logistics', 'Medical team arrives at your school', 'Digital reports sent within 48 hours'].map((s, i) => (
                <div key={s} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '7px 0', borderBottom: '1px solid rgba(20,184,166,0.10)', fontSize: '13px', color: '#3D5A73', fontFamily: "'DM Sans', sans-serif" }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'linear-gradient(135deg, #2563EB, #14B8A6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 800, color: '#fff', flexShrink: 0 }}>{i + 1}</div>
                  {s}
                </div>
              ))}
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: '18px', border: '1.5px solid rgba(37,99,235,0.10)', padding: '24px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', fontWeight: 800, color: '#0F2942', marginBottom: '14px' }}>📞 Prefer to Call?</h3>
              <a href="tel:+917050140340" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '18px', fontWeight: 800, color: '#2563EB', textDecoration: 'none', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '6px' }}>+91 70501 40340</a>
              <p style={{ fontSize: '13px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif", margin: 0 }}>Mon–Fri 9am–6pm · Sat 10am–4pm</p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #EFF6FF, #F5F3FF)', borderRadius: '18px', border: '1.5px solid rgba(37,99,235,0.12)', padding: '20px' }}>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                {[{ num: '500+', l: 'Schools', c: '#2563EB' }, { num: '50k+', l: 'Students', c: '#0D9488' }, { num: '99%', l: 'Satisfaction', c: '#22C55E' }, { num: '24hr', l: 'Reports', c: '#7C3AED' }].map(s => (
                  <div key={s.l} style={{ textAlign: 'center', flex: 1, minWidth: '60px' }}>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: 800, color: s.c }}>{s.num}</div>
                    <div style={{ fontSize: '11px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`input:focus, select:focus, textarea:focus { border-color: rgba(20,184,166,0.50) !important; background: #fff !important; box-shadow: 0 0 0 3px rgba(20,184,166,0.10) !important; }`}</style>
    </>
  );
}
