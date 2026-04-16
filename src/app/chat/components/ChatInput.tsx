import { FormEvent } from 'react';

interface ChatInputProps {
  input: string;
  setInput: (val: string) => void;
  loading: boolean;
  isListening: boolean;
  isSpeaking: boolean;
  voiceSupported: boolean;
  onSendMessage: (e: FormEvent) => void;
  onToggleVoice: () => void;
  onStopSpeaking: () => void;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

export function ChatInput({
  input,
  setInput,
  loading,
  isListening,
  isSpeaking,
  voiceSupported,
  onSendMessage,
  onToggleVoice,
  onStopSpeaking,
  messagesEndRef,
}: ChatInputProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent pt-10 pb-6 px-4 z-30">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <form
          onSubmit={onSendMessage}
          className={`flex gap-2 items-center w-full bg-white p-2 rounded-[24px] shadow-lg border transition-colors ${
            isListening ? 'border-red-400 bg-red-50/50' : 'border-blue-100'
          }`}
        >
          {/* Main Input Area */}
          <div className="flex-1 relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                isListening
                  ? '🎙️ Listening — will send automatically...'
                  : "Share what's on your mind..."
              }
              disabled={loading}
              className={`w-full py-3 pl-5 pr-12 rounded-[20px] outline-none text-[15px] bg-transparent text-slate-800 placeholder-slate-400 transition-opacity ${
                loading ? 'opacity-60' : 'opacity-100'
              }`}
            />

            {/* Mic Toggle placed inside input container */}
            {voiceSupported && (
              <button
                type="button"
                onClick={onToggleVoice}
                disabled={loading}
                title={isListening ? 'Stop listening' : 'Start voice input'}
                className={`absolute right-2 p-2 rounded-xl transition-all ${
                  isListening
                    ? 'text-white bg-red-500 hover:bg-red-600 shadow-md shadow-red-500/20 animate-pulse'
                    : 'text-blue-600 hover:bg-blue-50'
                }`}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
                  {isListening ? (
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
              </button>
            )}
          </div>

          {/* Stop Speaking (Visible if TTS active) */}
          {isSpeaking && (
            <button
              type="button"
              onClick={onStopSpeaking}
              className="w-12 h-12 rounded-[18px] bg-red-100 text-red-600 flex items-center justify-center shrink-0 hover:bg-red-200 transition-colors"
              title="Stop speaking"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}

          {/* Send Button */}
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className={`w-12 h-12 rounded-[18px] flex items-center justify-center shrink-0 transition-all ${
              loading || !input.trim()
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-br from-blue-600 to-teal-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:-translate-y-0.5'
            }`}
          >
            {loading ? (
              <div className="w-5 h-5 rounded-full border-2 border-slate-300 border-t-slate-500 animate-spin" />
            ) : (
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            )}
          </button>
        </form>
        <div className="text-[11px] text-slate-400 font-medium mt-3 text-center">
          AIRA can make mistakes. Please verify important information.
        </div>
      </div>
    </div>
  );
}
