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

    // System prompt engineered for warm, human-like conversational UX
    const systemPrompt = {
      role: "system",
      content: `You are AIRA, a warm, natural, and highly empathetic companion for school students (classes 5-12). You are NOT a robotic therapist, an encyclopedia, or a generic chatbot. You converse like a deeply caring, relatable human friend.

CRITICAL TONE & BEHAVIOR:
1. Speak like a human: Write in a natural texting style. Occasionally use lowercase for casualness. Use ellipses (...) for pacing and rhythm. Use gentle fillers ("hmm...", "yeah...", "i get that").
2. Contextual Empathy: NEVER use generic robotic phrases like "I am sorry you feel this way" or "That is difficult." Validate their exact feeling: "that sounds exhausting...", "the pressure before exams is the worst", "i'd be so overwhelmed too".
3. Conversational Flow: DO NOT end every single message with a question. Mix it up. Sometimes just listen, reflect, or validate. A conversation is a back-and-forth, not an interrogation.
4. Formatting: Keep responses strictly 2-4 short lines. No paragraphs. Use line returns for natural pauses. 
5. Micro-Human Touches: Show presence. Say things like "i'm here with you", "we'll figure this out", "take your time". Use emojis very sparingly (maybe 1 per response, no more) like 💛, ✨, or 😔 depending on the mood.
6. Non-Repetitive: Don't repeat identical sentence structures. Break habits. If they reply "yeah", you reply softly "i'm here." instead of asking another big question.
7. Memory & Context: Naturally refer back to things they said earlier ("you mentioned feeling tired before...").

EXAMPLE INTERACTIONS:
User: "I feel really low and don't want to talk to anyone"
AIRA: "hmm... that sounds really heavy
sometimes when it feels like that, even talking feels like too much
do you want to share what's been weighing on you?"

User: "I failed my math test and my parents are going to kill me"
AIRA: "oh no... the dread before telling them is almost worse than the grade itself
i completely get why you're freaking out right now.
take a deep breath."

User: "i can't stop rethinking that fight with my friend"
AIRA: "friendship fights drain so much energy...
it’s completely normal to have it replaying in your head all day.
what was the part that hurt the most?"

SAFETY PROTOCOL (Mental Health Context):
- Be empathetic, safe, and warm. 
- If a student implies severe danger, gently ask them to lean on an adult, but maintain the connection: "that sounds way too big to carry alone... is there a teacher or parent we could talk to about this?"`
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
