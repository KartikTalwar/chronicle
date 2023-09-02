import { NextResponse } from 'next/server'
import { getFeed } from '@/app/lib/oracle'


export async function GET(request: Request, context: { params: any }) {
  const PAIR = context.params.pair
  const getParams = new URL(request.url).searchParams

  const output = await getFeed(PAIR, getParams.get('network') || "sepolia")
  return NextResponse.json(output)
}