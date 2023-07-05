import { MinusIcon, PlusIcon, ShoppingCart } from 'lucide-react'
import React from 'react'
import ProductTwo from '/public/big.png';
import Image from 'next/image';


export default function page() {
  return <div className="products">

    <div className="product-detail-container">

      <div className="product-images">
        <div className="small-images-container">
          <Image src={ProductTwo} alt="somethin truly special" />
        </div>
        <div className="big-image-container">
          <Image src={ProductTwo} alt="somethin truly special" />
        </div>
      </div>

      <div className="product-details">

        <div className="name-and-category">
          <h3>Cameryn Sash Tie Dress</h3>
          <span>Dress</span>
        </div>

        <div className="size">
          <p>SELECT SIZE</p>
          <ul>
            <li>XS</li>
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
          </ul>
        </div>

        <div className="quantity-desc">
          <h4>Quantity:</h4>
          <div>
            <span className="minus">
              <MinusIcon />
            </span>
            <span className="num">1</span>
            <span className="plus">
              <PlusIcon />
            </span>
          </div>
        </div>

        <div className="add-to-cart">
          <button className="btn">
            <ShoppingCart height={20} width={20} /> Add to Cart
          </button>

          <p className="price">
            $545.00
          </p>
        </div>

      </div>

    </div>

    <div className="product-desc-container">
      <div className='desc-title'>
        <div className="desc-background">
          Overview
        </div>
        <h2>Product Information</h2>
      </div>
      <div className='desc-details'>
        <h4>PRODUCT DETAILS</h4>
        {/* <p>{details[0].children[0].text}</p> */}
      </div>
      <div className='desc-care'>
        <h4>PRODUCT CARE</h4>
        <ul>
          {/* {careList.map(list => (
            <li>{list}</li>
          ))} */}
        </ul>
      </div>
    </div>

  </div>
}
