import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProductSlideCardProps {
    name: string;
    price: number;
    imageUrl: string;
    slug: string;
}

export default function ProductSlideCard({
    name,
    price,
    imageUrl,
    slug
}: ProductSlideCardProps) {
    return (
        <Link href={`/product/${slug}`}>
            <div className='product-card'>
                <Image src={imageUrl} alt="asdas" loading='lazy' width={380} height={400} className='product-image' />
                <p className='product-name'>{name}</p>
                <p className='product-price'>${price}.00</p>
            </div>
        </Link>
    )
}
