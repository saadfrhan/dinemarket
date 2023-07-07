"use client";

import React, { useState } from 'react'
import AddToCart from './AddToCart'
import { MinusIcon, PlusIcon } from 'lucide-react'

export default function ProductDetails({
    _id, name, tags, price
}: {
    _id: string; name: string; tags: string; price: number;
}) {
    const [quantity, setQuantity] = useState(0);
    function handleQuantityChange(
        change: 'increase' | 'decrease'
    ) {
        if (change === 'increase') {
            setQuantity(q => q + 1)
        } else {
            if (quantity === 1) {
                return;
            } else {
                setQuantity(q => q - 1);
            }
        }
    }
    return (
        <div className="product-details">

            <div className="name-and-category">
                <h3>{name}</h3>
                <span>{tags}</span>
            </div>

            <div className="size">
                <p>SELECT SIZE</p>
                <ul>
                    <li>XS</li>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                </ul>
            </div>

            <div className="quantity-desc">
                <h4>Quantity:</h4>
                <div>
                    <span className="minus" onClick={() => handleQuantityChange('decrease')}>
                        <MinusIcon />
                    </span>
                    <span className="num">{quantity}</span>
                    <span className="plus" onClick={() => handleQuantityChange('increase')}>
                        <PlusIcon />
                    </span>
                </div>
            </div>

            <AddToCart _id={_id} price={price} quantity={quantity} />

        </div>
    )
}
