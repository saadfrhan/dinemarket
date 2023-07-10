import { ShoppingCart } from 'lucide-react'
import Link from 'next/link';

function CartIcon({
  items_count
}: {
  items_count: number | string
}) {
  return (
    <Link className="relative" href="/cart">
      <div className="bg-[#f1f1f1] rounded-full p-3 duration-300 cursor-pointer hover:scale-110">
        <ShoppingCart height="22" width="22" />
      </div>
      <span className='absolute top-0 right-0 text-[12px] text-white bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-[600] z-[1]'>
        {items_count}
      </span>
    </Link>
  )
}


export default CartIcon;