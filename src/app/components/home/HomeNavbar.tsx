'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HomeNavbar() {
  const router = useRouter();

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
        height: '66px',
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(37,99,235,0.08)',
        boxShadow: '0 1px 16px rgba(37,99,235,0.07)',
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <Image
          src="/images/logo.png"
          alt="InstiGenie"
          width={148}
          height={44}
          priority
          style={{ objectFit: 'contain', height: '40px', width: 'auto' }}
        />
      </Link>

      {/* Nav links */}
      <div className="hidden md:flex" style={{ alignItems: 'center', gap: '4px' }}>
        {[
          { label: 'Services', href: '/services' },
          { label: 'Schools', href: '/schools' },
          { label: 'Mental Health', href: '/mental-health' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'FAQ', href: '/faq' },
          { label: 'Blog', href: '/blog' },
          { label: 'About', href: '/about' },
        ].map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            style={{
              padding: '7px 16px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              color: '#3D5A73',
              cursor: 'pointer',
              transition: 'all 0.18s',
              textDecoration: 'none',
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '0.1px',
            }}
            className="ig-nav-link"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* AI Status chip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '5px 12px',
            borderRadius: '100px',
            border: '1px solid rgba(20,184,166,0.30)',
            background: 'rgba(20,184,166,0.07)',
            fontSize: '12px',
            fontWeight: 600,
            color: '#0D9488',
            fontFamily: "'DM Sans', sans-serif",
          }}
          className="hidden sm:flex"
        >
          <div
            className="ig-pulse"
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#14B8A6',
              boxShadow: '0 0 6px #14B8A6',
            }}
          />
          AI Online
        </div>

        <button
          onClick={() => router.push('/login')}
          style={{
            padding: '8px 20px',
            borderRadius: '9px',
            fontSize: '14px',
            fontWeight: 500,
            color: '#3D5A73',
            cursor: 'pointer',
            transition: 'all 0.18s',
            border: '1px solid rgba(37,99,235,0.15)',
            background: 'transparent',
            fontFamily: "'DM Sans', sans-serif",
          }}
          className="ig-btn-ghost hidden sm:block"
        >
          Sign In
        </button>

        <button
          onClick={() => router.push('/book-checkup')}
          style={{
            padding: '9px 20px',
            borderRadius: '9px',
            fontSize: '14px',
            fontWeight: 600,
            color: '#fff',
            cursor: 'pointer',
            border: 'none',
            fontFamily: "'DM Sans', sans-serif",
            background: 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)',
            boxShadow: '0 2px 14px rgba(37,99,235,0.25)',
            transition: 'all 0.22s',
          }}
          className="ig-btn-primary"
        >
          Book Checkup →
        </button>
      </div>

      <style jsx>{`
        .ig-nav-link:hover {
          color: #2563EB !important;
          background: rgba(37,99,235,0.05) !important;
        }
        .ig-btn-ghost:hover {
          color: #2563EB !important;
          border-color: rgba(37,99,235,0.30) !important;
          background: rgba(37,99,235,0.04) !important;
        }
        .ig-btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(37,99,235,0.35) !important;
        }
      `}</style>
    </nav>
  );
}
