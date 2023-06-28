import { ShoppingCart } from 'lucide-react'
import React from 'react'

function CartIcon() {
  return (
    <div className="relative">
      <div className="bg-[#f1f1f1] rounded-full p-3 duration-300 cursor-pointer hover:scale-110">
        <ShoppingCart height="22" width="22" /> 
      </div>
      <span className='absolute top-0 right-0 text-[12px] text-white bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-[600] z-[1]'>0</span>
    </div>
  )
}


export default CartIcon

// position: absolute;
// top: 0;
// right: 5px;
// font-size: 12px;
// color: #eee;
// background-color: #f02d34;
// width: 18px;
// height: 18px;
// border-radius: 50%;
// text-align: center;
// font-weight: 600;
