import { createPublicClient, http } from 'viem'
import { mainnet, sepolia } from 'viem/chains'
import { privateKeyToAccount, toAccount, signTypedData, signTransaction, signMessage } from 'viem/accounts'

const PRIVATE_KEY = process.env.PRIVATE_KEY as any
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

export function createAccount(pubKey: string) {
  if (!pubKey) {
    return privateKeyToAccount(PRIVATE_KEY)
  }
  const privateKey = '0xFakeSecretKey'
  const account = toAccount({
    address: pubKey as any,
    async signMessage({ message }) {
      return signMessage({ message, privateKey })
    },
    async signTransaction(transaction, serializer ) {
      return signTransaction({ privateKey, transaction, serializer: serializer?.serializer })
    },
    async signTypedData(typedData) {
      return signTypedData({ ...typedData, privateKey })
    },
  })
  return account
}