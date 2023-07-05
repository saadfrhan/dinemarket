import Image from 'next/image'
import React from 'react'
import ProductTwo from '/public/big.png';

export default function Cart() {
  return (
    <div className="cart-wrapper">
      <h2>Shopping Cart</h2>
      <div className="cart-container">
        <div className="cart-items">
          <div className="item-card">
            <div className="item-image">
              {/* <Image /> */}
            </div>
            <div className="item-details">
              <div className="name-and-remove">
                <h3>Flex Sweatpants</h3>
                <button className="remove-item"></button>
              </div>
              <p className="item-tag">Dress</p>
              <p className="delivery-est">Delivery Estimation</p>
              <p className="delivery-days">5 Working Days</p>
              <div className="price-and-qty">
                <span className="price"></span>
                <div>
                  <span className="minus"></span>
                  <span className="num">1</span>
                  <span className="plus"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="qty">
            <p>Quantity</p>
            <span>1 Product</span>
          </div>
          <div className="subtotal">
            <p>Sub Total</p>
            <span>$ 175</span>
          </div>
          <div>
            <button className="btn">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
