"use client";

import React from 'react'
import { urlForImage } from '../../../sanity/lib/image'
import ItemCard from './ItemCard'
import { ShoppingBag } from 'lucide-react'
import { ProductCardI } from '@/types'
import getStripe from '@/lib/stripe'
import { toast } from 'react-hot-toast'
import { Button } from '../ui/button';

interface CartPageContainerProps {
  _products: ProductCardI[] | [];
  products: {
    product_id: string;
    quantity: number;
    cart_id: number | null;
  }[]
  quantity: number;
  subtotal: number;
}


export default function CartPageContainer(
  {
    _products,
    products,
    quantity,
    subtotal
  }: CartPageContainerProps
) {

  async function handleCheckout() {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe/webhook', {
      body: JSON.stringify([..._products.map((p, i) => ({
        image: p.image,
        name: p.name,
        price: p.price,
        quantity: products[i].quantity
      }))]),
      method: 'POST'
    })

    if (response.status === 500) return;

    const {session} = await response.json();

    toast.loading('Redirecting...');

    return stripe?.redirectToCheckout({
      sessionId: session.id
    })
  }

  return (
    <div className="cart-wrapper">

      <h2>Shopping Cart</h2>

      <div className="cart-container">

        <div className="cart-items">

          {_products.length > 0 && _products.map((p, index) => (
            <ItemCard
              imageUrl={urlForImage(p.image && p.image[0]).url()}
              name={p.name}
              key={index}
              price={p.price}
              _id={p._id}
              quantity={products[index].quantity}
              tags={p.tags}
            />
          ))}

          {_products.length === 0 && (
            <div className="empty-cart">
              <ShoppingBag size={150} />
              <h1>Your shopping bag is empty</h1>
            </div>
          )}

        </div>

        {_products.length > 0 && (
          <div className="order-summary">

            <h3>Order Summary</h3>

            <div className="qty">
              <p>Quantity</p>
              <span>{quantity} {quantity > 1 ? " Products" : " Product"}</span>
            </div>

            <div className="subtotal">
              <p>Sub Total</p>
              <span>$ {subtotal}</span>
            </div>

              <Button onClick={handleCheckout} className='justify-center'>
                Proceed to Checkout
              </Button>

          </div>)}

      </div>
    </div>
  )
}
