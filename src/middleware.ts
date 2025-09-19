import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Only run on /api/chat
  if (request.nextUrl.pathname === '/api/chat') {
    if (!process.env.OPENROUTER_API_KEY) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: 'Chat API is not configured'
        }),
        {
          status: 503,
          headers: {
            'content-type': 'application/json',
          }
        }
      )
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/api/chat',
}
