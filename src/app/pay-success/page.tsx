import { SmileIcon } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'
import { cartItemsTable, cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";

export async function EmptyCart(
    userId: number
) {
    try {
        const doCartExist = await db.select({
            id: cartTable.id
        }).from(cartTable).where(eq(cartTable.id, userId))
    
        if (doCartExist) {
            await db.update(cartTable).set({
              items_count: 0
            }).where(eq(cartTable.user_id, userId))
            await db.delete(cartItemsTable).where(eq(cartItemsTable.cart_id, doCartExist[0].id))
            console.log("Deleted successfully!");
        } else {
            console.log("Cart do not exist.");
        }
    } catch (error) {
        console.log(error);
    }
}

export default async function PaySuccess() {
  
  const cookie = cookies();
  const userId = cookie.get('user_id')?.value;
  
  if (userId) {
    await EmptyCart(Number(userId));
  }

  return (
    <div className='success'>
      {userId && <>
        <p className='icon'>
          <SmileIcon size={80} />
        </p>
        <h1>Thank you for your order!</h1>
        <p>Check your email inbox for the receipt</p>
      </>}
      <p className='description'>
        If you have any questions, please email
        <a href="mailto:dinemarket@example.com">
          dinemarket@example.com
        </a>
      </p>
      <Link href="/">
        <button className='btn' type="button">
          Continue Shopping
        </button>
      </Link>
    </div>
  )
}
