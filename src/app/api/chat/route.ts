import { NextResponse } from 'next/server';

const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

export async function POST(request: Request) {
  const API_KEY = process.env.DEEPSEEK_API_KEY;
  
  if (!API_KEY) {
    return NextResponse.json(
      { error: 'API key not configured' },
      { status: 500 }
    );
  }
  try {
    const { messages } = await request.json();

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-chat:free',
        messages: messages.map((msg: { type: string; content: string }) => ({
          role: msg.type === 'user' ? 'user' : 'assistant',
          content: msg.content
        }))
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json({
      content: data.choices?.[0]?.message?.content || 'Sorry, I could not process your request.'
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}
