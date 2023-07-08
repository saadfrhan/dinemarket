import './globals.css'
import Footer from '@/components/Footer';
import { sora } from './font'
import MobileNavbar from '@/components/MobileNav';
import { Toaster } from 'react-hot-toast';
import Logo from '@/components/Logo';
import NavBtns from '@/components/NavBtns';
import Search from '@/components/Search';
import CartIcon from '@/components/CartIcon';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sora.className} flex flex-col`}>
        <nav className="block">
          <div className="max-[1000px]:hidden">
            <div className='max-[650px]:m-[2rem] max-[1000px]:m-[4rem] max-[1210px]:m-[2rem] mt-[2rem] mb-[0rem] mx-[6rem]'>
              <div className="flex justify-between items-center w-full m-auto">
                <Logo />
                <NavBtns />
                <Search />
                <CartIcon /> 
              </div>
            </div>
          </div>
          <div className="min-[1000px]:hidden"><MobileNavbar /></div>
        </nav>
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  )
}
