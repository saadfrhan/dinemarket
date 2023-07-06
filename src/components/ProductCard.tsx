import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/image';
import { ProductCardI } from '@/types';

export default function ProductCard({
    product: {
        image,
        name,
        slug,
        tags,
        price
    }
}: { product: ProductCardI }) {
    return (
        <Link href={`/product/${slug}`}>
            <div className="Allproduct-card">
                <Image alt={name} src={urlForImage(image && image[0]).url()} width="250" height="270" />
                <div className="Allproduct-name">{name}</div>
                <div className="Allproduct-tags">{tags}</div>
                <div className="Allproduct-price">${price}</div>
            </div>
        </Link>
    )
}
