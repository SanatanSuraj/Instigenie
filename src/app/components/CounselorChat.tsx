'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'counselor';
  timestamp: Date;
}

function getCounselorResponse(message: string): string {
  const m = message.toLowerCase();
  if (m.includes('hello') || m.includes('hi')) return 'Hello! How can I help you today? 😊';
  if (m.includes('stress') || m.includes('anxious')) return "I understand you're feeling stressed. Let's talk about what's causing these feelings and explore some coping strategies together.";
  if (m.includes('sad') || m.includes('depressed')) return "I'm here to listen and support you. Would you like to tell me more about what's making you feel this way?";
  if (m.includes('help') || m.includes('support')) return "I'm here to help and support you. What specific concerns would you like to discuss?";
  if (m.includes('thank')) return "You're welcome! Remember, I'm here whenever you need to talk. 💙";
  return "I'm listening. Please tell me more about how you're feeling.";
}

export default function CounselorChat({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "Hello! I'm here to help. How are you feeling today? 😊", sender: 'counselor', timestamp: new Date() },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const handleSend = async () => {
    if (!newMessage.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), text: newMessage, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setNewMessage('');
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), text: getCounselorResponse(userMsg.text), sender: 'counselor', timestamp: new Date() }]);
      setIsTyping(false);
    }, 1400);
  };

  const fmt = (d: Date) => new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric' }).format(d);

  return (
    <div
      style={{
        position: 'fixed', bottom: 0, right: 0,
        width: '100%', maxWidth: '400px', height: '600px',
        background: '#FFFFFF',
        boxShadow: '0 -8px 40px rgba(37,99,235,0.18)',
        borderRadius: '20px 20px 0 0',
        display: 'flex', flexDirection: 'column',
        border: '1.5px solid rgba(20,184,166,0.20)',
        borderBottom: 'none',
        fontFamily: "'DM Sans', sans-serif",
        zIndex: 100,
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '14px 18px',
          borderBottom: '1.5px solid rgba(20,184,166,0.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #F0FDFA 0%, #EFF6FF 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(20,184,166,0.25)', flexShrink: 0 }}>
            <Image src="/images/profile/Warm School Nurse.png" alt="Counselor" width={40} height={40} className="object-cover" />
          </div>
          <div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 800, color: '#0F2942', lineHeight: 1.1 }}>School Counselor</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 5px #22C55E' }} />
              <span style={{ fontSize: '10px', color: '#0D9488', fontWeight: 600 }}>Online · Here to help</span>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          style={{ width: '28px', height: '28px', borderRadius: '8px', border: 'none', background: 'rgba(37,99,235,0.07)', color: '#7A99B4', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px', background: '#F8FAFF' }}>
        {messages.map(msg => (
          <div key={msg.id} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
            <div
              style={{
                maxWidth: '78%', padding: '10px 14px',
                borderRadius: msg.sender === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                background: msg.sender === 'user'
                  ? 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)'
                  : '#FFFFFF',
                color: msg.sender === 'user' ? '#fff' : '#0F2942',
                boxShadow: msg.sender === 'user' ? '0 2px 10px rgba(37,99,235,0.25)' : '0 1px 6px rgba(0,0,0,0.06)',
                border: msg.sender === 'counselor' ? '1px solid rgba(20,184,166,0.18)' : 'none',
                fontSize: '13px', lineHeight: 1.6,
              }}
            >
              <p style={{ margin: 0 }}>{msg.text}</p>
              <p style={{ margin: '4px 0 0', fontSize: '10px', opacity: 0.55 }}>{fmt(msg.timestamp)}</p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{ background: '#FFFFFF', border: '1px solid rgba(20,184,166,0.18)', borderRadius: '16px 16px 16px 4px', padding: '10px 14px', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {[0, 0.15, 0.3].map((d, i) => (
                  <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#14B8A6', animation: 'cdot 1.2s ease-in-out infinite', animationDelay: `${d}s` }} />
                ))}
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div style={{ padding: '12px 14px', borderTop: '1.5px solid rgba(37,99,235,0.08)', background: '#FFFFFF' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            style={{
              flex: 1, padding: '10px 14px', borderRadius: '10px',
              border: '1.5px solid rgba(37,99,235,0.18)', background: '#F8FAFF',
              fontSize: '13px', color: '#0F2942', outline: 'none',
              fontFamily: "'DM Sans', sans-serif",
            }}
          />
          <button
            onClick={handleSend}
            disabled={!newMessage.trim()}
            style={{
              width: '38px', height: '38px', borderRadius: '10px', border: 'none', flexShrink: 0,
              background: newMessage.trim() ? 'linear-gradient(135deg, #14B8A6, #0D9488)' : 'rgba(20,184,166,0.12)',
              color: newMessage.trim() ? '#fff' : '#7A99B4',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
              boxShadow: newMessage.trim() ? '0 2px 10px rgba(20,184,166,0.30)' : 'none',
            }}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes cdot { 0%,60%,100% { transform: translateY(0); opacity: 0.5; } 30% { transform: translateY(-5px); opacity: 1; } }
      `}</style>
    </div>
  );
}
