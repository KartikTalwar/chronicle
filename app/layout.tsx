"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { chains, demoAppInfo, wagmiConfig } from "./payment/config/rainbow-kit";
import RootProvider from "@/components/root-provider";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-white'>  
      <RootProvider>
        <body className={inter.className}>{children}</body>
      </RootProvider>
    </html>
  )
}
