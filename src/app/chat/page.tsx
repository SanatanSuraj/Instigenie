'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Message } from './components/types';
import { ChatLayout } from './components/ChatLayout';
import { MessageBubble } from './components/MessageBubble';
import { ChatInput } from './components/ChatInput';
import { EmptyState } from './components/EmptyState';

// -- Web Speech API types --
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

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const [micPermission, setMicPermission] = useState<'granted' | 'denied' | 'prompt' | 'checking'>('checking');
  const [permissionError, setPermissionError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const router = useRouter();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

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

  // Setup APIs
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

  const saveMessage = async (message: Message) => {
    try {
      await fetch('/api/messages', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ role: message.role, content: message.content }) });
    } catch (error) { console.error('Failed to save message:', error); }
  };

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

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || loading) return;
    
    // Stop TTS if currently speaking
    stopSpeaking();
    
    // Optimistic UI Update: Show instantly
    const userMessage: Message = { role: 'user', content: input.trim(), timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    
    // Non-blocking save
    saveMessage(userMessage).catch(console.error);

    try {
      const aiContent = await generateAIResponse(userMessage.content);
      const aiMessage: Message = { role: 'ai', content: aiContent, timestamp: new Date() };
      setMessages(prev => [...prev, aiMessage]);
      
      saveMessage(aiMessage).catch(console.error);
      setTimeout(() => speakText(aiContent), 500);
    } catch {
      const err: Message = { role: 'ai', content: 'Sorry, I encountered an error. Please try again.', timestamp: new Date() };
      setMessages(prev => [...prev, err]);
      saveMessage(err).catch(console.error);
    } finally { 
      setLoading(false); 
    }
  };

  const handleVoiceMessage = async (transcript: string) => {
    if (!transcript.trim() || loading) return;
    setInput(transcript);
    // Directly invoke text logic
    await handleSendMessage();
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setMessages((data.messages || []).map((msg: any) => ({ ...msg, timestamp: new Date(msg.timestamp) })));
          setAuthenticated(true);
        } else { router.push('/login'); }
      } catch { router.push('/login'); }
    };
    loadMessages();
  }, [router]);


  if (!authenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-teal-500 animate-spin mb-4" />
        <p className="text-slate-500 font-medium font-sans">Loading your session...</p>
      </div>
    );
  }

  return (
    <ChatLayout 
      onNewChat={handleNewChat} 
      onLogout={async () => {
        await fetch('/api/logout', { method: 'POST' });
        router.push('/login');
      }}
      messagesEndRef={messagesEndRef}
    >
      {/* ── Permission Alert ── */}
      {permissionError && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 shadow-sm mb-4">
          <span className="text-xl">⚠️</span>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-red-600 mb-1">Voice Input Issue</h3>
            <p className="text-sm text-slate-700">{permissionError}</p>
            {micPermission === 'denied' && (
              <div className="flex gap-2 mt-3">
                <button onClick={requestMicrophoneAccess} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors">
                  🎤 Request Permission
                </button>
                <button onClick={checkMicrophonePermission} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors">
                  🔄 Check Status
                </button>
              </div>
            )}
          </div>
          <button onClick={() => setPermissionError(null)} className="text-slate-400 hover:text-slate-600">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}

      {/* ── Empty State ── */}
      {messages.length === 0 && (
        <EmptyState onQuickPrompt={(text) => {
          if (loading) return;
          setInput(text);
          setTimeout(() => {
            // Notice: setInput is async, but we bypass handleSendMessage locally to fire instantly:
            const userMessage: Message = { role: 'user', content: text, timestamp: new Date() };
            setMessages(prev => [...prev, userMessage]);
            setInput('');
            setLoading(true);
            
            // Non-blocking save
            saveMessage(userMessage).catch(console.error);
            
            generateAIResponse(text)
              .then((aiContent) => {
                const aiMessage: Message = { role: 'ai', content: aiContent, timestamp: new Date() };
                setMessages(prev => [...prev, aiMessage]);
                saveMessage(aiMessage).catch(console.error);
                setTimeout(() => speakText(aiContent), 500);
              })
              .catch(() => {
                const err: Message = { role: 'ai', content: 'Sorry, I encountered an error. Please try again.', timestamp: new Date() };
                setMessages(prev => [...prev, err]);
                saveMessage(err).catch(console.error);
              })
              .finally(() => {
                setLoading(false);
              });
          }, 50);
        }} />
      )}

      {/* ── Messages List ── */}
      {messages.map((message, idx) => (
        <MessageBubble 
          key={idx} 
          message={message} 
          isSpeaking={isSpeaking} 
          onSpeak={speakText} 
        />
      ))}

      {/* ── Typing Indicator ── */}
      {loading && (
        <div className="flex w-full justify-start animate-fadeUp">
          <div className="flex items-end gap-2 flex-row">
             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-teal-100 border-2 border-blue-100 flex items-center justify-center shrink-0 shadow-sm opacity-60">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="bg-white border border-blue-50 px-4 py-3 shadow-sm text-slate-500 rounded-[18px_18px_18px_4px]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <span className="text-[12px] font-medium ml-1">
                  {isListening ? 'Processing voice...' : 'AIRA is thinking...'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Chat Input ── */}
      <ChatInput
        input={input}
        setInput={setInput}
        loading={loading}
        isListening={isListening}
        isSpeaking={isSpeaking}
        voiceSupported={voiceSupported}
        onSendMessage={handleSendMessage}
        onToggleVoice={toggleVoiceRecognition}
        onStopSpeaking={stopSpeaking}
      />
    </ChatLayout>
  );
}
