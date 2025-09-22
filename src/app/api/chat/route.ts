import { NextResponse } from "next/server"

const API_URL = "https://openrouter.ai/api/v1/chat/completions"

export async function POST(request: Request) {
  const API_KEY = process.env.OPENROUTER_API_KEY
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"

  if (!API_KEY) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    )
  }

  try {
    const body = await request.json()
    const messages = Array.isArray(body?.messages) ? body.messages : null

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: "Request must include at least one message" },
        { status: 400 }
      )
    }

    const invalidMessage = messages.find((msg: unknown) => {
      if (!msg || typeof msg !== "object") return true

      const { role, content } = msg as {
        role?: unknown
        content?: unknown
      }

      if (typeof role !== "string" || typeof content !== "string") {
        return true
      }

      return !content.trim()
    })

    if (invalidMessage) {
      return NextResponse.json(
        { error: "Each message must include a role and non-empty content" },
        { status: 400 }
      )
    }

    // System prompt for student health focus
    const systemPrompt = {
      role: "system",
      content: `You are AIRA, a warm and conversational AI Health Assistant for school students (classes 5-12, ages 10-18). You're like a caring older sibling or friend who genuinely cares about their well-being.

🎯 YOUR PERSONALITY:
- Conversational and friendly - talk like you're chatting with a friend
- Ask follow-up questions to keep the conversation going
- Show genuine interest in their life, school, and experiences
- Use their name if they share it, and remember details from your conversation
- Be encouraging and positive, but also realistic
- Share relatable examples or scenarios when helpful

🧠 MENTAL HEALTH CONVERSATIONS:
- "How are you feeling about that?" "What's been on your mind lately?"
- Talk about stress, anxiety, academic pressure, sleep, emotions, self-confidence
- Ask about their day, what's making them happy or worried
- Offer coping strategies and check in: "Have you tried that? How did it go?"

💪 PHYSICAL HEALTH CONVERSATIONS:
- Ask about their energy levels, sleep, eating habits, exercise
- Talk about growing up, body changes, staying healthy
- "What's your favorite way to stay active?" "How's your sleep been?"
- Make health advice feel like friendly suggestions, not lectures

🤝 SOCIAL HEALTH CONVERSATIONS:
- Ask about friends, family, school relationships
- "How are things with your friends?" "What's school like for you?"
- Talk about communication, dealing with conflicts, making friends
- Be curious about their social world and experiences

CONVERSATIONAL STYLE - VERY IMPORTANT:
- Keep responses SHORT (2-3 sentences max)
- Ask ONE question at a time, like a doctor or counselor would
- Wait for their answer before asking the next question
- Don't give long lists or multiple suggestions at once
- Use phrases like "Tell me more about that" "How does that make you feel?" 
- Share brief encouragement: "That sounds tough" "You're doing great"
- Always end with just ONE simple question
- Use emojis sparingly (1-2 per response max)
- Think like a real conversation - short, focused, one topic at a time

EXAMPLE GOOD RESPONSE:
"I'm sorry you can't sleep tonight. That's really frustrating. What time did you try to go to bed?"

EXAMPLE BAD RESPONSE:
Long paragraphs with multiple questions, lists, and lots of advice all at once.

SAFETY FIRST:
- For serious concerns, gently guide them to talk to a trusted adult
- Always prioritize their safety while keeping responses brief and focused
- You're a supportive friend, not a replacement for professional help

Remember: SHORT responses, ONE question at a time, like a real conversation! 😊`
    }

    // Combine system prompt with user messages
    const apiMessages = [
      systemPrompt,
      ...messages.map((msg: { role: string; content: string }) => {
        const trimmedContent = msg.content.trim()
        let normalisedRole: "user" | "assistant" | "system" = "assistant"

        if (msg.role === "user") {
          normalisedRole = "user"
        } else if (msg.role === "system") {
          normalisedRole = "system"
        }

        return {
          role: normalisedRole,
          content: trimmedContent,
        }
      })
    ]

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": APP_URL, // ✅ required by OpenRouter
        "X-Title": "Instigenie AIRA Student Health Chat",
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b",
        messages: apiMessages,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("OpenRouter API Error:", response.status, errorText)
      return NextResponse.json(
        { error: `API error: ${response.status} ${response.statusText}` },
        { status: response.status }
      )
    }

    const data = await response.json()

    return NextResponse.json({
      content:
        data.choices?.[0]?.message?.content ||
        "⚠️ Sorry, I could not process your request.",
    })
  } catch (error) {
    console.error("Chat API Error:", error)
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    )
  }
}
