import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Message from '@/models/Message';
import { verifyToken } from '@/lib/auth';
import {
  addMessageToMemory,
  getMessagesFromMemory,
  isMongoConnectionError,
  activateMemoryFallback,
  isMemoryFallbackActive,
} from '@/lib/dev-chat-store';

export async function POST(request: NextRequest) {
  try {
    // Get token from cookie
    const token = request.cookies.get('token')?.value;
    
    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: 'Invalid token' },
      { status: 401 }
    );
    }

    const { role, content } = await request.json();

    if (!role || !content) {
      return NextResponse.json(
        { error: 'Role and content are required' },
        { status: 400 }
      );
    }

    if (!['user', 'ai'].includes(role)) {
      return NextResponse.json(
        { error: 'Role must be either "user" or "ai"' },
        { status: 400 }
      );
    }

    let dbAvailable = true;

    if (!isMemoryFallbackActive()) {
      try {
        await connectDB();
      } catch (error) {
        dbAvailable = false;
        if (isMongoConnectionError(error)) {
          activateMemoryFallback(error);
        } else {
          console.error('Message save error:', error);
          return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
          );
        }
      }
    } else {
      dbAvailable = false;
    }

    if (!dbAvailable) {
      const message = addMessageToMemory(decoded.userId, {
        role: role as 'user' | 'ai',
        content,
        timestamp: new Date(),
      });

      return NextResponse.json({
        success: true,
        message,
      });
    }

    const message = await Message.create({
      userId: decoded.userId,
      role,
      content,
      timestamp: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: {
        id: message._id,
        role: message.role,
        content: message.content,
        timestamp: message.timestamp,
      },
    });
  } catch (error) {
    console.error('Message save error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Get token from cookie
    const token = request.cookies.get('token')?.value;
    
    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: 'Invalid token' },
      { status: 401 }
    );
    }

    let dbAvailable = true;

    if (!isMemoryFallbackActive()) {
      try {
        await connectDB();
      } catch (error) {
        dbAvailable = false;
        if (isMongoConnectionError(error)) {
          activateMemoryFallback(error);
        } else {
          console.error('Messages fetch error:', error);
          return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
          );
        }
      }
    } else {
      dbAvailable = false;
    }

    if (!dbAvailable) {
      const messages = getMessagesFromMemory(decoded.userId);

      return NextResponse.json({
        success: true,
        messages,
      });
    }

    const messages = await Message.find({ userId: decoded.userId })
      .sort({ timestamp: 1 })
      .limit(100); // Limit to last 100 messages

    return NextResponse.json({
      success: true,
      messages: messages.map(msg => ({
        id: msg._id,
        role: msg.role,
        content: msg.content,
        timestamp: msg.timestamp,
      })),
    });
  } catch (error) {
    console.error('Messages fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
