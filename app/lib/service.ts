import { kv } from "@vercel/kv"

export async function registerAPIKey(apiKey: string, address: string) {
  const set = await kv.set(apiKey, address)
  return set
}
