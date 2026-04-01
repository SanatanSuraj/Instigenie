'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface Message {
  id?: string;
  role: 'user' | 'ai';
  content: string;
  timestamp?: Date;
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message: string;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  abort(): void;
  onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => void) | null;
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => void) | null;
  onstart: ((this: SpeechRecognition, ev: Event) => void) | null;
  onend: ((this: SpeechRecognition, ev: Event) => void) | null;
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

const QUICK_PROMPTS = [
  { label: '😰 School stress', text: "I'm feeling stressed about school" },
  { label: '😴 Sleep issues', text: "I'm having trouble sleeping" },
  { label: '👥 Friend troubles', text: "I'm having problems with friends" },
  { label: '😟 Feeling anxious', text: 'I feel anxious or worried' },
  { label: '💪 Physical health', text: 'I want to talk about my health' },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const [micPermission, setMicPermission] = useState<'granted' | 'denied' | 'prompt' | 'checking'>('checking');
  const [permissionError, setPermissionError] = useState<string | null>(null);

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  const handleNewChat = () => {
    if (messages.length > 0) {
      const confirmed = window.confirm("Start a new chat? Your current conversation will be saved but you'll start fresh.");
      if (!confirmed) return;
    }
    setMessages([]);
    setInput('');
    if (synthRef.current) { synthRef.current.cancel(); setIsSpeaking(false); }
    if (recognitionRef.current && isListening) { recognitionRef.current.stop(); setIsListening(false); }
  };

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  useEffect(() => {
    const initializeVoice = async () => {
      const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognitionAPI) {
        setVoiceSupported(true);
        recognitionRef.current = new SpeechRecognitionAPI();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = 'en-US';
        recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
          const transcript = event.results[0][0].transcript.trim();
          if (transcript) { setInput(transcript); setIsListening(false); setTimeout(() => handleVoiceMessage(transcript), 500); }
        };
        recognitionRef.current.onerror = (event: SpeechRecognitionErrorEvent) => {
          setIsListening(false);
          if (event.error === 'not-allowed') { setMicPermission('denied'); setPermissionError('Microphone access denied. Please enable microphone permissions in your browser settings.'); }
          else if (event.error === 'no-speech') { setPermissionError('No speech detected. Please try again.'); }
          else { setPermissionError(`Speech recognition error: ${event.error}`); }
        };
        recognitionRef.current.onstart = () => { setIsListening(true); setPermissionError(null); };
        recognitionRef.current.onend = () => setIsListening(false);
      }
      if (window.speechSynthesis) synthRef.current = window.speechSynthesis;
      await checkMicrophonePermission();
    };
    initializeVoice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkMicrophonePermission = async () => {
    try {
      if (navigator.permissions) {
        const permission = await navigator.permissions.query({ name: 'microphone' as PermissionName });
        setMicPermission(permission.state as 'granted' | 'denied' | 'prompt');
        permission.addEventListener('change', () => setMicPermission(permission.state as 'granted' | 'denied' | 'prompt'));
      } else { setMicPermission('prompt'); }
    } catch { setMicPermission('prompt'); }
  };

  const requestMicrophoneAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(t => t.stop());
      setMicPermission('granted'); setPermissionError(null); return true;
    } catch {
      setMicPermission('denied'); setPermissionError('Microphone access denied. Please enable microphone permissions in your browser settings.'); return false;
    }
  };

  const speakText = useCallback((text: string) => {
    if (!synthRef.current) return;
    synthRef.current.cancel();
    const cleanText = text.replace(/[*_~`]/g, '').replace(/https?:\/\/[^\s]+/g, 'link').replace(/[🎯🧠💪🤝😊💡📋🔄🔃🎤🛡️🔒]/g, '').trim();
    if (!cleanText) return;
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.9; utterance.pitch = 1; utterance.volume = 0.8; utterance.lang = 'en-US';
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    const speak = () => {
      const voices = synthRef.current?.getVoices() || [];
      const preferredVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Female')) || voices.find(v => v.lang.startsWith('en'));
      if (preferredVoice) utterance.voice = preferredVoice;
      synthRef.current?.speak(utterance);
    };
    if (synthRef.current.getVoices().length > 0) speak();
    else synthRef.current.addEventListener('voiceschanged', speak, { once: true });
  }, []);

  const stopSpeaking = () => { if (synthRef.current) { synthRef.current.cancel(); setIsSpeaking(false); } };

  const generateAIResponse = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: [{ role: 'user', content: userMessage }] }) });
      if (!response.ok) throw new Error('Failed to get AI response');
      const data = await response.json();
      return data.content || "I'm here to help! Can you tell me a bit more about what's on your mind?";
    } catch {
      const fallbacks = ["I'm here to listen and support you. How are you feeling today?", "That's important to share. Can you tell me more?", "I understand. Let's talk about this step by step.", "Thank you for trusting me. How long have you been experiencing this?", "I'm glad you're reaching out. What would you like to focus on first?"];
      return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }
  };

  const saveMessage = async (message: Message) => {
    try {
      await fetch('/api/messages', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ role: message.role, content: message.content }) });
    } catch (error) { console.error('Failed to save message:', error); }
  };

  const handleVoiceMessage = async (transcript: string) => {
    if (!transcript.trim() || loading) return;
    const userMessage: Message = { role: 'user', content: transcript, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    await saveMessage(userMessage);
    try {
      const aiContent = await generateAIResponse(transcript);
      const aiMessage: Message = { role: 'ai', content: aiContent, timestamp: new Date() };
      setMessages(prev => [...prev, aiMessage]);
      await saveMessage(aiMessage);
      setTimeout(() => speakText(aiContent), 500);
    } catch {
      const err: Message = { role: 'ai', content: 'Sorry, I encountered an error. Please try again.', timestamp: new Date() };
      setMessages(prev => [...prev, err]);
      await saveMessage(err);
    } finally { setLoading(false); }
  };

  const toggleVoiceRecognition = async () => {
    if (!voiceSupported || !recognitionRef.current) { setPermissionError('Speech recognition is not supported in this browser.'); return; }
    if (isListening) { recognitionRef.current.stop(); return; }
    if (micPermission !== 'granted') { const granted = await requestMicrophoneAccess(); if (!granted) return; }
    try { setPermissionError(null); recognitionRef.current.start(); } catch { setPermissionError('Failed to start speech recognition. Please try again.'); }
  };

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const response = await fetch('/api/messages');
        if (response.ok) {
          const data = await response.json();
          setMessages((data.messages || []).map((msg: { id?: string; role: 'user' | 'ai'; content: string; timestamp: string | Date }) => ({ ...msg, timestamp: new Date(msg.timestamp) })));
          setAuthenticated(true);
        } else { router.push('/login'); }
      } catch { router.push('/login'); }
    };
    loadMessages();
  }, [router]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const userMessage: Message = { role: 'user', content: input.trim(), timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    await saveMessage(userMessage);
    try {
      const aiContent = await generateAIResponse(userMessage.content);
      const aiMessage: Message = { role: 'ai', content: aiContent, timestamp: new Date() };
      setMessages(prev => [...prev, aiMessage]);
      await saveMessage(aiMessage);
      setTimeout(() => speakText(aiContent), 500);
    } catch {
      const err: Message = { role: 'ai', content: 'Sorry, I encountered an error. Please try again.', timestamp: new Date() };
      setMessages(prev => [...prev, err]);
      await saveMessage(err);
    } finally { setLoading(false); }
  };

  const formatTime = (timestamp?: Date) => {
    if (!timestamp) return '';
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!authenticated) {
    return (
      <div style={{ minHeight: '100vh', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '3px solid rgba(20,184,166,0.25)', borderTopColor: '#14B8A6', animation: 'spin 0.8s linear infinite', margin: '0 auto 16px' }} />
          <p style={{ color: '#7A99B4', fontFamily: "'DM Sans', sans-serif" }}>Loading your session...</p>
        </div>
        <style jsx>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#EFF6FF', fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Header ── */}
      <div
        style={{
          background: '#FFFFFF',
          borderBottom: '1.5px solid rgba(37,99,235,0.10)',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 2px 12px rgba(37,99,235,0.07)',
          flexShrink: 0,
          zIndex: 10,
        }}
      >
        {/* Left: brand + status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '38px', height: '38px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 10px rgba(37,99,235,0.25)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '15px', fontWeight: 800, color: '#0F2942', lineHeight: 1.1 }}>AIRA Health Chat</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 5px #22C55E' }} />
              <span style={{ fontSize: '11px', color: '#0D9488', fontWeight: 600 }}>AI Online · Student Health & Wellness</span>
            </div>
          </div>
        </div>

        {/* Right: buttons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={handleNewChat}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '7px 14px', borderRadius: '8px',
              fontSize: '13px', fontWeight: 600, color: '#2563EB',
              border: '1.5px solid rgba(37,99,235,0.25)',
              background: 'rgba(37,99,235,0.05)', cursor: 'pointer',
              transition: 'all 0.2s', fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            New Chat
          </button>
          <button
            onClick={async () => {
              await fetch('/api/logout', { method: 'POST' });
              router.push('/login');
            }}
            style={{
              padding: '7px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: 500,
              color: '#7A99B4', border: '1.5px solid rgba(0,0,0,0.08)',
              background: 'transparent', cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* ── Messages area ── */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '28px 0' }}>

          {/* Empty state */}
          {messages.length === 0 && (
            <div style={{ textAlign: 'center', paddingBottom: '32px' }}>
              <div
                style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(37,99,235,0.10), rgba(20,184,166,0.12))',
                  border: '2px solid rgba(37,99,235,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#pgrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <defs><linearGradient id="pgrad" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#2563EB" /><stop offset="1" stopColor="#14B8A6" /></linearGradient></defs>
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 800, color: '#0F2942', marginBottom: '6px' }}>
                Hi there! I&apos;m AIRA 🌟
              </h2>
              <p style={{ fontSize: '14px', color: '#3D5A73', marginBottom: '22px' }}>
                Your friendly health & wellness companion — designed for students like you
              </p>

              {/* Topic chips */}
              <div
                style={{
                  display: 'inline-flex', flexDirection: 'column', gap: '10px',
                  padding: '20px 28px', borderRadius: '16px',
                  background: '#FFFFFF', border: '1.5px solid rgba(37,99,235,0.10)',
                  boxShadow: '0 2px 12px rgba(37,99,235,0.06)',
                  marginBottom: '24px', textAlign: 'left',
                }}
              >
                <p style={{ fontSize: '12px', color: '#7A99B4', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>I&apos;m here to chat about</p>
                {[
                  { icon: '🧠', text: 'Mental Health & Emotions', color: '#2563EB' },
                  { icon: '💪', text: 'Physical Health & Wellness', color: '#0D9488' },
                  { icon: '🤝', text: 'Social Life & Relationships', color: '#7C3AED' },
                ].map(item => (
                  <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 500, color: item.color }}>
                    <span style={{ fontSize: '18px' }}>{item.icon}</span> {item.text}
                  </div>
                ))}
                <p style={{ fontSize: '11px', color: '#7A99B4', fontStyle: 'italic', marginTop: '4px' }}>
                  Designed especially for students (classes 5–12)
                </p>
              </div>

              <p style={{ fontSize: '14px', color: '#3D5A73', marginBottom: '18px' }}>
                How are you feeling today? Just type or click 🎤 to speak!
              </p>

              {/* Quick-start buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', maxWidth: '520px', margin: '0 auto' }}>
                {QUICK_PROMPTS.map(p => (
                  <button
                    key={p.label}
                    onClick={() => setInput(p.text)}
                    style={{
                      padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 500,
                      background: 'rgba(37,99,235,0.06)', border: '1.5px solid rgba(37,99,235,0.15)',
                      color: '#2563EB', cursor: 'pointer', transition: 'all 0.2s',
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    className="ig-chip"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Floating new chat */}
          {messages.length > 3 && (
            <div style={{ position: 'fixed', top: '80px', right: '24px', zIndex: 40 }}>
              <button
                onClick={handleNewChat}
                style={{
                  background: '#FFFFFF', color: '#2563EB', padding: '10px',
                  borderRadius: '50%', boxShadow: '0 4px 16px rgba(37,99,235,0.15)',
                  border: '1.5px solid rgba(37,99,235,0.18)', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                title="Start a new conversation"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
              </button>
            </div>
          )}

          {/* Message list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {messages.map((message, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', maxWidth: '75%', flexDirection: message.role === 'user' ? 'row-reverse' : 'row' }}>
                  {/* AI avatar */}
                  {message.role === 'ai' && (
                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(37,99,235,0.12), rgba(20,184,166,0.12))', border: '1.5px solid rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                  )}

                  {/* Bubble */}
                  <div
                    style={{
                      padding: '12px 16px',
                      borderRadius: message.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                      background: message.role === 'user'
                        ? 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)'
                        : '#FFFFFF',
                      color: message.role === 'user' ? '#FFFFFF' : '#0F2942',
                      boxShadow: message.role === 'user'
                        ? '0 3px 12px rgba(37,99,235,0.28)'
                        : '0 2px 10px rgba(0,0,0,0.07)',
                      border: message.role === 'ai' ? '1.5px solid rgba(37,99,235,0.10)' : 'none',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: '14px', lineHeight: 1.65, whiteSpace: 'pre-wrap', margin: 0 }}>{message.content}</p>
                        <p style={{ fontSize: '10px', marginTop: '5px', opacity: 0.6, margin: '5px 0 0' }}>
                          {formatTime(message.timestamp)}
                        </p>
                      </div>
                      {message.role === 'ai' && (
                        <button
                          onClick={() => speakText(message.content)}
                          disabled={isSpeaking}
                          style={{
                            padding: '5px', borderRadius: '7px', border: 'none',
                            background: 'transparent', cursor: 'pointer', flexShrink: 0,
                            color: isSpeaking ? '#2563EB' : '#7A99B4', transition: 'color 0.2s',
                          }}
                          title="Read aloud"
                        >
                          <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.617 14H2a1 1 0 01-1-1V7a1 1 0 011-1h2.617l3.766-2.793a1 1 0 011.617.793zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(37,99,235,0.12), rgba(20,184,166,0.12))', border: '1.5px solid rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div style={{ background: '#FFFFFF', border: '1.5px solid rgba(37,99,235,0.10)', borderRadius: '18px 18px 18px 4px', padding: '12px 16px', boxShadow: '0 2px 10px rgba(0,0,0,0.07)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        {[0, 0.15, 0.3].map((delay, i) => (
                          <div key={i} style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#14B8A6', animation: 'bounce 1.2s ease-in-out infinite', animationDelay: `${delay}s` }} />
                        ))}
                      </div>
                      <span style={{ fontSize: '12px', color: '#7A99B4' }}>
                        {isListening ? '🎤 Processing voice...' : '💭 AIRA is thinking...'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* ── Permission Error ── */}
      {permissionError && (
        <div style={{ background: '#FFF1F2', borderTop: '1.5px solid rgba(239,68,68,0.20)', padding: '12px 24px' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '12px 16px', borderRadius: '10px', background: '#FFF', border: '1.5px solid rgba(239,68,68,0.22)' }}>
            <span style={{ fontSize: '16px' }}>⚠️</span>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '13px', color: '#EF4444', fontWeight: 600, marginBottom: '4px' }}>Voice Input Issue</p>
              <p style={{ fontSize: '13px', color: '#3D5A73' }}>{permissionError}</p>
              {micPermission === 'denied' && (
                <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                  <button onClick={requestMicrophoneAccess} style={{ fontSize: '12px', padding: '6px 12px', borderRadius: '7px', background: 'linear-gradient(135deg, #2563EB, #14B8A6)', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer' }}>🎤 Request Permission</button>
                  <button onClick={checkMicrophonePermission} style={{ fontSize: '12px', padding: '6px 12px', borderRadius: '7px', background: 'rgba(0,0,0,0.06)', color: '#3D5A73', fontWeight: 500, border: 'none', cursor: 'pointer' }}>🔄 Check Status</button>
                </div>
              )}
            </div>
            <button onClick={() => setPermissionError(null)} style={{ color: '#7A99B4', background: 'none', border: 'none', cursor: 'pointer', padding: '2px' }}>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
          </div>
        </div>
      )}

      {/* ── Input bar ── */}
      <div
        style={{
          background: '#FFFFFF',
          borderTop: '1.5px solid rgba(37,99,235,0.10)',
          padding: '14px 24px',
          boxShadow: '0 -2px 14px rgba(37,99,235,0.06)',
          flexShrink: 0,
        }}
      >
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            {/* Text input */}
            <div style={{ flex: 1, position: 'relative' }}>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={isListening ? '🎙️ Listening — will send automatically...' : 'Share what\'s on your mind — health, school, friends...'}
                disabled={loading}
                style={{
                  width: '100%', padding: '13px 48px 13px 16px', borderRadius: '14px',
                  border: `1.5px solid ${isListening ? '#EF4444' : 'rgba(37,99,235,0.18)'}`,
                  background: isListening ? '#FFF5F5' : '#F8FAFF',
                  color: '#0F2942', fontSize: '14px', outline: 'none',
                  boxSizing: 'border-box', transition: 'all 0.2s',
                  fontFamily: "'DM Sans', sans-serif",
                  opacity: loading ? 0.6 : 1,
                }}
              />
              {/* Mic button inside input */}
              {voiceSupported && (
                <button
                  type="button"
                  onClick={toggleVoiceRecognition}
                  disabled={loading}
                  title={isListening ? 'Stop listening' : 'Start voice input'}
                  style={{
                    position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                    width: '30px', height: '30px', borderRadius: '8px', border: 'none',
                    background: isListening ? '#EF4444' : 'rgba(37,99,235,0.08)',
                    color: isListening ? '#fff' : '#2563EB',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  <svg width="13" height="13" fill="currentColor" viewBox="0 0 20 20">
                    {isListening
                      ? <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                      : <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                    }
                  </svg>
                </button>
              )}
            </div>

            {/* Stop speaking */}
            {isSpeaking && (
              <button
                type="button"
                onClick={stopSpeaking}
                style={{ width: '46px', height: '46px', borderRadius: '12px', border: 'none', background: '#FECACA', color: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}
                title="Stop speaking"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                </svg>
              </button>
            )}

            {/* Send */}
            <button
              type="submit"
              disabled={loading || !input.trim()}
              style={{
                width: '46px', height: '46px', borderRadius: '12px', border: 'none',
                background: loading || !input.trim()
                  ? 'rgba(37,99,235,0.15)'
                  : 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)',
                color: loading || !input.trim() ? '#7A99B4' : '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                boxShadow: loading || !input.trim() ? 'none' : '0 3px 12px rgba(37,99,235,0.28)',
                transition: 'all 0.2s', flexShrink: 0,
              }}
            >
              {loading
                ? <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid rgba(37,99,235,0.25)', borderTopColor: '#2563EB', animation: 'spin 0.7s linear infinite' }} />
                : <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              }
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .ig-chip:hover { background: rgba(37,99,235,0.12) !important; transform: translateY(-1px); }
        @keyframes bounce { 0%, 60%, 100% { transform: translateY(0); } 30% { transform: translateY(-6px); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        input:focus { border-color: rgba(20,184,166,0.50) !important; background: #fff !important; box-shadow: 0 0 0 3px rgba(20,184,166,0.08) !important; }
      `}</style>
    </div>
  );
}
