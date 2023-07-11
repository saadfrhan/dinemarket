
import Image from 'next/image'


import Feature from '/public/feature.webp'



import SwiperSlider from '@/components/SwiperSlider';
import Newsletter from '@/components/Newsletter';
import Header from '@/components/Header';
import Event from '@/components/Event';
import Features from '@/components/Features';

export default function Home() {
  return <div>

    <Header />

    <Event />

    <div className="products-outer-container">
      <div className="subtitle">
        <span>PRODUCTS</span>
        <h2>Check What We Have</h2>
      </div>
      <SwiperSlider />
    </div>

    <Features />

    <Newsletter />
  </div>
}
