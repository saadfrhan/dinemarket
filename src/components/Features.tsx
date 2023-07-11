import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Feature from '/public/feature.webp'

export default function Features() {
  return (
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
  )
}
