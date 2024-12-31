// app/api/models/route.ts
import { NextResponse } from 'next/server'

const BASE_URL = 'https://huggingface.co/api/models'
const VALID_SORTS = ['downloads', 'likes', 'updated'];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  
  const sort = VALID_SORTS.includes(searchParams.get('sort') || '')
    ? searchParams.get('sort')
    : 'downloads';

  const search = searchParams.get('search') || ''

  try {
    const response = await fetch(
      `${BASE_URL}?${search ? `search=${search}&` : ''}sort=${sort}&author=jagr-ai&limit=20&page=${page}`,
      {
        headers: {
          'Accept': 'application/json',
        }
      }
    )
    
    if (!response.ok) {
      throw new Error('Failed to fetch models')
    }

    const data = await response.json()
    const hasNext = data.length === 20
    const hasPrev = page > 1

    return NextResponse.json({
      data,
      pagination: {
        currentPage: page,
        hasNext,
        hasPrev,
        totalItems: data.length,
      }
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch models' },
      { status: 500 }
    )
  }
}
