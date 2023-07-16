"use client";

import { AlignRight, X } from 'lucide-react'
import React, { useState } from 'react'
import Logo from '../Logo';
import NavBtns from '../NavBtns';
import UserOptions from '@/components/auth/UserOptions';

export default function MobileNavbar() {
    const [showOverlay, setShowOverlay] = useState(false);


    return (
        <div className="nav-mobile-box">

            <div className={`
  ${showOverlay &&
                `h-screen flex flex-col bg-white items-center justify-center fixed top-0 left-0 w-full z-[3]`}`
            }>

                {!showOverlay && <div
                    className="absolute max-md-650:top-8 max-md-650:right-8 max-[825px]:top-12 max-[825px]:right-12 cursor-pointer max-lg-1k:top-16 z-[1] max-lg-1k:right-16"
                >
                    <AlignRight
                        className='cursor-pointer'
                        width="40" height="30"
                        onClick={() => setShowOverlay(true)}
                    />
                </div>}

                <div>

                    <div className="flex justify-between items-center m-auto">
                        <div className='absolute max-md-650:top-8 max-md-650:left-8 max-[825px]:top-12 max-[825px]:left-12 cursor-pointer max-lg-1k:top-16 max-lg-1k:left-16'>
                            <Logo />
                        </div>
                        {showOverlay && (<X
                            className="absolute max-md-650:top-8 max-md-650:right-8 max-[825px]:top-12 max-[825px]:right-12 cursor-pointer max-lg-1k:top-16 max-lg-1k:right-16" width="40" height="30"
                            onClick={() => setShowOverlay(false)}
                        />)}
                    </div>

                    {showOverlay && <div className="flex flex-col items-center text-center gap-[1rem] justify-center">
                        <UserOptions />
                        <NavBtns className='text-center flex flex-col gap-4' />
                    </div>}

                </div>
            </div>

        </div>
    )
}
