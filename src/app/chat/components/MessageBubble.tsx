import { Message } from './types';

interface MessageBubbleProps {
  message: Message;
  isSpeaking: boolean;
  onSpeak: (text: string) => void;
}

export function MessageBubble({ message, isSpeaking, onSpeak }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  const formatTime = (timestamp?: Date) => {
    if (!timestamp) return '';
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`flex items-end gap-2 max-w-[75%] md:max-w-[65%] ${
          isUser ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        {/* AI Avatar */}
        {!isUser && (
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-teal-100 border-2 border-blue-100 flex items-center justify-center shrink-0 shadow-sm">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2563EB"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}

        {/* Bubble */}
        <div
          className={`px-4 py-3 shadow-sm ${
            isUser
              ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-[18px_18px_4px_18px]'
              : 'bg-white text-slate-800 border border-blue-50/50 rounded-[18px_18px_18px_4px]'
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-[15px] leading-relaxed whitespace-pre-wrap break-words m-0">
                {message.content}
              </p>
              <p
                className={`text-[10px] mt-1.5 opacity-70 ${
                  isUser ? 'text-blue-100 text-right' : 'text-slate-400'
                }`}
              >
                {formatTime(message.timestamp)}
              </p>
            </div>

            {/* Read Aloud Button for AI */}
            {!isUser && (
              <button
                onClick={() => onSpeak(message.content)}
                disabled={isSpeaking}
                className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                  isSpeaking
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-400 hover:text-blue-600 hover:bg-slate-50'
                }`}
                title="Read aloud"
              >
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.617 14H2a1 1 0 01-1-1V7a1 1 0 011-1h2.617l3.766-2.793a1 1 0 011.617.793zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
