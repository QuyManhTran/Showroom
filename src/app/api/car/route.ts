import { revalidatePath } from 'next/cache';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const keyword = req.nextUrl.searchParams.get('search');
  const url = `https://carapi.app/api/makes?limit=5&sort=name&make=${keyword}`;
  const res = await fetch(url);
  const data = await res.json();
  return NextResponse.json(data);
}
