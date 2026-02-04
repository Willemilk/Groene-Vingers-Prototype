import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { sql } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Alle velden zijn verplicht' },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Wachtwoord moet minimaal 8 tekens bevatten' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const [existingUser] = await sql`
      SELECT id FROM users WHERE email = ${email}
    `;

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email is al in gebruik' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const [user] = await sql`
      INSERT INTO users (name, email, password_hash)
      VALUES (${name}, ${email}, ${hashedPassword})
      RETURNING id, email, name
    `;

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het aanmaken van je account' },
      { status: 500 }
    );
  }
}
