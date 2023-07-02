import { ShoppingCart } from 'lucide-react'
import React from 'react'

export default function page() {
  return <div className="products">

    <div className="product-detail-container">

      <div className="product-images">

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
              <span className="minus"></span>
              <span className="num">1</span>
              <span className="plus"></span>
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

    </div>

    <div className="product-desc-container">
      
    </div>

  </div>
}
