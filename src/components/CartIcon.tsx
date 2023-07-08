import { ShoppingCart } from 'lucide-react'

async function getCartItems() {
  const domain = process.env.NODE_ENV === "development" ?
  "https://localhost:3000" : "https://fullstack-online-marketplace.vercel.app"
  try {
    const response = await fetch(`${domain}/api/cart-items-count`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        const data = await response.json();
        return data;
    }
  } catch(error) {
    console.error("An error occurred: ", error);
  }
}

async function CartIcon() {
  const count = await getCartItems()

  console.log(count);

  return (
    <div className="relative">
      <div className="bg-[#f1f1f1] rounded-full p-3 duration-300 cursor-pointer hover:scale-110">
        <ShoppingCart height="22" width="22" /> 
      </div>
      <span className='absolute top-0 right-0 text-[12px] text-white bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-[600] z-[1]'>
        0
      </span>
    </div>
  )
}


export default CartIcon;