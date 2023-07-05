"use client";

import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import FeaturedOne from '/public/Featured1.webp';
import FeaturedTwo from '/public/Featured2.webp';
import FeaturedThree from '/public/Featured3.webp';
import FeaturedFour from '/public/Featured4.webp';

import Feature from '/public/feature.webp'

import HeaderImage from '/public/header.png'

import EventOne from '/public/Event1.webp';
import EventTwo from '/public/Event2.webp';
import EventThree from '/public/Event3.webp';


import ProductOne from '/public/TrendProduct1.png';
import ProductTwo from '/public/TrendProduct2.png';
import ProductThree from '/public/TrendProduct3.png';
import ProductFour from '/public/TrendProduct4.png';
import ProductFive from '/public/TrendProduct5.png';
import ProductSix from '/public/TrendProduct6.png';

import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Link from 'next/link';

export default function Home() {
  return <div>
    <header className="header">
      <div className="header-left-side">
        <div className="header-content">
          <div className="header-sale-button">Sale 70%</div>
          <h1 className="header-main-heading">An Industrial Take on Streetwear</h1>
          <p className="header-main-helper-text">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
          <div className='header-main-button'>
            <ShoppingCart /> Start Shopping
          </div>
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
          <Image src={HeaderImage} alt="header" height="650" width="650" className="header-Image" />
        </div>
      </div>
    </header>

    <section className="event-container">
      <div className="subtitle">
        <span>PROMOTIONS</span>
        <h2>Our Promotions Events</h2>
      </div>
      <div className='event-banner'>
        <div className='event-banner-left'>
          <div className="event-card">
            <div className='content'>
              <h3>
                GET <br /> UP TO{" "}
                <span>60%</span>
              </h3>
              <p>For the summer season</p>
            </div>
            <Image src={EventOne} alt="header" height="218" width="282" />
          </div>
          <div className="event-card">
            <h3>GET 30% OFF</h3>
            <p>USE PROMO CODE</p>
            <button>DINEWEEKENDSALE</button>
          </div>
        </div>
        <div className='event-banner-right'>
          <div className='event-banner-right-1'>
            <div className="details">
              <p>Flex Sweatshirt</p>
              <div className="price"><span>$100.00</span><span>$75.00</span></div>
            </div>
            <Image src={EventTwo} alt="header" height="362" width="282" />
          </div>
          <div className='event-banner-right-2'>
            <div className="details">
              <p>Flex Push Button Bomber</p>
              <div className='price'>
                <span>$225.00</span>
                <span>$190.00</span>
              </div>
            </div>
            <Image src={EventThree} alt="header" height="368" width="282" />
          </div>
        </div>
      </div>
    </section>

    <div className="products-outer-container">
      <div className="subtitle">
        <span>PRODUCTS</span>
        <h2>Check What We Have</h2>
      </div>
      <Swiper
        breakpoints={{
          // width >= 300
          300: {
            slidesPerView: 1,
            spaceBetween: 100
          },
          // width >= 1000
          1000: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          // width >= 1260
          1260: {
            slidesPerView: 3,
            spaceBetween: 0
          }
        }}
        modules={[Navigation, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
      >
        <div className='products-container'>
          <SwiperSlide>
            <div>
              <Link href={`/product/${1}`}>
                <div className='product-card'>
                  <Image src={ProductOne} alt="asdas" loading='lazy' width={380} height={400} className='product-image' />
                  <p className='product-name'>Name</p>
                  <p className='product-price'>$00.00</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>

            <div>
              <Link href={`/product/${1}`}>
                <div className='product-card'>
                  <Image src={ProductTwo} alt="adsadas" width={380} height={400} className='product-image' />
                  <p className='product-name'>Name</p>
                  <p className='product-price'>$00.00</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>

            <div>
              <Link href={`/product/${1}`}>
                <div className='product-card'>
                  <Image src={ProductThree} alt="klj" width={380} height={400} className='product-image' />
                  <p className='product-name'>Name</p>
                  <p className='product-price'>$00.00</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>

            <div>
              <Link href={`/product/${1}`}>
                <div className='product-card'>
                  <Image src={ProductFour} alt="klj" width={380} height={400} className='product-image' />
                  <p className='product-name'>Name</p>
                  <p className='product-price'>$00.00</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>

            <div>
              <Link href={`/product/${1}`}>
                <div className='product-card'>
                  <Image src={ProductFive} alt="klj" width={380} height={400} className='product-image' />
                  <p className='product-name'>Name</p>
                  <p className='product-price'>$00.00</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>

            <div>
              <Link href={`/product/${1}`}>
                <div className='product-card'>
                  <Image src={ProductSix} alt="klj" width={380} height={400} className='product-image' />
                  <p className='product-name'>Name</p>
                  <p className='product-price'>$00.00</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>

            <div>
              <Link href={`/product/${1}`}>
                <div className='product-card'>
                  <Image src={ProductOne} alt="klj" width={380} height={400} className='product-image' />
                  <p className='product-name'>Name</p>
                  <p className='product-price'>$00.00</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          </div>
      </Swiper>
    </div>

    <section className="features-section">
      <div className="title">
        <h1>Unique and Authentic Vintage Designer Jewellery</h1>
      </div>
      <div className="content">
        <div className="left">
          <div className="feature-background">Different from others</div>
        <div>
          <h3>Using Good Quality Materials</h3>
          <p>Lorem ipsum dolor sit amt, consectetus adipiscing elit.</p>
        </div>
        <div>
          <h3>100% Handmade Products</h3>
          <p>Lorem ipsum dolor sit amt, consectetus adipiscing elit.</p>
        </div>
        <div>
          <h3>Modern Fashion Design</h3>
          <p>Lorem ipsum dolor sit amt, consectetus adipiscing elit.</p>
        </div>
        <div>
          <h3>Discount for Bulk Orders</h3>
          <p>Lorem ipsum dolor sit amt, consectetus adipiscing elit.</p>
        </div>
        </div>
        <div className="right">
          <Image src={Feature} alt="Feature" width={300} height={350} />
          <div>
            <p>
            This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
            </p>
            <Link href="/products">
                <button className='btn'>See All Products</button>
            </Link>
          </div>
        </div>
    
      </div>
    </section>

    <section className="newsletter">
      <div className="newsletter-background">
        Newsletter
      </div>
      <h1>Subscribe Our Newsletter</h1>
      <p>Get the latest information and promo offers directly</p>
      <form>
        <input type="email" placeholder='Input email address' />
        <button type="submit">Get started</button>
      </form>
    </section>
  </div>
}
