"use client"

import { useState, useRef, useEffect } from "react"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ type: "user" | "bot"; content: string }[]>([
    { type: "bot", content: "Hi! I'm AIRA, your AI Health Assistant. How can I help you today? 🌟" },
  ])
  const [isProcessing, setIsProcessing] = useState(false)
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }) }, [messages])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const message = input.trim()
    if (message && !isProcessing) {
      setIsProcessing(true)
      const userMessage = { type: "user" as const, content: message }
      const newMessages = [...messages, userMessage]
      setMessages(newMessages)
      setInput("")
      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: newMessages }),
        })
        if (!response.ok) throw new Error("Failed to get response")
        const data = await response.json()
        setMessages(prev => [...prev, { type: "bot", content: data.content }])
      } catch {
        setMessages(prev => [...prev, { type: "bot", content: "⚠️ Sorry, I encountered an error. Please try again." }])
      } finally {
        setIsProcessing(false)
      }
    }
  }

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 50,
            background: 'rgba(15,41,66,0.35)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false) }}
        >
          <div
            style={{
              background: '#FFFFFF',
              width: '100%', maxWidth: '460px',
              height: '580px',
              borderRadius: '20px 20px 0 0',
              boxShadow: '0 -8px 40px rgba(37,99,235,0.18)',
              display: 'flex', flexDirection: 'column',
              overflow: 'hidden',
              border: '1.5px solid rgba(37,99,235,0.10)',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: '16px 20px',
                borderBottom: '1.5px solid rgba(37,99,235,0.08)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: 'linear-gradient(135deg, #EFF6FF 0%, #F0FDFA 100%)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #2563EB, #14B8A6)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(37,99,235,0.25)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 800, color: '#0F2942', lineHeight: 1.1 }}>AIRA</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 4px #22C55E' }} />
                    <span style={{ fontSize: '10px', color: '#0D9488', fontWeight: 600 }}>AI Health Assistant · Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{ width: '28px', height: '28px', borderRadius: '8px', border: 'none', background: 'rgba(37,99,235,0.07)', color: '#7A99B4', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', background: '#F8FAFF' }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div
                    style={{
                      maxWidth: '80%', padding: '10px 14px', borderRadius: msg.type === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      fontSize: '13px', lineHeight: 1.6,
                      background: msg.type === 'user'
                        ? 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)'
                        : '#FFFFFF',
                      color: msg.type === 'user' ? '#FFFFFF' : '#0F2942',
                      boxShadow: msg.type === 'user' ? '0 2px 10px rgba(37,99,235,0.25)' : '0 1px 6px rgba(0,0,0,0.06)',
                      border: msg.type === 'bot' ? '1px solid rgba(37,99,235,0.10)' : 'none',
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isProcessing && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{ background: '#FFFFFF', borderRadius: '16px 16px 16px 4px', padding: '10px 14px', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', border: '1px solid rgba(37,99,235,0.10)' }}>
                    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                      {[0, 0.15, 0.3].map((d, i) => (
                        <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#14B8A6', animation: 'wdot 1.2s ease-in-out infinite', animationDelay: `${d}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div style={{ padding: '12px 16px', borderTop: '1.5px solid rgba(37,99,235,0.08)', background: '#FFFFFF' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  name="message"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder={isProcessing ? "Processing..." : "Ask AIRA anything..."}
                  disabled={isProcessing}
                  style={{
                    flex: 1, padding: '10px 14px', borderRadius: '10px',
                    border: '1.5px solid rgba(37,99,235,0.18)', background: '#F8FAFF',
                    fontSize: '13px', color: '#0F2942', outline: 'none',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                />
                <button
                  type="submit"
                  disabled={isProcessing || !input.trim()}
                  style={{
                    width: '38px', height: '38px', borderRadius: '10px', border: 'none', flexShrink: 0,
                    background: isProcessing || !input.trim() ? 'rgba(37,99,235,0.12)' : 'linear-gradient(135deg, #2563EB, #14B8A6)',
                    color: isProcessing || !input.trim() ? '#7A99B4' : '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                  }}
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes wdot { 0%,60%,100% { transform: translateY(0); opacity: 0.5; } 30% { transform: translateY(-5px); opacity: 1; } }
      `}</style>
    </>
  )
}
