import { Frown } from 'lucide-react'
import { cookies } from 'next/headers';
import Link from 'next/link'
import React from 'react'

export default function PaySuccess() {

  const cookie = cookies();
  const userId = cookie.get('user_id')?.value;

  return (
    <div className='canceled'>
      {userId && (<>
        <p className='icon'>
          <Frown size={80} />
        </p>
        <h1>We regret to inform you that your order has been canceled.</h1>
        <p>Check your email inbox for the receipt</p>
      </>)}
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
