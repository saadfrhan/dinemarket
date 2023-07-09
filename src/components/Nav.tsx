import { getCartItemsCount } from '@/lib/utils'
import React from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNav'

export default async function Nav() {
    const {items_count} = await getCartItemsCount()
    return (
        <nav className="block">
            <Navbar items_count={items_count} />
            <MobileNavbar items_count={items_count} />
        </nav>
    )
}
