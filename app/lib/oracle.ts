import { encodeFunctionData, decodeFunctionResult, formatUnits } from 'viem'
import { privateKeyToAccount } from 'viem/accounts' 
import { wagmiContract } from './contract'
import { createClient } from './client'

const PRIVATE_KEY = process.env.PRIVATE_KEY as any


export async function getFeed(id: string, chain: string) {
  const account = privateKeyToAccount(PRIVATE_KEY)
  const functionName = 'readWithAge'

  const functionData = encodeFunctionData({
    abi: wagmiContract.abi,
    functionName,
  })

  const publicClient = createClient(chain)
  const data = await publicClient.call({ 
    account,
    data: functionData,
    to: wagmiContract.address,
  })

  const decoded = decodeFunctionResult({
    abi: wagmiContract.abi,
    functionName,
    data: data.data as any,
  })

  const output = {
    id,
    chain,
    price: Number(formatUnits(decoded[0], 18)),
    age: Number(formatUnits(decoded[1], 0)),
    timestamp: new Date(parseInt(formatUnits(decoded[1], 0)) * 1000).toISOString(),
    address: wagmiContract.address,
    raw: data.data,
  }

  return output
}