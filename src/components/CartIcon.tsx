"use client";

import { useCookies } from 'react-cookie';
import { ShoppingCart } from 'lucide-react'
import { useEffect, useState } from 'react';
import { CookiesProvider } from 'react-cookie';

function CartIcon() {

  const [itemsCount, setItemsCount] = useState(0);
  const [cookies] = useCookies(['user_id'])

  function getItemsCount() {
    fetch('/api/cart-items-count', {
      headers: {
        Cookie: cookies.user_id
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => (
        setItemsCount(data.items_count)
      ))
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }

  useEffect(() => {
    getItemsCount()
  }, [])

  return (
    <CookiesProvider>
      <div className="relative">
        <div className="bg-[#f1f1f1] rounded-full p-3 duration-300 cursor-pointer hover:scale-110">
          <ShoppingCart height="22" width="22" />
        </div>
        <span className='absolute top-0 right-0 text-[12px] text-white bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-[600] z-[1]'>
          {itemsCount}
        </span>
      </div>
    </CookiesProvider>
  )
}


export default CartIcon;