import { MobileNavbar, Navbar } from '@/components/Navbar'
import './globals.css'
import {Sora} from 'next/font/google'
const sora = Sora({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sora.className} flex flex-col`}>
        <nav className="block">
          <div className="max-[1000px]:hidden"><Navbar /></div>
        <div className="min-[1000px]:hidden"><MobileNavbar /></div>
        </nav>
        {children}
      </body>
    </html>
  )
}
