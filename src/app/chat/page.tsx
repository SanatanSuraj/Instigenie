'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface Message {
  id?: string;
  role: 'user' | 'ai';
  content: string;
  timestamp?: Date;
}

// Voice Recognition Types
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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Voice functionality states
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const [micPermission, setMicPermission] = useState<'granted' | 'denied' | 'prompt' | 'checking'>('checking');
  const [permissionError, setPermissionError] = useState<string | null>(null);
  
  // Voice refs
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  // New chat function with confirmation
  const handleNewChat = () => {
    if (messages.length > 0) {
      const confirmed = window.confirm('Are you sure you want to start a new chat? Your current conversation will be saved but you&apos;ll start fresh.');
      if (!confirmed) return;
    }
    setMessages([]);
    setInput('');
    // Stop any ongoing speech
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
    // Stop any ongoing listening
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize voice functionality
  useEffect(() => {
    const initializeVoice = async () => {
      // Check if speech recognition is supported
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        setVoiceSupported(true);
        
        // Initialize speech recognition
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
          const transcript = event.results[0][0].transcript.trim();
          if (transcript) {
            setInput(transcript);
            setIsListening(false);
            
            // Automatically send the message after a brief delay
            setTimeout(() => {
              handleVoiceMessage(transcript);
            }, 500);
          }
        };

        recognitionRef.current.onerror = (event: SpeechRecognitionErrorEvent) => {
          setIsListening(false);
          
          switch (event.error) {
            case 'not-allowed':
              setMicPermission('denied');
              setPermissionError('Microphone access denied. Please enable microphone permissions in your browser settings.');
              break;
            case 'no-speech':
              setPermissionError('No speech detected. Please try again.');
              break;
            case 'network':
              setPermissionError('Network error. Please check your internet connection.');
              break;
            default:
              setPermissionError(`Speech recognition error: ${event.error}`);
          }
        };

        recognitionRef.current.onstart = () => {
          setIsListening(true);
          setPermissionError(null);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }

      // Initialize speech synthesis
      if (window.speechSynthesis) {
        synthRef.current = window.speechSynthesis;
      }

      // Check microphone permissions
      await checkMicrophonePermission();
    };

    initializeVoice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Check microphone permissions
  const checkMicrophonePermission = async () => {
    try {
      if (navigator.permissions) {
        const permission = await navigator.permissions.query({ name: 'microphone' as PermissionName });
        setMicPermission(permission.state as 'granted' | 'denied' | 'prompt');
        
        permission.addEventListener('change', () => {
          setMicPermission(permission.state as 'granted' | 'denied' | 'prompt');
        });
      } else {
        setMicPermission('prompt');
      }
    } catch (error) {
      console.error('Error checking microphone permission:', error);
      setMicPermission('prompt');
    }
  };

  // Request microphone access
  const requestMicrophoneAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop());
      setMicPermission('granted');
      setPermissionError(null);
      return true;
    } catch {
      setMicPermission('denied');
      setPermissionError('Microphone access denied. Please enable microphone permissions in your browser settings.');
      return false;
    }
  };

  // Text-to-speech function
  const speakText = useCallback((text: string) => {
    if (!synthRef.current) return;

    // Stop any ongoing speech
    synthRef.current.cancel();
    
    // Clean text for better speech
    const cleanText = text
      .replace(/[*_~`]/g, '') // Remove markdown
      .replace(/https?:\/\/[^\s]+/g, 'link') // Replace URLs
      .replace(/[🎯🧠💪🤝😊💡📋🔄🔃🎤🛡️🔒]/g, '') // Remove emojis
      .trim();

    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 0.8;
    utterance.lang = 'en-US';

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    // Wait for voices to load
    const speak = () => {
      const voices = synthRef.current?.getVoices() || [];
      const preferredVoice = voices.find(voice => 
        voice.lang.startsWith('en') && voice.name.includes('Female')
      ) || voices.find(voice => voice.lang.startsWith('en'));
      
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      synthRef.current?.speak(utterance);
    };

    if (synthRef.current.getVoices().length > 0) {
      speak();
    } else {
      synthRef.current.addEventListener('voiceschanged', speak, { once: true });
    }
  }, []);

  // Stop speaking
  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  // Handle voice message processing and sending
  const handleVoiceMessage = async (transcript: string) => {
    if (!transcript.trim() || loading) return;

    const userMessage: Message = {
      role: 'user',
      content: transcript,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput(''); // Clear input after sending
    setLoading(true);

    // Save user message
    await saveMessage(userMessage);

    try {
      // Generate AI response
      const aiContent = await generateAIResponse(userMessage.content);
      const aiMessage: Message = {
        role: 'ai',
        content: aiContent,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
      
      // Save AI message
      await saveMessage(aiMessage);
      
      // Automatically speak AI response
      setTimeout(() => speakText(aiContent), 500);
    } catch {
      const errorMessage: Message = {
        role: 'ai',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
      await saveMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Toggle voice recognition
  const toggleVoiceRecognition = async () => {
    if (!voiceSupported || !recognitionRef.current) {
      setPermissionError('Speech recognition is not supported in this browser.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      return;
    }

    // Check and request permissions if needed
    if (micPermission !== 'granted') {
      const granted = await requestMicrophoneAccess();
      if (!granted) return;
    }

    try {
      setPermissionError(null);
      recognitionRef.current.start();
    } catch (error) {
      console.error('Speech recognition error:', error);
      setPermissionError('Failed to start speech recognition. Please try again.');
    }
  };

  // Check authentication and load messages
  useEffect(() => {
    const loadMessages = async () => {
      try {
        const response = await fetch('/api/messages');
        if (response.ok) {
          const data = await response.json();
          const messagesWithDates = (data.messages || []).map((msg: { id?: string; role: 'user' | 'ai'; content: string; timestamp: string | Date }) => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          }));
          setMessages(messagesWithDates);
          setAuthenticated(true);
        } else {
          router.push('/login');
        }
      } catch {
        router.push('/login');
      }
    };
    loadMessages();
  }, [router]);

  const saveMessage = async (message: Message) => {
    try {
      await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role: message.role,
          content: message.content,
        }),
      });
    } catch (error) {
      console.error('Failed to save message:', error);
    }
  };

  const generateAIResponse = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'user',
              content: userMessage,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      return data.content || "I'm here to help! Can you tell me a bit more about what's on your mind?";
    } catch (error) {
      console.error('Error getting AI response:', error);
      // Fallback to health-focused responses
      const healthResponses = [
        "I'm here to listen and support you. How are you feeling today - physically, mentally, or emotionally?",
        "That's important to share. Can you tell me more about how this is affecting your daily life at school?",
        "I understand. Let's talk about this step by step. What's been the most challenging part for you?",
        "Thank you for trusting me with this. How long have you been experiencing this?",
        "I'm glad you're reaching out. What would you like to focus on first - your physical health, mental wellbeing, or social relationships?",
      ];
      
      return healthResponses[Math.floor(Math.random() * healthResponses.length)];
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // Save user message
    await saveMessage(userMessage);

    try {
      // Generate AI response
      const aiContent = await generateAIResponse(userMessage.content);
      const aiMessage: Message = {
        role: 'ai',
        content: aiContent,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
      
      // Save AI message
      await saveMessage(aiMessage);
      
      // Automatically speak AI response
      setTimeout(() => speakText(aiContent), 500);
    } catch {
      const errorMessage: Message = {
        role: 'ai',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
      await saveMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const formatTime = (timestamp?: Date) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">AIRA Health Chat</h1>
            <p className="text-xs text-gray-600">Student Health & Wellness Companion</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleNewChat}
            className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800 px-4 py-2 rounded-lg border border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>New Chat</span>
          </button>
          <button
            onClick={() => {
              document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
              router.push('/login');
            }}
            className="text-sm text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 py-12">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Hi there! I&apos;m AIRA 🌟</h2>
              <p className="text-lg text-gray-700 mb-4 font-medium">Your friendly health & wellness companion</p>
              <div className="max-w-md mx-auto bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-100">
                <p className="text-sm text-gray-600 mb-4">I&apos;m here to chat about:</p>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-blue-700">
                    <span className="text-lg">🧠</span>
                    <span className="font-medium">Mental Health & Emotions</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-700">
                    <span className="text-lg">💪</span>
                    <span className="font-medium">Physical Health & Wellness</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-700">
                    <span className="text-lg">🤝</span>
                    <span className="font-medium">Social Life & Relationships</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4 italic">
                  I&apos;m designed especially for students like you (classes 5-12)
                </p>
              </div>
              <p className="text-gray-600 mt-6 mb-6">
                How are you feeling today? Just type or click 🎤 to speak!
              </p>
              
              {/* Quick Start Buttons */}
              <div className="flex flex-wrap justify-center gap-2 max-w-lg mx-auto">
                <button
                  onClick={() => setInput("I'm feeling stressed about school")}
                  className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full text-sm transition-colors"
                >
                  😰 School stress
                </button>
                <button
                  onClick={() => setInput("I'm having trouble sleeping")}
                  className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-full text-sm transition-colors"
                >
                  😴 Sleep issues
                </button>
                <button
                  onClick={() => setInput("I'm having problems with friends")}
                  className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-800 rounded-full text-sm transition-colors"
                >
                  👥 Friend troubles
                </button>
                <button
                  onClick={() => setInput("I feel anxious or worried")}
                  className="px-4 py-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 rounded-full text-sm transition-colors"
                >
                  😟 Feeling anxious
                </button>
                <button
                  onClick={() => setInput("I want to talk about my health")}
                  className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 rounded-full text-sm transition-colors"
                >
                  💪 Physical health
                </button>
              </div>
            </div>
          )}
          
          {/* Floating New Chat Button - only show when there are messages */}
          {messages.length > 3 && (
            <div className="fixed top-20 right-6 z-40">
              <button
                onClick={handleNewChat}
                className="bg-white hover:bg-gray-50 text-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl border border-blue-200 transition-all duration-200 group"
                title="Start a new conversation"
              >
                <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>
          )}
          
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-2xl ${
                  message.role === 'user' ? '' : 'flex items-start space-x-3'
                }`}>
                  {message.role === 'ai' && (
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  <div className={`rounded-2xl px-4 py-3 shadow-sm ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-900 border border-gray-200'
                  }`}>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                        <p className={`text-xs mt-2 ${
                          message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {formatTime(message.timestamp)}
                        </p>
                      </div>
                      {message.role === 'ai' && (
                        <button
                          onClick={() => speakText(message.content)}
                          disabled={isSpeaking}
                          className="flex-shrink-0 p-1.5 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
                          title="Speak response"
                        >
                          {isSpeaking ? (
                            <svg className="w-4 h-4 text-blue-600 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.617 14H2a1 1 0 01-1-1V7a1 1 0 011-1h2.617l3.766-2.793a1 1 0 011.617.793z" clipRule="evenodd" />
                              <path d="M12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 text-gray-600 hover:text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.617 14H2a1 1 0 01-1-1V7a1 1 0 011-1h2.617l3.766-2.793a1 1 0 011.617.793zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.983 5.983 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.984 3.984 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="bg-white text-gray-900 border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-xs text-gray-500">
                        {isListening ? "🎤 Processing voice..." : "💭 AI is thinking..."}
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

      {/* Permission Error Display */}
      {permissionError && (
        <div className="bg-white border-t border-gray-200 px-4 py-3">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-red-800 mb-1">🎙️ Voice Input Issue</h4>
                  <p className="text-sm text-red-700">{permissionError}</p>
                  {micPermission === 'denied' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button
                        onClick={requestMicrophoneAccess}
                        className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg transition-colors font-medium"
                      >
                        🎤 Request Permission
                      </button>
                      <button
                        onClick={checkMicrophonePermission}
                        className="text-xs bg-gray-500 hover:bg-gray-600 text-white px-3 py-1.5 rounded-lg transition-colors font-medium"
                      >
                        🔄 Check Status
                      </button>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setPermissionError(null)}
                  className="text-red-400 hover:text-red-600 p-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Input */}
      <div className="bg-white border-t border-gray-200 px-4 py-4 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSendMessage} className="flex space-x-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={isListening ? "🎙️ Listening... (will send automatically)" : "Share what's on your mind - health, school, friends... or click 🎤"}
                disabled={loading}
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
              {voiceSupported && (
                <button
                  type="button"
                  onClick={toggleVoiceRecognition}
                  disabled={loading}
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1.5 rounded-lg transition-all duration-200 ${
                    isListening 
                      ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-blue-600'
                  }`}
                  title={isListening ? "Stop listening" : "Start voice input"}
                >
                  {isListening ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              )}
            </div>
            
            {isSpeaking && (
              <button
                type="button"
                onClick={stopSpeaking}
                className="bg-red-500 text-white px-4 py-3 rounded-2xl hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 shadow-sm hover:shadow-md"
                title="Stop speaking"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                </svg>
              </button>
            )}
            
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
