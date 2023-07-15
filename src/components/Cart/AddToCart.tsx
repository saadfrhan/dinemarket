"use client";

import { addToCart } from '@/server-actions/add-to-cart';
import { ShoppingCart } from 'lucide-react';
import React, { useTransition } from 'react'
import { toast } from 'react-hot-toast';
import { Button } from '../ui/button';

export default function AddToCart({
  _id, quantity, price, name
}: {
  _id: string; quantity: number, price: number, name: string
}) {
  let [_, startTransition] = useTransition();

  return ( 
    <div className="add-to-cart">
      <Button size="md" onClick={() => {
        startTransition(
          () => {
            void addToCart({
              product_id: _id,
              quantity
            })
            toast.success(`${quantity}x ${name} has been added to your cart.`)
          }
        );
      }}>
        <ShoppingCart height={20} width={20} /> Add to Cart
      </Button>

      <p className="price">
        ${price}.00
      </p>
    </div>
  )
}
