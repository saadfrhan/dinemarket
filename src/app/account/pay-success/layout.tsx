"use client";

import { runConfetti } from '@/lib/confetti';
import { ReactNode, useEffect } from 'react'

export default function Layout({
    children
}: {
    children: ReactNode
}) {

    useEffect(() => {
        runConfetti();
    }, [])

    return (
        <div>{children}</div>
    )
}
