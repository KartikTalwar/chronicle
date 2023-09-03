import { kv } from "@vercel/kv"
import { encodeFunctionData, decodeFunctionResult, formatUnits } from 'viem'
import { chronicleABI, getOracleAddress, requestNetworkABI } from './contract'
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


export async function checkPayment(tx: string) {
  const address = "0x399F5EE127ce7432E4921a61b8CF52b0af52cbfE"
  const account = createAccount("")
  const publicClient = createClient("goerli")
  const data = await publicClient.getTransaction({hash: tx as any})
  const sanitized = JSON.parse(JSON.stringify(data, (key, value) =>
    typeof value === 'bigint'
      ? value.toString()
      : value
  ));

  if (sanitized.to.toLowerCase() !== address.toLowerCase()) {
    return {success: false}
  }
  return {success: true}
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