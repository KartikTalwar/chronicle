import { createPublicClient, http } from 'viem'
import { mainnet, sepolia } from 'viem/chains'

const ALCHEMY = process.env.ALCHEMY || ''

export function getRPC(network: string) {
  const hosts: {[name: string]: string} = {
    "mainnet": ALCHEMY,
    "sepolia": ALCHEMY,
  }
  return hosts[network]
}

export function createClient(network: string) {
  const chain = network === 'mainnet' ? mainnet : sepolia

  return createPublicClient({
    chain,
    transport: http(getRPC(network)),
  })
}