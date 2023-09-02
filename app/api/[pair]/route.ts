import { NextResponse } from 'next/server'
import { getFeed } from '@/app/lib/oracle'


export async function GET(request: Request, context: { params: any }) {
  const PAIR = context.params.pair
  const getParams = new URL(request.url).searchParams
  const network = getParams.get('network') || "sepolia"
  const apiKey = getParams.get('key') || ""

  try {
    const output = await getFeed(PAIR, network, apiKey)
    return NextResponse.json(output)
  } catch (e: any) {
    let error = e.details || e.message
    if (error.includes("Invalid API key")) {
      return NextResponse.json({error: "Invalid API key"}, {status: 400})
    }
    return NextResponse.json({error: e.details}, {status: 400})
  }
}