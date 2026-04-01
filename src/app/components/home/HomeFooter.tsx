'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomeFooter() {
  return (
    <footer style={{ borderTop: '1px solid rgba(37,99,235,0.10)', background: '#FFFFFF' }}>
      <div style={{ padding: '52px 40px 32px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px' }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '14px' }}>
            <Image
              src="/images/logo.png"
              alt="InstiGenie"
              width={148}
              height={44}
              style={{ objectFit: 'contain', height: '38px', width: 'auto' }}
            />
          </div>
            <p style={{ fontSize: '13px', color: '#7A99B4', lineHeight: 1.7, marginBottom: '22px', fontFamily: "'DM Sans', sans-serif" }}>
              Pioneering AI-powered digital health solutions for schools and communities, making healthcare accessible and intelligent.
            </p>
            {/* AI chip */}
            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                padding: '5px 14px', borderRadius: '100px',
                border: '1px solid rgba(20,184,166,0.30)',
                background: 'rgba(20,184,166,0.06)',
                fontSize: '12px', fontWeight: 600, color: '#0D9488',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <div
                className="ig-pulse"
                style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#14B8A6', boxShadow: '0 0 6px #14B8A6' }}
              />
              AI System Online
            </div>
          </div>

          {/* Platform */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#0F2942', letterSpacing: '1px', textTransform: 'uppercase' as const, marginBottom: '16px', fontFamily: "'Space Grotesk', sans-serif" }}>
              Platform
            </div>
            {[
              { label: 'About Us', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'For Schools', href: '/schools' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'Contact', href: '/contact' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="ig-footer-link" style={{ display: 'block', fontSize: '13px', color: '#7A99B4', marginBottom: '9px', textDecoration: 'none', transition: 'color 0.18s', fontFamily: "'DM Sans', sans-serif" }}>
                {label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#0F2942', letterSpacing: '1px', textTransform: 'uppercase' as const, marginBottom: '16px', fontFamily: "'Space Grotesk', sans-serif" }}>
              Services
            </div>
            {[
              { label: 'Physical Exams', href: '/physical-exam' },
              { label: 'Mental Health', href: '/mental-health' },
              { label: 'Vision & Hearing', href: '/vision-hearing' },
              { label: 'Dental Care', href: '/dental-care' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="ig-footer-link" style={{ display: 'block', fontSize: '13px', color: '#7A99B4', marginBottom: '9px', textDecoration: 'none', transition: 'color 0.18s', fontFamily: "'DM Sans', sans-serif" }}>
                {label}
              </Link>
            ))}
          </div>

          {/* Resources */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#0F2942', letterSpacing: '1px', textTransform: 'uppercase' as const, marginBottom: '16px', fontFamily: "'Space Grotesk', sans-serif" }}>
              Resources
            </div>
            {[
              { label: 'FAQ', href: '/faq' },
              { label: 'Health Blog', href: '/blog' },
              { label: 'Book a Checkup', href: '/book-checkup' },
              { label: 'Health Guides', href: '/resources/guides' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="ig-footer-link" style={{ display: 'block', fontSize: '13px', color: '#7A99B4', marginBottom: '9px', textDecoration: 'none', transition: 'color 0.18s', fontFamily: "'DM Sans', sans-serif" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(37,99,235,0.08)',
            paddingTop: '24px', marginTop: '44px',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px',
          }}
        >
          <div style={{ fontSize: '12px', color: '#7A99B4', fontFamily: "'DM Sans', sans-serif" }}>
            © 2025 InstiGenie · All rights reserved
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            {[{ label: 'Privacy', href: '#' }, { label: 'Terms', href: '#' }, { label: 'Cookies', href: '#' }].map(({ label, href }) => (
              <a key={label} href={href} className="ig-footer-link" style={{ fontSize: '12px', color: '#7A99B4', textDecoration: 'none', transition: 'color 0.18s', fontFamily: "'DM Sans', sans-serif" }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .ig-footer-link:hover {
          color: #2563EB !important;
        }
      `}</style>
    </footer>
  );
}
