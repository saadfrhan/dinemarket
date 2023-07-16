import { SmileIcon } from 'lucide-react'
import Link from 'next/link'
import { auth } from '@clerk/nextjs';
import emptyCart from '@/lib/drizzle/functions/emptyCart';

export default async function PaySuccess() {
  const { userId } = auth()

  if (userId) {
    await emptyCart(userId);
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
