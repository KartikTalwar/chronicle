import { kv } from "@vercel/kv"
import { encodeFunctionData, decodeFunctionResult, formatUnits } from 'viem'
import { chronicleABI, getOracleAddress } from './contract'
import { createAccount, createClient, createWalletClient } from './client'


export async function registerAPIKey(apiKey: string, address: string) {
  const contractAddr = getOracleAddress("")
  const account = createAccount("")

  const walletClient = createWalletClient("sepolia")
  const data = await walletClient.writeContract({ 
    address: contractAddr,
    abi: chronicleABI,
    functionName: "addAddress",
    args: [apiKey, address],
    account,
  })

  return data
}


export async function getFeed(id: string, chain: string, apiKey: string) {
  const functionName = 'readWithAge'
  const address = getOracleAddress(id)

  const pubKey = await kv.get(apiKey) as string
  const account = createAccount(pubKey||"0x0000000000000000000000000000000000000000")

  const functionData = encodeFunctionData({
    abi: chronicleABI,
    functionName,
    args: [id, apiKey]
  })

  const publicClient = createClient(chain)
  const data = await publicClient.call({ 
    account,
    data: functionData,
    to: address,
  })

  const decoded = decodeFunctionResult({
    abi: chronicleABI,
    functionName,
    data: data.data as any,
  }) as any

  const output = {
    id,
    chain,
    address,
    price: Number(formatUnits(decoded[0], 18)),
    age: Number(formatUnits(decoded[1], 0)),
    timestamp: new Date(parseInt(formatUnits(decoded[1], 0)) * 1000).toISOString(),
    raw: data.data,
  }

  return output
}