import React from 'react'
import Logo from '../Logo'
import NavBtns from '../NavBtns'
import Search from '../Search'
import CartIcon from '../CartIcon'
import UserBtn from '@/components/auth/UserButton'
import { getItemsCount } from '@/lib/drizzle/functions/getItemsCount'

export default async function Navbar() {
  const count = await getItemsCount();
  return (
      <div className='max-[650px]:m-[2rem] max-[1000px]:m-[4rem] max-[1210px]:m-[2rem] mt-[2rem] mb-[0rem] mx-[6rem] max-lg-1k:hidden'>
        <div className="flex justify-between items-center w-full m-auto">
          <Logo />
          <NavBtns />
          <Search />
          <UserBtn />
          <CartIcon {...count} />
        </div>
      </div>
  )
}
