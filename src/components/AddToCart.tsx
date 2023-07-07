"use client";

import { addToCart } from '@/server-actions/add-to-cart';
import { ShoppingCart } from 'lucide-react';
import React, { useTransition } from 'react'
import { toast } from 'react-hot-toast';

export default function AddToCart({
    _id, quantity, price
}: {
    _id: string; quantity: number, price: number
}) {
  let [_, startTransition] = useTransition();

  return (
    <div className="add-to-cart"
          onClick={() => {
            startTransition(
              () =>
                void addToCart({
                  product_id: _id,
                  quantity
                })
            );
            console.log(_id)
            console.log(quantity)
            toast.success(`
            ${quantity}x ${name} has been added to your cart.
            `)
          }}
        >
          <button className="btn">
            <ShoppingCart height={20} width={20} /> Add to Cart
          </button>

          <p className="price">
            ${price}.00
          </p>
        </div>
  )
}
