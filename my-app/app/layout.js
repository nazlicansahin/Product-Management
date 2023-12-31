import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Product Management Page',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='grid  max-w-4xl mx-auto  shadow-xl p-5 rounded-lg border-2 bg-slate-200'>
          <Navbar />
          <div className='mt-8'>          {children}
          </div>
        </div>
      </body>
    </html>
  )
}
