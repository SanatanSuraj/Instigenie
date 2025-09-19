import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { generateToken, hashPassword } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Check if this is the dummy credentials
    if (username === 'testuser' && password === 'testpass') {
      // Check if user exists, if not create it
      let user = await User.findOne({ username: 'testuser' });
      
      if (!user) {
        const hashedPassword = await hashPassword('testpass');
        user = await User.create({
          username: 'testuser',
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

      // Set HTTP-only cookie
      response.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60, // 7 days
      });

      return response;
    }

    return NextResponse.json(
      { error: 'Invalid credentials. Use testuser/testpass' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
