import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { generateToken, hashPassword } from '@/lib/auth';
import {
  getDemoCredentials,
  isMongoConnectionError,
  activateMemoryFallback,
  isMemoryFallbackActive,
} from '@/lib/dev-chat-store';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    const demo = getDemoCredentials();

    if (username !== demo.username || password !== demo.password) {
      return NextResponse.json(
        { error: 'Invalid credentials. Use testuser/testpass' },
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
          console.error('Login error:', error);
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
      const token = generateToken(demo.userId);
      const response = NextResponse.json({
        success: true,
        user: {
          id: demo.userId,
          username: demo.username,
        },
        token,
      });

      response.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60,
      });

      return response;
    }

    // Check if user exists, if not create it
    let user = await User.findOne({ username: demo.username });
    
    if (!user) {
      const hashedPassword = await hashPassword(demo.password);
      user = await User.create({
        username: demo.username,
        password: hashedPassword,
      });
    }

    const token = generateToken(user._id.toString());

    const response = NextResponse.json({
      success: true,
      user: {
        id: user._id,
        username: user.username,
      },
      token,
    });

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
