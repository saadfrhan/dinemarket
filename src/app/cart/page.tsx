import Image from 'next/image'
import React from 'react'
import ProductTwo from '/public/big.png';
import { MinusIcon, PlusIcon, Trash2Icon } from 'lucide-react';

export default function Cart() {
  return (
    <div className="cart-wrapper">
      <h2>Shopping Cart</h2>
      <div className="cart-container">
        <div className="cart-items">
          <div className="item-card">
            <div className="item-image">
              <Image src={ProductTwo} alt="somethin truly special" />
            </div>
            <div className="item-details">
              <div className="name-and-remove">
                <h3>Flex Sweatpants</h3>
                <button className="remove-item">
                  <Trash2Icon width={28} height={28} />
                </button>
              </div>
              <p className="item-tag">Dress</p>
              <p className="delivery-est">Delivery Estimation</p>
              <p className="delivery-days">5 Working Days</p>
              <div className="price-and-qty">
                <span className="price">$145</span>
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
