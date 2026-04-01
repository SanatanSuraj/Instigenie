'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/messages');
        if (response.ok) router.push('/chat');
      } catch { /* Not logged in */ }
    };
    checkAuth();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (mode === 'login') {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (response.ok) { router.push('/chat'); }
        else { setError(data.error || 'Invalid credentials. Please try again.'); }
      } catch {
        setError('Network error. Please check your connection and try again.');
      } finally { setLoading(false); }
    } else {
      // Signup — for now use the same login flow (backend limitation)
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (response.ok) { router.push('/chat'); }
        else { setError(data.error || 'Sign up failed. Please try with demo credentials.'); }
      } catch {
        setError('Network error. Please try again.');
      } finally { setLoading(false); }
    }
  };

  const fillDemo = () => {
    setUsername('testuser');
    setPassword('testpass');
    setError('');
  };

  const features = [
    { icon: '🧠', title: 'Mental Health Support', desc: 'AI-powered counseling and emotional wellness' },
    { icon: '💪', title: 'Physical Wellness', desc: 'Track health vitals and physical activity' },
    { icon: '🤝', title: 'Peer Connections', desc: 'Safe space for social & relationship guidance' },
    { icon: '🔒', title: 'Completely Private', desc: 'Your conversations are confidential & secure' },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        background: '#EFF6FF',
        fontFamily: "'DM Sans', sans-serif",
        overflow: 'hidden',
      }}
    >
      {/* ─── Left panel — brand / features ─── */}
      <div
        style={{
          display: 'none',
          flex: 1,
          background: 'linear-gradient(160deg, #EFF6FF 0%, #F0FDFA 50%, #ECFDF5 100%)',
          borderRight: '1.5px solid rgba(37,99,235,0.10)',
          padding: '56px 48px',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="ig-left-panel"
      >
        {/* Orbs */}
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.20), transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '250px', height: '250px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(20,184,166,0.18), transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />

        {/* Logo & name */}
        <div style={{ position: 'relative' }}>
          <div style={{ marginBottom: '48px' }}>
            <Link href="/" style={{ display: 'inline-block', textDecoration: 'none' }}>
              <Image
                src="/images/logo.png"
                alt="InstiGenie"
                width={160}
                height={48}
                priority
                style={{ objectFit: 'contain', height: '44px', width: 'auto' }}
              />
            </Link>
          </div>

          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1.5px', color: '#0F2942', marginBottom: '16px' }}>
            Your personal health<br />
            <span style={{ background: 'linear-gradient(90deg, #2563EB, #14B8A6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              companion — AIRA
            </span>
          </h1>
          <p style={{ fontSize: '15px', color: '#3D5A73', lineHeight: 1.72, marginBottom: '40px' }}>
            Designed especially for students (classes 5–12). Talk to AIRA whenever you need — it&apos;s private, friendly, and completely judgment-free.
          </p>

          {/* Feature list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {features.map((f) => (
              <div key={f.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '16px', borderRadius: '14px', background: 'rgba(255,255,255,0.80)', backdropFilter: 'blur(12px)', border: '1.5px solid rgba(37,99,235,0.09)', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(20,184,166,0.10))', border: '1.5px solid rgba(37,99,235,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', fontWeight: 700, color: '#0F2942', marginBottom: '2px' }}>{f.title}</div>
                  <div style={{ fontSize: '12px', color: '#7A99B4' }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom trust badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.80)', border: '1px solid rgba(20,184,166,0.18)', marginTop: '32px' }}>
          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px #22C55E', flexShrink: 0 }} />
          <span style={{ fontSize: '12px', color: '#0D9488', fontWeight: 600 }}>HIPAA & DPDP Compliant · Student Data Protected</span>
        </div>
      </div>

      {/* ─── Right panel — form ─── */}
      <div
        style={{
          flex: '0 0 auto',
          width: '100%',
          maxWidth: '480px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '40px 32px',
          position: 'relative',
        }}
      >
        {/* Top logo (mobile / always visible) */}
        <div style={{ marginBottom: '36px' }}>
          <Link href="/" style={{ display: 'inline-block', textDecoration: 'none' }}>
            <Image
              src="/images/logo.png"
              alt="InstiGenie"
              width={148}
              height={44}
              priority
              style={{ objectFit: 'contain', height: '40px', width: 'auto' }}
            />
          </Link>
        </div>

        {/* Card */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1.5px solid rgba(37,99,235,0.10)',
            boxShadow: '0 8px 40px rgba(37,99,235,0.10), 0 2px 12px rgba(0,0,0,0.04)',
            padding: '36px 32px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Corner accent */}
          <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '150px', height: '150px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.12), transparent 70%)', pointerEvents: 'none' }} />

          {/* Tab switcher */}
          <div style={{ display: 'flex', background: '#F1F5F9', borderRadius: '12px', padding: '4px', marginBottom: '28px', position: 'relative' }}>
            {(['login', 'signup'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => { setMode(tab); setError(''); setSuccess(''); }}
                style={{
                  flex: 1, padding: '10px', borderRadius: '9px', border: 'none',
                  fontSize: '14px', fontWeight: 700, cursor: 'pointer',
                  fontFamily: "'Space Grotesk', sans-serif",
                  transition: 'all 0.22s',
                  background: mode === tab ? '#FFFFFF' : 'transparent',
                  color: mode === tab ? '#0F2942' : '#7A99B4',
                  boxShadow: mode === tab ? '0 2px 8px rgba(37,99,235,0.12)' : 'none',
                }}
              >
                {tab === 'login' ? '🔑 Sign In' : '✨ Sign Up'}
              </button>
            ))}
          </div>

          {/* Heading */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 800, color: '#0F2942', marginBottom: '4px' }}>
              {mode === 'login' ? 'Welcome back!' : 'Create your account'}
            </h2>
            <p style={{ fontSize: '13px', color: '#7A99B4' }}>
              {mode === 'login'
                ? 'Sign in to continue chatting with AIRA'
                : 'Join thousands of students using AIRA today'
              }
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {mode === 'signup' && (
              <>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#3D5A73', marginBottom: '6px', letterSpacing: '0.3px' }}>Full Name</label>
                  <input
                    type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your full name"
                    style={{ ...inputSty }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#3D5A73', marginBottom: '6px', letterSpacing: '0.3px' }}>Email Address</label>
                  <input
                    type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com"
                    style={{ ...inputSty }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#3D5A73', marginBottom: '6px', letterSpacing: '0.3px' }}>Grade / Class</label>
                  <select value={grade} onChange={e => setGrade(e.target.value)} style={{ ...inputSty }}>
                    <option value="">Select your grade</option>
                    {['5', '6', '7', '8', '9', '10', '11', '12'].map(g => (
                      <option key={g} value={g}>Class {g}</option>
                    ))}
                  </select>
                </div>
              </>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#3D5A73', marginBottom: '6px', letterSpacing: '0.3px' }}>Username</label>
              <input
                id="username" type="text" required value={username} onChange={e => setUsername(e.target.value)}
                placeholder="Enter your username"
                style={{ ...inputSty }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#3D5A73', letterSpacing: '0.3px' }}>Password</label>
                {mode === 'login' && <span style={{ fontSize: '12px', color: '#2563EB', cursor: 'pointer', fontWeight: 600 }}>Forgot password?</span>}
              </div>
              <div style={{ position: 'relative' }}>
                <input
                  id="password" type={showPassword ? 'text' : 'password'} required value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  style={{ ...inputSty, paddingRight: '44px' }}
                />
                <button
                  type="button" onClick={() => setShowPassword(s => !s)}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#7A99B4', padding: '2px' }}
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    {showPassword
                      ? <><path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></>
                      : <><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>
                    }
                  </svg>
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div style={{ padding: '12px 14px', borderRadius: '10px', background: 'rgba(239,68,68,0.06)', border: '1.5px solid rgba(239,68,68,0.22)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>⚠️</span>
                <p style={{ fontSize: '13px', color: '#DC2626', margin: 0 }}>{error}</p>
              </div>
            )}

            {/* Success */}
            {success && (
              <div style={{ padding: '12px 14px', borderRadius: '10px', background: 'rgba(34,197,94,0.06)', border: '1.5px solid rgba(34,197,94,0.25)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>✅</span>
                <p style={{ fontSize: '13px', color: '#16A34A', margin: 0 }}>{success}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit" disabled={loading}
              style={{
                width: '100%', padding: '14px', borderRadius: '12px', border: 'none',
                fontSize: '15px', fontWeight: 700, color: '#fff', cursor: loading ? 'not-allowed' : 'pointer',
                background: loading ? 'rgba(37,99,235,0.40)' : 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)',
                boxShadow: loading ? 'none' : '0 4px 18px rgba(37,99,235,0.32)',
                transition: 'all 0.25s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {loading ? (
                <>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.35)', borderTopColor: '#fff', animation: 'lspin 0.7s linear infinite' }} />
                  {mode === 'login' ? 'Signing in...' : 'Creating account...'}
                </>
              ) : (
                <>{mode === 'login' ? '🔑 Sign In to AIRA' : '✨ Create My Account'}</>
              )}
            </button>
          </form>

          {/* Demo credentials */}
          <div style={{ marginTop: '20px', padding: '14px 16px', borderRadius: '12px', background: 'linear-gradient(135deg, #EFF6FF, #F0FDFA)', border: '1.5px solid rgba(37,99,235,0.12)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '13px' }}>🎯</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', fontWeight: 700, color: '#2563EB' }}>Demo Access</span>
              </div>
              <button
                onClick={fillDemo}
                style={{ fontSize: '11px', fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, #2563EB, #14B8A6)', border: 'none', padding: '5px 12px', borderRadius: '7px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}
              >
                📋 Auto-fill
              </button>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', background: '#fff', border: '1px solid rgba(37,99,235,0.12)' }}>
                <div style={{ fontSize: '10px', color: '#7A99B4', fontWeight: 600, marginBottom: '2px' }}>USERNAME</div>
                <div style={{ fontSize: '13px', fontFamily: 'monospace', color: '#0F2942', fontWeight: 700 }}>testuser</div>
              </div>
              <div style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', background: '#fff', border: '1px solid rgba(37,99,235,0.12)' }}>
                <div style={{ fontSize: '10px', color: '#7A99B4', fontWeight: 600, marginBottom: '2px' }}>PASSWORD</div>
                <div style={{ fontSize: '13px', fontFamily: 'monospace', color: '#0F2942', fontWeight: 700 }}>testpass</div>
              </div>
            </div>
          </div>

          {/* Switch mode link */}
          <p style={{ textAlign: 'center', fontSize: '13px', color: '#7A99B4', marginTop: '18px' }}>
            {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError(''); }}
              style={{ color: '#2563EB', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}
            >
              {mode === 'login' ? 'Sign up free →' : 'Sign in →'}
            </button>
          </p>
        </div>

        {/* Trust badges below card */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '20px', flexWrap: 'wrap' }}>
          {['🔒 Private & Secure', '🏥 HIPAA Compliant', '🇮🇳 DPDP Certified'].map(badge => (
            <span key={badge} style={{ fontSize: '11px', color: '#7A99B4', fontWeight: 500 }}>{badge}</span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ig-left-panel { display: flex !important; }
        @media (max-width: 768px) { .ig-left-panel { display: none !important; } }
        @keyframes lspin { to { transform: rotate(360deg); } }
        input:focus, select:focus { border-color: rgba(20,184,166,0.50) !important; background: #fff !important; box-shadow: 0 0 0 3px rgba(20,184,166,0.10) !important; outline: none; }
      `}</style>
    </div>
  );
}

const inputSty: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '10px',
  border: '1.5px solid rgba(37,99,235,0.18)',
  background: '#F8FAFF',
  color: '#0F2942',
  fontSize: '14px',
  fontFamily: "'DM Sans', sans-serif",
  outline: 'none',
  transition: 'all 0.2s',
  boxSizing: 'border-box',
};
