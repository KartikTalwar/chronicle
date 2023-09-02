import { encodeFunctionData, decodeFunctionResult, formatUnits } from 'viem'
import { privateKeyToAccount } from 'viem/accounts' 
import { chronicleABI, getOracleAddress } from './contract'
import { createClient } from './client'

const PRIVATE_KEY = process.env.PRIVATE_KEY as any


export async function getFeed(id: string, chain: string) {
  const account = privateKeyToAccount(PRIVATE_KEY)
  const functionName = 'readWithAge'
  const address = getOracleAddress(id)

  const functionData = encodeFunctionData({
    abi: chronicleABI,
    functionName,
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
  })

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