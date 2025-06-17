'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import CounselorChat from '../components/CounselorChat';

interface ChatContextType {
  openChat: () => void;
  closeChat: () => void;
  isOpen: boolean;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);

  return (
    <ChatContext.Provider value={{ openChat, closeChat, isOpen }}>
      {children}
      {isOpen && <CounselorChat onClose={closeChat} />}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
