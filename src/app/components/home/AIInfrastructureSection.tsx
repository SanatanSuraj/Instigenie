'use client';

const techLayers = [
  {
    icon: '🤖',
    label: 'AI Diagnostic Layer',
    desc: 'Edge computing for instant analysis of vision, dental & skin images without internet dependency.',
    color: '#2563EB',
    bg: '#EFF6FF',
    border: 'rgba(37,99,235,0.15)',
  },
  {
    icon: '☁️',
    label: 'Cloud Student Record',
    desc: 'Secure, longitudinal health profile storage compliant with data privacy laws. ABDM Integration Ready.',
    color: '#0D9488',
    bg: '#F0FDFA',
    border: 'rgba(20,184,166,0.18)',
  },
  {
    icon: '📱',
    label: 'Parent Dashboard',
    desc: 'App & web access for parents to view reports, referrals & health tips in real time.',
    color: '#0284C7',
    bg: '#F0F9FF',
    border: 'rgba(56,189,248,0.18)',
  },
  {
    icon: '📊',
    label: 'School Analytics',
    desc: "Principal's view of class-wise health status & intervention needs with drill-down capability.",
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: 'rgba(124,58,237,0.15)',
  },
  {
    icon: '📋',
    label: 'District Reports',
    desc: 'Anonymized macro-data for government policy & resource planning. National policy dashboards.',
    color: '#16A34A',
    bg: '#F0FDF4',
    border: 'rgba(34,197,94,0.18)',
  },
];

type Tag = { label: string; color: string; bg: string; border: string };

const complianceTags: Tag[] = [
  { label: 'RBSK Ready',      color: '#2563EB', bg: 'rgba(37,99,235,0.07)',   border: 'rgba(37,99,235,0.20)' },
  { label: 'ABDM Compatible', color: '#0D9488', bg: 'rgba(20,184,166,0.07)',  border: 'rgba(20,184,166,0.22)' },
  { label: 'EMIG Sync',       color: '#0284C7', bg: 'rgba(56,189,248,0.07)',  border: 'rgba(56,189,248,0.22)' },
];
const archTags: Tag[] = [
  { label: 'Offline-First',    color: '#7C3AED', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.18)' },
  { label: 'Edge AI',          color: '#16A34A', bg: 'rgba(34,197,94,0.06)',  border: 'rgba(34,197,94,0.18)' },
  { label: 'Rural-Deployable', color: '#D97706', bg: 'rgba(217,119,6,0.06)',  border: 'rgba(217,119,6,0.18)' },
];
const securityTags: Tag[] = [
  { label: 'Role-Based Access',      color: '#DC2626', bg: 'rgba(220,38,38,0.06)',  border: 'rgba(220,38,38,0.16)' },
  { label: 'End-to-End Encryption',  color: '#0284C7', bg: 'rgba(56,189,248,0.06)', border: 'rgba(56,189,248,0.18)' },
  { label: 'Anonymized Aggregation', color: '#16A34A', bg: 'rgba(34,197,94,0.06)',  border: 'rgba(34,197,94,0.18)' },
];
const aiCapTags: Tag[] = [
  { label: 'Vision Screening',   color: '#2563EB', bg: 'rgba(37,99,235,0.07)',  border: 'rgba(37,99,235,0.20)' },
  { label: 'Oral Cavity AI',     color: '#0D9488', bg: 'rgba(20,184,166,0.07)', border: 'rgba(20,184,166,0.22)' },
  { label: 'Anomaly Detection',  color: '#7C3AED', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.18)' },
  { label: 'Predictive Modeling',color: '#16A34A', bg: 'rgba(34,197,94,0.06)',  border: 'rgba(34,197,94,0.18)' },
];

const impactStats = [
  { value: '+12%', label: 'Attendance',    sub: 'Post-intervention', color: '#16A34A', bg: '#F0FDF4', border: 'rgba(34,197,94,0.20)',   featured: true  },
  { value: '92%',  label: 'Coverage',      sub: '28,450 students',   color: '#D97706', bg: '#FFFBEB', border: 'rgba(217,119,6,0.18)',  featured: false },
  { value: '78%',  label: 'Referral Rate', sub: 'Closed in 60 days', color: '#0D9488', bg: '#F0FDFA', border: 'rgba(20,184,166,0.18)', featured: false },
];

function TagGroup({ heading, tags }: { heading: string; tags: Tag[] }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div
        style={{
          fontSize: '10px', fontWeight: 700, letterSpacing: '2px',
          color: '#7A99B4', textTransform: 'uppercase' as const,
          marginBottom: '10px', fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        // {heading}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '8px' }}>
        {tags.map((t) => (
          <span
            key={t.label}
            style={{
              padding: '5px 13px', borderRadius: '100px',
              fontSize: '11.5px', fontWeight: 600,
              color: t.color, background: t.bg,
              border: `1.5px solid ${t.border}`,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {t.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AIInfrastructureSection() {
  return (
    <section
      className="ig-reveal"
      style={{
        padding: '80px 24px 90px',
        background: '#FFFFFF',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '52px' }}>
          <div
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              fontSize: '12px', fontWeight: 600, color: '#0D9488',
              letterSpacing: '2px', textTransform: 'uppercase' as const,
              marginBottom: '14px', fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#14B8A6', borderRadius: '2px' }} />
            Technology Backbone
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800,
              letterSpacing: '-1.5px', color: '#0F2942',
              marginBottom: '14px',
            }}
          >
            AI-first infrastructure
          </h2>
          <p
            style={{
              fontSize: '17px', color: '#3D5A73',
              fontFamily: "'DM Sans', sans-serif", lineHeight: 1.65,
              maxWidth: '520px',
            }}
          >
            Built for India&apos;s challenging connectivity landscape — offline-first, RBSK-interoperable, and ABDM-ready.
          </p>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
          }}
        >
          {/* Left: Tech stack */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {techLayers.map((layer, i) => (
                <div key={layer.label}>
                  <div
                    className="ig-tech-layer"
                    style={{
                      display: 'flex', gap: '14px', alignItems: 'flex-start',
                      padding: '18px 20px',
                      borderRadius: '14px',
                      background: '#FFFFFF',
                      border: `1.5px solid ${layer.border}`,
                      boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                      transition: 'all 0.22s',
                    }}
                  >
                    <div
                      style={{
                        width: '40px', height: '40px', borderRadius: '10px',
                        background: layer.bg,
                        border: `1.5px solid ${layer.border}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '17px', flexShrink: 0,
                      }}
                    >
                      {layer.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '13px', fontWeight: 700,
                          color: layer.color, marginBottom: '4px',
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        {layer.label}
                      </div>
                      <div
                        style={{
                          fontSize: '13px', color: '#3D5A73',
                          lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        {layer.desc}
                      </div>
                    </div>
                  </div>

                  {i < techLayers.length - 1 && (
                    <div
                      style={{
                        textAlign: 'center', padding: '5px 0',
                        color: '#7A99B4', fontSize: '14px',
                      }}
                    >
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tags + Impact */}
          <div>
            <div
              style={{
                padding: '28px 24px',
                borderRadius: '20px',
                background: 'linear-gradient(160deg, #F8FAFF, #F0FDFA)',
                border: '1.5px solid rgba(37,99,235,0.10)',
                marginBottom: '20px',
              }}
            >
              <TagGroup heading="Compliance & Integration" tags={complianceTags} />
              <TagGroup heading="Architecture" tags={archTags} />
              <TagGroup heading="Security" tags={securityTags} />
              <TagGroup heading="AI Capabilities" tags={aiCapTags} />
            </div>

            {/* Impact stats */}
            <div>
              <div
                style={{
                  fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px',
                  color: '#7A99B4', textTransform: 'uppercase' as const,
                  marginBottom: '12px', fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                Measured Impact — Live Pilot
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '12px',
                }}
              >
                {impactStats.map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      padding: '18px 14px',
                      borderRadius: '14px',
                      background: stat.bg,
                      border: `1.5px solid ${stat.border}`,
                      textAlign: 'center' as const,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: stat.featured ? '30px' : '24px',
                        fontWeight: 800,
                        color: stat.color,
                        letterSpacing: '-1px',
                        marginBottom: '4px',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: '12px', fontWeight: 700,
                        color: '#0F2942',
                        fontFamily: "'Space Grotesk', sans-serif",
                        marginBottom: '2px',
                      }}
                    >
                      {stat.label}
                    </div>
                    <div
                      style={{
                        fontSize: '11px', color: '#7A99B4',
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ig-tech-layer:hover {
          transform: translateX(5px);
          box-shadow: 0 6px 22px rgba(37,99,235,0.09) !important;
        }
      `}</style>
    </section>
  );
}
