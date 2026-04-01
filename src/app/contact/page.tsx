'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHero from '../components/PageHero';

interface SubmitStatus {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '10px',
  border: '1.5px solid rgba(37,99,235,0.15)',
  background: '#F8FAFF',
  color: '#0F2942',
  fontSize: '14px',
  fontFamily: "'DM Sans', sans-serif",
  outline: 'none',
  transition: 'all 0.2s',
  boxSizing: 'border-box' as const,
};
const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 600,
  color: '#3D5A73',
  marginBottom: '6px',
  fontFamily: "'DM Sans', sans-serif",
};

function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', date: '', time: '' });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ isSubmitting: false, isSubmitted: false, error: null });

  useEffect(() => {
    const subjectFromUrl = searchParams.get('subject');
    if (subjectFromUrl) setFormData(prev => ({ ...prev, subject: subjectFromUrl }));
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ isSubmitting: true, isSubmitted: false, error: null });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to submit form');
      setSubmitStatus({ isSubmitting: false, isSubmitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '', date: '', time: '' });
    } catch {
      setSubmitStatus({ isSubmitting: false, isSubmitted: false, error: 'Failed to submit form. Please try again.' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in Touch"
        highlight="With Us"
        subtitle="Have questions about our healthcare services? Our team is here to help you find the perfect solution for your school — we respond within 24 hours."
        cta={{ label: 'Book a Demo', href: '/book-checkup' }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}
      >
        {/* Form */}
        <div
          style={{
            borderRadius: '20px',
            border: '1.5px solid rgba(37,99,235,0.10)',
            background: '#FFFFFF',
            padding: '36px',
            boxShadow: '0 4px 20px rgba(37,99,235,0.07)',
          }}
        >
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: 800, color: '#0F2942', marginBottom: '24px' }}>
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <label htmlFor="name" style={labelStyle}>Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={inputStyle} required placeholder="Your full name" />
            </div>
            <div>
              <label htmlFor="email" style={labelStyle}>Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="subject" style={labelStyle}>Subject</label>
              <select id="subject" name="subject" value={formData.subject} onChange={handleChange} style={inputStyle} required>
                <option value="">Select a subject</option>
                <option value="checkup">Book Health Checkup</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="demo">Request Demo</option>
                <option value="sales">Sales</option>
              </select>
            </div>
            {formData.subject === 'checkup' && (
              <>
                <div>
                  <label htmlFor="date" style={labelStyle}>Preferred Date</label>
                  <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} style={inputStyle} min={new Date().toISOString().split('T')[0]} required={formData.subject === 'checkup'} />
                </div>
                <div>
                  <label htmlFor="time" style={labelStyle}>Preferred Time</label>
                  <select id="time" name="time" value={formData.time} onChange={handleChange} style={inputStyle} required={formData.subject === 'checkup'}>
                    <option value="">Select a time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                </div>
              </>
            )}
            <div>
              <label htmlFor="message" style={labelStyle}>{formData.subject === 'checkup' ? 'Additional Notes' : 'Message'}</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} style={{ ...inputStyle, resize: 'vertical' }} required placeholder="Tell us how we can help..." />
            </div>

            <button
              type="submit"
              disabled={submitStatus.isSubmitting}
              style={{
                padding: '14px 24px', borderRadius: '10px', fontSize: '15px', fontWeight: 700,
                color: '#fff', cursor: submitStatus.isSubmitting ? 'not-allowed' : 'pointer',
                border: 'none', fontFamily: "'DM Sans', sans-serif",
                background: 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)',
                boxShadow: '0 4px 18px rgba(37,99,235,0.28)',
                opacity: submitStatus.isSubmitting ? 0.6 : 1,
                transition: 'all 0.25s', width: '100%',
              }}
            >
              {submitStatus.isSubmitting ? 'Sending...' : 'Send Message →'}
            </button>

            {submitStatus.isSubmitted && (
              <div style={{ padding: '14px', borderRadius: '10px', background: 'rgba(34,197,94,0.08)', border: '1.5px solid rgba(34,197,94,0.25)', color: '#16A34A', fontSize: '14px', fontFamily: "'DM Sans', sans-serif", display: 'flex', alignItems: 'center', gap: '8px' }}>
                ✓ Thank you! We&apos;ll get back to you within 24 hours.
              </div>
            )}
            {submitStatus.error && (
              <div style={{ padding: '14px', borderRadius: '10px', background: 'rgba(239,68,68,0.07)', border: '1.5px solid rgba(239,68,68,0.22)', color: '#EF4444', fontSize: '14px', fontFamily: "'DM Sans', sans-serif" }}>
                {submitStatus.error}
              </div>
            )}
          </form>
        </div>

        {/* Right column: Contact info + hours */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Contact info */}
          <div style={{ borderRadius: '18px', border: '1.5px solid rgba(37,99,235,0.10)', background: '#FFFFFF', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', flex: 1 }}>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: 800, color: '#0F2942', marginBottom: '22px' }}>Contact Information</h2>
            {[
              { icon: '📍', label: 'Address', info: '123 Healthcare Avenue, Medical District, New Delhi 110001' },
              { icon: '📞', label: 'Phone', info: '+91 70501 40340' },
              { icon: '✉️', label: 'Email', info: 'contact@instigenie.com' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '14px 0', borderBottom: '1px solid rgba(37,99,235,0.07)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#7A99B4', fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>{item.label}</div>
                  <div style={{ fontSize: '14px', color: '#0F2942', fontFamily: "'DM Sans', sans-serif" }}>{item.info}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Business hours */}
          <div style={{ borderRadius: '18px', border: '1.5px solid rgba(20,184,166,0.15)', background: 'linear-gradient(135deg, #F0FDFA, #EFF6FF)', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: 800, color: '#0F2942', marginBottom: '18px' }}>Business Hours</h2>
            {[
              { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
              { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
              { day: 'Sunday', hours: 'Closed' },
            ].map((row) => (
              <div key={row.day} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(20,184,166,0.12)', fontSize: '14px', fontFamily: "'DM Sans', sans-serif" }}>
                <span style={{ color: '#0F2942', fontWeight: 500 }}>{row.day}</span>
                <span style={{ color: '#3D5A73' }}>{row.hours}</span>
              </div>
            ))}
            <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '7px', padding: '10px 14px', borderRadius: '10px', background: 'rgba(20,184,166,0.10)', border: '1px solid rgba(20,184,166,0.22)' }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#14B8A6', boxShadow: '0 0 6px #14B8A6' }} className="ig-pulse" />
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#0D9488', fontFamily: "'DM Sans', sans-serif" }}>AI Support Available 24/7</span>
            </div>
          </div>

          {/* FAQ mini */}
          <div style={{ borderRadius: '18px', border: '1.5px solid rgba(37,99,235,0.10)', background: '#FFFFFF', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: 800, color: '#0F2942', marginBottom: '18px' }}>Quick FAQ</h2>
            {[
              { q: 'How can I schedule a demo?', a: 'Fill the form or call us. We respond within 24 hours.' },
              { q: 'Is your platform HIPAA compliant?', a: 'Yes, we use industry-standard encryption and are HIPAA & DPDP compliant.' },
              { q: 'Do you offer training?', a: 'Yes — comprehensive training for all new clients including live sessions.' },
            ].map((faq) => (
              <div key={faq.q} style={{ padding: '12px 0', borderBottom: '1px solid rgba(37,99,235,0.07)' }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', fontWeight: 700, color: '#0F2942', marginBottom: '4px' }}>{faq.q}</div>
                <div style={{ fontSize: '13px', color: '#3D5A73', fontFamily: "'DM Sans', sans-serif" }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        input:focus, textarea:focus, select:focus {
          border-color: rgba(20,184,166,0.50) !important;
          box-shadow: 0 0 0 3px rgba(20,184,166,0.10) !important;
          background: #fff !important;
        }
      `}</style>
    </>
  );
}

function ContactFormLoading() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 24px' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '3px solid rgba(20,184,166,0.2)', borderTopColor: '#14B8A6', animation: 'spin 0.8s linear infinite', margin: '0 auto 16px' }} />
      <p style={{ color: '#7A99B4', fontFamily: "'DM Sans', sans-serif" }}>Loading contact form...</p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactFormLoading />}>
      <ContactForm />
    </Suspense>
  );
}
