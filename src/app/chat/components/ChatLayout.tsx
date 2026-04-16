import { ReactNode, useRef, useEffect } from 'react';

interface ChatLayoutProps {
  children: ReactNode;
  onNewChat: () => void;
  onLogout: () => void;
  messagesEndRef?: React.RefObject<HTMLDivElement | null>;
}

export function ChatLayout({ children, onNewChat, onLogout, messagesEndRef }: ChatLayoutProps) {
  // We apply smooth scrolling globally to the container
  return (
    <div className="flex flex-col h-screen bg-slate-50 font-sans overflow-hidden">
      {/* ── Header ── */}
      <header className="bg-white border-b border-blue-100 px-6 h-16 flex items-center justify-between shadow-[0_2px_12px_rgba(37,99,235,0.04)] shrink-0 z-20 sticky top-0">
        {/* Left: Brand + Status */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center shadow-md shadow-blue-500/20">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div>
            <h1 className="font-display text-[15px] font-extrabold text-slate-800 leading-tight tracking-tight">
              AIRA Health Chat
            </h1>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_#10B981]" />
              <span className="text-[11px] text-teal-600 font-semibold tracking-wide">
                AI Online · Student Wellness
              </span>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onNewChat}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold text-blue-600 border border-blue-200 bg-blue-50/50 hover:bg-blue-100 transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="hidden sm:inline">New Chat</span>
          </button>

          <button
            onClick={onLogout}
            className="px-3 py-1.5 rounded-lg text-[13px] font-medium text-slate-500 border border-slate-200 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {/* ── Main Chat Area ── */}
      <main className="flex-1 overflow-y-auto scroll-smooth relative">
        <div className="max-w-3xl mx-auto px-4 py-8 pb-32 w-full flex flex-col gap-5 min-h-full">
          {children}
          {/* Scroll anchor */}
          <div ref={messagesEndRef} className="h-4 shrink-0" />
        </div>
      </main>
    </div>
  );
}
