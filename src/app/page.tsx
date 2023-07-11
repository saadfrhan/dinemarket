import SwiperSlider from '@/components/Home/SwiperSlider';
import Newsletter from '@/components/Home/Newsletter';
import Header from '@/components/Home/Header';
import Event from '@/components/Home/Event';
import Features from '@/components/Home/Features';

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
