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
import { getProducts } from '../../sanity/utils';
import ProductSlideCard from './ProductSlideCard';
import { urlForImage } from '../../sanity/lib/image';

export default async function SwiperSlider() {
  const products = await getProducts('all');
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
        {products.map(({ name, price, slug, image }, index) => (
          <SwiperSlide>
            <ProductSlideCard
              imageUrl={urlForImage(image && image[0]).url()}
              name={name}
              price={price}
              slug={slug}
              key={index}
            />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  )
}
