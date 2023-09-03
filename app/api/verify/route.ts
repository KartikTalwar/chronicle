import { NextResponse } from 'next/server'
import { checkPayment, getFeed } from '@/app/lib/oracle'


export async function GET(request: Request, context: { params: any }) {
  const getParams = new URL(request.url).searchParams
  const tx = getParams.get('tx') || ""

  try {
    const output = await checkPayment(tx)
    return NextResponse.json(output)
  } catch (e: any) {
    let error = e.details || e.message
    if (error.includes("Invalid API key")) {
      return NextResponse.json({error: "Invalid API key"}, {status: 400})
    }
    return NextResponse.json({error: e.message}, {status: 400})
  }
}