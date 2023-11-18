import type { Metadata } from 'next'
import {Navbar,Footer} from "@/components/index";
import './globals.css'


export const metadata: Metadata = {
  title: 'Car Showcase',
  description: 'Discover the best cars in the entire city, with the best prices and the best brands.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
