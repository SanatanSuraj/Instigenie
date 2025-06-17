'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'counselor';
  timestamp: Date;
}

export default function CounselorChat({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m here to help. How are you feeling today?',
      sender: 'counselor',
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    try {
      // Simulate counselor response after a short delay
      setTimeout(() => {
        const counselorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: getCounselorResponse(newMessage),
          sender: 'counselor',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, counselorMessage]);
        setIsTyping(false);
      }, 1500);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 w-full sm:w-[400px] h-[600px] bg-white dark:bg-soft-charcoal shadow-2xl rounded-t-xl flex flex-col border-t-4 border-healing-teal">
      {/* Chat Header */}
      <div className="p-4 border-b dark:border-base-700 flex items-center justify-between bg-healing-teal/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/images/profile/Warm School Nurse.png"
              alt="Counselor"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-base-900 dark:text-base-50">School Counselor</h3>
            <p className="text-sm text-base-600 dark:text-base-300">Online</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-base-200 dark:hover:bg-base-700/50 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-xl p-3 ${
                message.sender === 'user'
                  ? 'bg-healing-teal text-white ml-4'
                  : 'bg-base-100 dark:bg-base-800 mr-4'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs mt-1 opacity-70">
                {new Intl.DateTimeFormat('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                }).format(message.timestamp)}
              </p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-base-100 dark:bg-base-800 rounded-xl p-3 flex items-center gap-1 mr-4">
              <div className="w-2 h-2 bg-base-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-base-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-base-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 border-t dark:border-base-700 bg-white dark:bg-soft-charcoal">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 bg-base-100 dark:bg-base-800 border dark:border-base-700 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-healing-teal/20"
          />
          <button
            onClick={handleSend}
            className="w-10 h-10 rounded-xl bg-healing-teal text-white flex items-center justify-center hover:bg-healing-teal/90 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper function to generate counselor responses
function getCounselorResponse(message: string): string {
  const lowercaseMessage = message.toLowerCase();
  
  if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi')) {
    return 'Hello! How can I help you today?';
  }
  
  if (lowercaseMessage.includes('stress') || lowercaseMessage.includes('anxious')) {
    return 'I understand that you\'re feeling stressed. Let\'s talk about what\'s causing these feelings and explore some coping strategies together.';
  }
  
  if (lowercaseMessage.includes('sad') || lowercaseMessage.includes('depressed')) {
    return 'I\'m here to listen and support you. Would you like to tell me more about what\'s making you feel this way?';
  }

  if (lowercaseMessage.includes('help') || lowercaseMessage.includes('support')) {
    return 'I\'m here to help and support you. What specific concerns would you like to discuss?';
  }

  if (lowercaseMessage.includes('thank')) {
    return 'You\'re welcome! Remember, I\'m here whenever you need to talk.';
  }

  return 'I\'m listening. Please tell me more about how you\'re feeling.';
}
