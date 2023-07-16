import './globals.css'
import Footer from '@/components/Footer';
import { sora } from './font'
import { Toaster } from 'react-hot-toast';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs'
import MobileNavbar from '@/components/Navigation/mobile/Navbar';
import LandscapeNavbar from '@/components/Navigation/landscape/Navbar';
import UnAuthLandscapeNavbar from '@/components/Navigation/landscape/UnauthNav';
import UnAuthMobileNavbar from '@/components/Navigation/mobile/UnauthNav';

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
            <SignedIn>
              <LandscapeNavbar />
              <MobileNavbar />
            </SignedIn>
            <SignedOut>
              <UnAuthLandscapeNavbar />
              <UnAuthMobileNavbar />
            </SignedOut>
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
