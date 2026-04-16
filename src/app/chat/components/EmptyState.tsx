import { QUICK_PROMPTS } from './types';

interface EmptyStateProps {
  onQuickPrompt: (text: string) => void;
}

export function EmptyState({ onQuickPrompt }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-12 w-full animate-fadeUp px-4">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-teal-50 border-4 border-white shadow-xl shadow-blue-500/10 flex items-center justify-center mb-6">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#pgrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <defs>
            <linearGradient id="pgrad" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#14B8A6" />
            </linearGradient>
          </defs>
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>

      <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mb-2 text-center">
        Hi there! I&apos;m AIRA ✨
      </h2>
      <p className="text-[15px] sm:text-base text-slate-500 mb-8 max-w-sm text-center leading-relaxed">
        Your friendly health & wellness companion designed for students like you.
      </p>

      {/* Topics Box */}
      <div className="bg-white border border-blue-50 shadow-sm rounded-2xl p-6 mb-8 w-full max-w-md">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
          I can help you with
        </p>
        <div className="flex flex-col gap-3">
          {[
            { icon: '🧠', text: 'Mental Health & Emotions', color: 'text-blue-600' },
            { icon: '💪', text: 'Physical Health & Wellness', color: 'text-teal-600' },
            { icon: '🤝', text: 'Social Life & Relationships', color: 'text-indigo-600' },
          ].map((item) => (
            <div key={item.text} className={`flex items-center gap-3 font-semibold ${item.color}`}>
              <span className="text-xl bg-slate-50 p-2 rounded-lg">{item.icon}</span>
              <span className="text-[15px]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Prompts */}
      <div className="w-full max-w-2xl text-center">
        <p className="text-[14px] text-slate-500 font-medium mb-4">
          How are you feeling today? Tap a suggestion or type below!
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {QUICK_PROMPTS.map((p) => (
            <button
              key={p.label}
              onClick={() => onQuickPrompt(p.text)}
              className="px-4 py-2 rounded-full text-[13px] font-semibold bg-white border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 hover:-translate-y-0.5 transition-all shadow-sm"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
