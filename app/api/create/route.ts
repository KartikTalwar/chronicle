import { registerAPIKey } from '@/app/lib/oracle'
import { generateUUID, saveAPIKey } from '@/app/lib/service'
import { NextResponse } from 'next/server'


export async function GET(request: Request, context: { params: any }) {
  const getParams = new URL(request.url).searchParams

  const address = getParams.get('address') as string
  const apiKey = generateUUID()

  try {
    let output = await registerAPIKey(apiKey, address)
    if (!output) {
      throw new Error('Failed to register API key')
    }
    const save = await saveAPIKey(apiKey, address)
    return NextResponse.json({
      apiKey,
      address,
    })
  } catch (e: any) {
    return NextResponse.json(e, {status: 400})
  }

}