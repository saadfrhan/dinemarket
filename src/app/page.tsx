import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import FeaturedOne from '/public/Featured1.webp';
import FeaturedTwo from '/public/Featured2.webp';
import FeaturedThree from '/public/Featured3.webp';
import FeaturedFour from '/public/Featured4.webp';
import HeaderImage from '/public/header.png'

export default function Home() {
  return <div>
    <header className="header">
      <div className="header_left-side">
        <div className="header_content">
          <div className="header_sale-button">Sale 70%</div>
          <h1 className="header_main-heading">An Industrial Take on Streetwear</h1>
          <p className="header_main-helper-text">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
          <div className='header_main-button'>
            <ShoppingCart /> Start Shopping
          </div>
        </div>
        <div className="header_featured">
          <Image src={FeaturedOne} alt="Bazaar" width={100} height={35} />
          <Image src={FeaturedTwo} alt="Bustle" width={100} height={35} />
          <Image src={FeaturedThree} alt="Versace" width={100} height={35} />
          <Image src={FeaturedFour} alt="InStyle" width={100} height={35} />
        </div>
      </div>
      <div className="header_right-side">
        <div className="header_circle">
          <Image src={HeaderImage} alt="header" className="header_img" height="650" width="650" />
        </div>
      </div>
    </header>
    <section className="event-container">
      <div className="event_subtitle">
        <span>PROMOTIONS</span>
        <h2>Our Promotions Events</h2>
      </div>
      <div className='event_banner'>
        <div className='event_banner-left'>
          <div className="event-card">
            <div className='content'>
              <h3>
                GET UP TO{" "}
                <span>60%</span>
              </h3>
              <p>For the summer season</p>
            </div>
            <Image src={HeaderImage} alt="header" className="header_img" height="218" width="282" />
          </div>
          <div className="event-card">
            <h3>GET 30% OFF</h3>
            <p>USE PROMO CODE</p>
            <button>DINEWEEKENDSALE</button>
          </div>
        </div>
        <div className='event_banner-right'>
          <div className='event_banner-right-1'>
            <div className="details">
              <p>Flex Sweatshirt</p>
              <div className="price"><span>$100.00</span><span>$75.00</span></div>
            </div>
            <Image src={HeaderImage} alt="header" className="header_img" height="362" width="282" />
          </div>
          <div className='event_banner-right-2'>
            <div className="details">
              <p>Flex Push Button Bomber</p>
              <div className='price'>
                <span>$225.00</span>
                <span>$190.00</span>
              </div>
            </div>
            <Image src={HeaderImage} alt="header" className="header_img" height="368" width="282" />
          </div>
        </div>
      </div>
    </section>
  </div>
}
