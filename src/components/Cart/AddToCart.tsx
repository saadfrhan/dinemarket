"use client";

import { addToCart } from '@/server-actions/add-to-cart';
import { LogIn, ShoppingCart } from 'lucide-react';
import React, { useTransition } from 'react'
import { toast } from 'react-hot-toast';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { auth } from '@clerk/nextjs';

export default function AddToCart({
  _id, quantity, price, name
}: {
  _id: string; quantity: number, price: number, name: string
}) {
  let [_, startTransition] = useTransition();
  const { push } = useRouter();
  const { userId } = auth()

  return (
    <div className="add-to-cart">
      <Button size="md" onClick={
        userId ? () => {
          startTransition(
            () => {
              void addToCart({
                product_id: _id,
                quantity
              })
              toast.success(
                `${quantity}x ${name} has been added to your cart.`, {
                duration: 1000
              })
            }
          )
        } : () => {
          toast.loading(`Redirecting to signin page...`)
          push('/sign-in')
        }
      }>
        {userId ? <ShoppingCart height={20} width={20} /> : <LogIn height={20} width={20} />}
        {userId ? "Add to Cart" : "Sign In"}
      </Button>

      <p className="price">
        ${price}.00
      </p>
    </div>
  )
}
