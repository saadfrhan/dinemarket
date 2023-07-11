import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import FeaturedOne from '/public/Featured1.webp';
import FeaturedTwo from '/public/Featured2.webp';
import FeaturedThree from '/public/Featured3.webp';
import FeaturedFour from '/public/Featured4.webp';
import HeaderImage from '/public/header.png'
import { Button, buttonVariants } from '../ui/button';
import Link from 'next/link';
export default function Header() {
  return (
    <header className="header">
      <div className="header-left-side">
        <div className="header-content">
          <div className="header-sale-button">Sale 70%</div>
          <h1 className="header-main-heading">An Industrial Take on Streetwear</h1>
          <p className="header-main-helper-text">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
          <Link href="/">
            <Button
              size="lg"
            >
              <ShoppingCart className='w-8' />
              Start Shopping
            </Button>
          </Link>
        </div>
        <div className="header-featured">
          <Image src={FeaturedOne} alt="Bazaar" width={100} height={35} />
          <Image src={FeaturedTwo} alt="Bustle" width={100} height={35} />
          <Image src={FeaturedThree} alt="Versace" width={100} height={35} />
          <Image src={FeaturedFour} alt="InStyle" width={100} height={35} />
        </div>
      </div>
      <div className="header-right-side">
        <div className="header-circle">
          <Image src={HeaderImage} alt="header" height="650" width="650" className="header-image" />
        </div>
      </div>
    </header>
  )
}
