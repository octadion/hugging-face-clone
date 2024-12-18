import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

interface LoginRequest {
    email: string;
    password: string;
  }

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as LoginRequest;
    const { email, password } = body;

    // Validasi input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email dan password diperlukan' }, 
        { status: 400 }
      )
    }

    // Contoh integrasi dengan backend eksternal (Python)
    const response = await fetch('https://api.dev.asvri.ai/api/v2/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        username: email,  // Sesuaikan dengan API Anda
        password 
      }),
    })

    const data = await response.json() as { message?: string, error?: string, user?: any, token?: any}
    console.log(data)
    console.log(response)
    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || 'Login gagal' }, 
        { status: response.status }
      )
    }

    // Set cookie untuk session
    cookies().set('token', data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 1 minggu
    })

    return NextResponse.json({ 
      message: 'Login berhasil', 
      user: data.user 
    }, { status: 200 })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' }, 
      { status: 500 }
    )
  }
}