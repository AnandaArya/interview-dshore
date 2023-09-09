/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Navbar from '@/components/organisms/navbar/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
import Card from '@/components/organisms/card/card'
import Footer from '@/components/organisms/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Uxbee clone',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        
      <body className={inter.className + "bg-black"}>
        <Navbar />
        {children}
        <Card />
        <Footer />
        <Script src='https://unpkg.com/flowbite@1.4.1/dist/flowbite.js' strategy="beforeInteractive" />
      </body>
      
    </html>
  )
}
