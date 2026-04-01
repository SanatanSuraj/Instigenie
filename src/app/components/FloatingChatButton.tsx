'use client';

export default function FloatingChatButton() {
  const handleOpenChat = () => {
    window.open('/chat', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleOpenChat}
        aria-label="Open Health Chat - Talk to AIRA"
        style={{
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          background: 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)',
          boxShadow: '0 6px 24px rgba(37,99,235,0.40)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.25s',
          position: 'relative',
        }}
        className="ig-fab"
      >
        {/* Pulse ring */}
        <span
          style={{
            position: 'absolute',
            inset: '-4px',
            borderRadius: '50%',
            border: '2px solid rgba(37,99,235,0.35)',
            animation: 'fab-pulse 2.5s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        />
        <svg
          width="22"
          height="22"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>

        {/* "AI" label badge */}
        <span
          style={{
            position: 'absolute',
            top: '-4px',
            right: '-4px',
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            background: '#22C55E',
            border: '2px solid #fff',
            fontSize: '8px',
            fontWeight: 800,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Space Grotesk', sans-serif",
            boxShadow: '0 0 8px rgba(34,197,94,0.60)',
          }}
        >
          AI
        </span>
      </button>

      <style jsx>{`
        .ig-fab:hover {
          transform: scale(1.10) translateY(-2px);
          box-shadow: 0 10px 32px rgba(37,99,235,0.50) !important;
        }
        @keyframes fab-pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.18); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
