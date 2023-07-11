"use client";

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
          <SwiperSlide key={index}>
            <ProductSlideCard
              imageUrl={urlForImage(image && image[0]).url()}
              name={name}
              price={price}
              slug={slug}
            />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  )
}
