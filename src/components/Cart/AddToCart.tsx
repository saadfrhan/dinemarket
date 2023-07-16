"use client";

import { addToCart } from '@/server-actions/add-to-cart';
import { LogInIcon, ShoppingCart } from 'lucide-react';
import React, { useTransition } from 'react'
import { toast } from 'react-hot-toast';
import { Button, buttonVariants } from '../ui/button';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';

export default function AddToCart({
  _id, quantity, price, name
}: {
  _id: string; quantity: number, price: number, name: string
}) {
  let [_, startTransition] = useTransition();

  return (
    <div className="add-to-cart">
      <SignedIn>
        <Button size="md" onClick={() => {
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
        }}>
          <ShoppingCart height={20} width={20} />
          Add to Cart
        </Button>
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in" className={buttonVariants({
          variant: 'default',
          size: 'md',
        })}>
            <LogInIcon height={20} width={20} />
            Login
        </Link>
      </SignedOut>

      <p className="price">
        ${price}.00
      </p>
    </div>
  )
}
