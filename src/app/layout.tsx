import './globals.css'
import Footer from '@/components/Footer';
import { sora } from './font'
import MobileNavbar from '@/components/Navigation/mobile/MobileNav';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/Navigation/landscape/Navbar';
import { ClerkProvider } from '@clerk/nextjs'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sora.className} flex flex-col`}>
        <Toaster />
        <ClerkProvider>
          <nav className="block">
            <Navbar />
            <MobileNavbar />
          </nav>
          <div className='max-lg-1k:mt-16'>
            {children}
          </div>
        </ClerkProvider>
        <Footer />
      </body>
    </html>
  )
}
