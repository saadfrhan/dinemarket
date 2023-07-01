import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import ProductMale from '/public/ProductMale.png'
import ProductMaleOne from '/public/ProductMale1.png'
function Products() {
  return (
    <div className='Allproducts-container'>
      <div>
        <Link href="/product/flex-push-button-bomber">
          <div className="Allproduct-card">
            <Image alt="Flex Push Button Bomber" src={ProductMale} width="250" height="270" />
            <div className="Allproduct-name">Flex Push Button Bomber</div>
            <div className="Allproduct-tags">Jackets</div>
            <div className="Allproduct-price">$255</div>
          </div>
        </Link>
      </div>
      <div>
        <Link href="/product/flex-push-button-bomber">
          <div className="Allproduct-card">
            <Image alt="Flex Push Button Bomber" src={ProductMaleOne} width="250" height="270" />
            <div className="Allproduct-name">Raglan Sweatshirt</div>
            <div className="Allproduct-tags">Sweater</div>
            <div className="Allproduct-price">$195</div>
          </div>
        </Link>
      </div>
      <div>
        <Link href="/product/flex-push-button-bomber">
          <div className="Allproduct-card">
            <Image alt="Flex Push Button Bomber" src={ProductMaleOne} width="250" height="270" />
            <div className="Allproduct-name">Raglan Sweatshirt</div>
            <div className="Allproduct-tags">Sweater</div>
            <div className="Allproduct-price">$195</div>
          </div>
        </Link>
      </div>
      <div>
        <Link href="/product/flex-push-button-bomber">
          <div className="Allproduct-card">
            <Image alt="Flex Push Button Bomber" src={ProductMaleOne} width="250" height="270" />
            <div className="Allproduct-name">Raglan Sweatshirt</div>
            <div className="Allproduct-tags">Sweater</div>
            <div className="Allproduct-price">$195</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Products