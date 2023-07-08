"use client";

import Link from 'next/link';
import Image from 'next/image';

import ProductOne from '/public/TrendProduct1.png';
import ProductTwo from '/public/TrendProduct2.png';
import ProductThree from '/public/TrendProduct3.png';
import ProductFour from '/public/TrendProduct4.png';
import ProductFive from '/public/TrendProduct5.png';
import ProductSix from '/public/TrendProduct6.png';

import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function SwiperSlider() {
  return (
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
  )
}
