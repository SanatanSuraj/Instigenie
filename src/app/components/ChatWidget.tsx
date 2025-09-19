"use client"

import { useState, useRef, useEffect } from "react"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<
    { type: "user" | "bot"; content: string }[]
  >([
    {
      type: "bot",
      content: "Hi! I'm AIRA, your AI Routine Assistant. How can I help you today?",
    },
  ])
  const [isProcessing, setIsProcessing] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const input = form.message as HTMLInputElement
    const message = input.value.trim()

    if (message && !isProcessing) {
      setIsProcessing(true)
      const userMessage = { type: "user" as const, content: message }
      const newMessages = [...messages, userMessage]
      setMessages(newMessages)
      input.value = ""

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: newMessages }),
        })

        if (!response.ok) {
          throw new Error("Failed to get response")
        }

        const data = await response.json()
        setMessages((prev) => [...prev, { type: "bot", content: data.content }])
      } catch (err) {
        console.error("Chat API error:", err)
        setMessages((prev) => [
          ...prev,
          { type: "bot", content: "⚠️ Sorry, I encountered an error." },
        ])
      } finally {
        setIsProcessing(false)
      }
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent-500 hover:ring-2 hover:ring-base-400 rounded-full flex items-center justify-center shadow-lg transition-all z-50"
        aria-label="Open AI Assistant"
      >
        <svg
          className="w-6 h-6 text-base-50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-base-900/50 backdrop-blur-sm z-50 flex items-end md:items-center justify-center">
          <div className="bg-base-50 dark:bg-base-800 w-full md:w-[480px] md:h-[600px] h-[80vh] rounded-t-2xl md:rounded-2xl shadow-xl flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-base-200/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-500/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-base-900 dark:text-base-50">
                    AIRA
                  </h3>
                  <p className="text-sm text-base-600 dark:text-base-300">
                    AI Routine Assistant
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.type === "user"
                        ? "bg-accent-500 text-base-50"
                        : "bg-base-200/10 dark:bg-base-50/5"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-base-200/10">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  name="message"
                  placeholder={
                    isProcessing ? "Processing..." : "Type your message..."
                  }
                  disabled={isProcessing}
                  className="flex-1 rounded-xl border border-base-200/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500 bg-transparent disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="bg-accent-500 hover:bg-accent-600 text-base-50 px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
