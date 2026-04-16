export interface Message {
  id?: string;
  role: 'user' | 'ai';
  content: string;
  timestamp?: Date;
}

export const QUICK_PROMPTS = [
  { label: '😰 School stress', text: "I'm feeling stressed about school" },
  { label: '😴 Sleep issues', text: "I'm having trouble sleeping" },
  { label: '👥 Friend troubles', text: "I'm having problems with friends" },
  { label: '😟 Feeling anxious', text: 'I feel anxious or worried' },
  { label: '💪 Physical health', text: 'I want to talk about my health' },
];
