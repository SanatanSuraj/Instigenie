'use client';

import { useEffect, useRef } from 'react';

export default function AIPanelSection() {
  const barRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      barRefs.current.forEach((bar) => {
        if (bar) {
          const w = bar.dataset.width || '0%';
          bar.style.width = '0%';
          setTimeout(() => { bar.style.width = w; }, 100);
        }
      });
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="ig-reveal"
      style={{
        padding: '80px 24px 90px',
        background: 'linear-gradient(160deg, #F0FDFA 0%, #EFF6FF 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontSize: '12px', fontWeight: 600, color: '#0D9488',
            letterSpacing: '2px', textTransform: 'uppercase' as const,
            marginBottom: '14px', fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px' }} />
          AI Intelligence
        </div>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
            letterSpacing: '-1.5px', color: '#0F2942', marginBottom: '10px',
          }}
        >
          Your AI Health Copilot
        </h2>
        <p style={{ fontSize: '17px', color: '#3D5A73', lineHeight: 1.6, maxWidth: '520px', fontFamily: "'DM Sans', sans-serif", marginBottom: '48px' }}>
          Real-time insights, smart suggestions, and live activity — all from a single intelligent dashboard.
        </p>

        {/* Panel */}
        <div
          style={{
            borderRadius: '22px',
            border: '1.5px solid rgba(37,99,235,0.12)',
            background: '#FFFFFF',
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(37,99,235,0.09)',
          }}
        >
          {/* Panel header bar */}
          <div
            style={{
              padding: '18px 24px',
              borderBottom: '1px solid rgba(37,99,235,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: 'linear-gradient(90deg, #EFF6FF, #F0FDFA)',
              flexWrap: 'wrap', gap: '12px',
            }}
          >
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '14px', fontWeight: 700, color: '#0F2942',
                display: 'flex', alignItems: 'center', gap: '10px',
              }}
            >
              <div
                style={{
                  width: '28px', height: '28px', borderRadius: '7px',
                  background: 'linear-gradient(135deg, #2563EB, #14B8A6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '12px', fontWeight: 700, color: '#fff',
                  fontFamily: "'Space Grotesk', sans-serif",
                  boxShadow: '0 2px 8px rgba(37,99,235,0.25)',
                }}
              >
                AI
              </div>
              InstiGenie AI — Health Intelligence Console
            </div>
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                fontSize: '12px', color: '#0D9488', fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif",
                background: 'rgba(20,184,166,0.07)',
                padding: '4px 12px', borderRadius: '100px',
                border: '1px solid rgba(20,184,166,0.22)',
              }}
            >
              <div
                className="ig-pulse"
                style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#14B8A6', boxShadow: '0 0 6px #14B8A6' }}
              />
              Processing 47 assessments
            </div>
          </div>

          {/* Body */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {/* Left: Chat */}
            <div style={{ padding: '24px', borderRight: '1px solid rgba(37,99,235,0.08)' }}>
              <div
                style={{
                  fontSize: '11px', fontWeight: 700, color: '#7A99B4',
                  letterSpacing: '1px', textTransform: 'uppercase' as const,
                  marginBottom: '16px', fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                AI Consultation
              </div>

              {/* AI message */}
              <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '32px', height: '32px', borderRadius: '8px', flexShrink: 0,
                    background: 'linear-gradient(135deg, #2563EB, #14B8A6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '11px', fontWeight: 700, color: '#fff',
                    fontFamily: "'Space Grotesk', sans-serif",
                    boxShadow: '0 2px 8px rgba(37,99,235,0.20)',
                  }}
                >
                  AI
                </div>
                <div
                  style={{
                    background: 'linear-gradient(135deg, #EFF6FF, #F0FDFA)',
                    border: '1px solid rgba(20,184,166,0.20)',
                    borderRadius: '4px 12px 12px 12px',
                    padding: '11px 14px', fontSize: '13px',
                    color: '#0F2942', lineHeight: 1.6, flex: 1,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  I&apos;ve analyzed today&apos;s batch of 47 students. 3 flagged for vision follow-up, 1 urgent referral for dental. Reports sent to parents.
                </div>
              </div>

              {/* User message */}
              <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '32px', height: '32px', borderRadius: '8px', flexShrink: 0,
                    background: '#F1F5F9',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '10px', fontWeight: 700, color: '#64748B',
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  You
                </div>
                <div
                  style={{
                    background: '#F8FAFC',
                    border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: '12px 12px 4px 12px',
                    padding: '11px 14px', fontSize: '13px',
                    color: '#3D5A73', lineHeight: 1.6, flex: 1,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Which students need urgent attention today?
                </div>
              </div>

              {/* Typing dots */}
              <div style={{ paddingLeft: '42px', marginBottom: '16px' }}>
                <div
                  style={{
                    display: 'flex', gap: '4px', padding: '10px 14px',
                    background: '#F8FAFC', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: '12px', width: 'fit-content',
                  }}
                >
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="ig-typing-dot"
                      style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7A99B4' }}
                    />
                  ))}
                </div>
              </div>

              {/* Input */}
              <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                <input
                  type="text"
                  placeholder="Ask AI about any student's health..."
                  className="ig-ai-input"
                  style={{
                    flex: 1, padding: '11px 16px', borderRadius: '10px',
                    border: '1.5px solid rgba(37,99,235,0.15)',
                    background: '#F8FAFC', color: '#0F2942',
                    fontSize: '13px', fontFamily: "'DM Sans', sans-serif",
                    outline: 'none', transition: 'all 0.22s',
                  }}
                />
                <button
                  className="ig-send-btn"
                  style={{
                    padding: '11px 18px', borderRadius: '10px', border: 'none',
                    background: 'linear-gradient(135deg, #2563EB, #14B8A6)',
                    color: '#fff', fontSize: '13px', fontWeight: 600,
                    cursor: 'pointer', transition: 'all 0.22s',
                    fontFamily: "'DM Sans', sans-serif",
                    boxShadow: '0 2px 10px rgba(37,99,235,0.22)',
                  }}
                >
                  Send ↑
                </button>
              </div>
            </div>

            {/* Right: Metrics */}
            <div style={{ padding: '24px' }}>
              <div
                style={{
                  fontSize: '11px', fontWeight: 700, color: '#7A99B4',
                  letterSpacing: '1px', textTransform: 'uppercase' as const,
                  marginBottom: '16px', fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                Live Insights
              </div>

              {[
                { label: 'Overall Health Score', value: '87%', width: '87%', valueColor: '#16A34A', barGradient: 'linear-gradient(90deg,#15803d,#22C55E)' },
                { label: 'Screening Completion',  value: '94%', width: '94%', valueColor: '#2563EB', barGradient: 'linear-gradient(90deg,#1D4ED8,#38BDF8)' },
                { label: 'Pending Reviews',        value: '11',  width: '22%', valueColor: '#D97706', barGradient: 'linear-gradient(90deg,#B45309,#F59E0B)' },
              ].map((metric, idx) => (
                <div
                  key={metric.label}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '12px 0', borderBottom: idx < 2 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '13px', color: '#3D5A73', marginBottom: '7px', fontFamily: "'DM Sans', sans-serif" }}>
                      {metric.label}
                    </div>
                    <div style={{ height: '5px', background: 'rgba(0,0,0,0.06)', borderRadius: '100px', overflow: 'hidden', width: '180px' }}>
                      <div
                        ref={(el) => { if (el) barRefs.current[idx] = el; }}
                        data-width={metric.width}
                        style={{ height: '100%', borderRadius: '100px', width: metric.width, background: metric.barGradient, transition: 'width 1s ease' }}
                      />
                    </div>
                  </div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', fontWeight: 700, color: metric.valueColor, marginLeft: '16px' }}>
                    {metric.value}
                  </div>
                </div>
              ))}

              <div style={{ height: '1px', background: 'rgba(0,0,0,0.05)', margin: '20px 0' }} />

              <div
                style={{
                  fontSize: '11px', fontWeight: 700, color: '#7A99B4',
                  letterSpacing: '1px', textTransform: 'uppercase' as const,
                  marginBottom: '12px', fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                Activity Feed
              </div>

              {[
                { icon: '✓', bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.22)', iconColor: '#16A34A', text: (<><strong style={{ color: '#0F2942', fontWeight: 600 }}>Grade 5A</strong> — Vision screening completed</>), time: '2 min ago' },
                { icon: '⚠', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.25)', iconColor: '#D97706', text: (<><strong style={{ color: '#0F2942', fontWeight: 600 }}>Arjun S.</strong> — Flagged for dental follow-up</>), time: '8 min ago' },
                { icon: '📊', bg: 'rgba(37,99,235,0.07)', border: 'rgba(37,99,235,0.18)', iconColor: '#2563EB', text: (<><strong style={{ color: '#0F2942', fontWeight: 600 }}>Monthly report</strong> — Generated & sent to principal</>), time: '1 hr ago' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: '11px',
                    padding: '10px 0', borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.04)' : 'none',
                  }}
                >
                  <div
                    style={{
                      width: '28px', height: '28px', borderRadius: '7px', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '13px', background: item.bg, border: `1px solid ${item.border}`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', color: '#3D5A73', lineHeight: 1.5, fontFamily: "'DM Sans', sans-serif" }}>
                      {item.text}
                    </div>
                    <div style={{ fontSize: '11px', color: '#7A99B4', marginTop: '2px', fontFamily: "'DM Sans', sans-serif" }}>
                      {item.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ig-ai-input::placeholder { color: #7A99B4; }
        .ig-ai-input:focus {
          border-color: rgba(20,184,166,0.50) !important;
          box-shadow: 0 0 0 3px rgba(20,184,166,0.10) !important;
          background: #fff !important;
        }
        .ig-send-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(37,99,235,0.30) !important;
        }
      `}</style>
    </section>
  );
}
