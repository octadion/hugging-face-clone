import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

interface SignupRequest {
    username: string;
    email: string;
    password: string;
  }

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as SignupRequest;
    const { username, email, password } = body;

    // Validasi input
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: 'Semua field diperlukan' }, 
        { status: 400 }
      )
    }

    // Validasi email sederhana
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format email tidak valid' }, 
        { status: 400 }
      )
    }

    // Validasi password (contoh: minimal 8 karakter)
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password minimal 8 karakter' }, 
        { status: 400 }
      )
    }

    // Contoh integrasi dengan backend eksternal (Python)
    const response = await fetch('https://api.dev.asvri.ai/api/v2/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        nama: username,  // Sesuaikan dengan API Anda
        username, 
        email, 
        password 
      }),
    })
    const data = await response.json() as { message?: string, error?: string, user?: any, token?: any}
    
    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || 'Signup gagal' }, 
        { status: response.status }
      )
    }

    // Optional: Set cookie untuk langsung login setelah signup
    cookies().set('token', data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 1 minggu
    })

    return NextResponse.json({ 
      message: 'Signup berhasil', 
      user: data.user 
    }, { status: 201 })

  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' }, 
      { status: 500 }
    )
  }
}