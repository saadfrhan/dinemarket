"use client";

import { addToCart } from '@/server-actions/add-to-cart';
import { deleteFromCart } from '@/server-actions/delete-product';
import { MinusIcon, PlusIcon, Trash2Icon } from 'lucide-react'
import Image from 'next/image'
import React, { useState, useTransition } from 'react'

interface ItemCardProps {
    _id: string;
    imageUrl: string;
    name: string;
    price: number;
    quantity: number;
    tags: string;
    cartId: number;
}

export default function ItemCard({
    imageUrl,
    name,
    price,
    quantity,
    tags,
    _id,
    cartId
}: ItemCardProps) {

    let [_, startTransition] = useTransition();
    const [_quantity, setQuantity] = useState(quantity ? quantity : 0)
    console.log(
        {
            product_id: _id,
            quantity: _quantity
        }
    );
    

    function handleServerRequest() {
        startTransition(
            () => {
                void addToCart({
                    product_id: _id,
                    quantity: _quantity > quantity ? _quantity - quantity : quantity - _quantity
                })
            }
        );
    }

    return (
        <div className="item-card">
            <div className="item-image">
                <Image src={imageUrl} alt={name} width={200} height={190} />
            </div>
            <div className="item-details">
                <div className="name-and-remove">
                    <h3>{name}</h3>
                    <button className="remove-item">
                        <Trash2Icon width={28} height={28} onClick={() => {
                            startTransition(() => {
                                void deleteFromCart({
                                    cart_id: cartId,
                                    product_id: _id
                                })
                            })
                        }} />
                    </button>
                </div>
                <p className="item-tag">{tags}</p>
                <p className="delivery-est">Delivery Estimation</p>
                <p className="delivery-days">5 Working Days</p>
                <div className="price-and-qty">
                    <span className="price">${price}</span>
                    <div>
                        <span className="minus"
                            onClick={() => {
                                setQuantity(q => q - 1);
                                handleServerRequest()
                            }}
                        >
                            <MinusIcon />
                        </span>
                        <span className="num">{_quantity}</span>
                        <span className="plus"
                            onClick={() => {
                                setQuantity(q => q + 1)
                                handleServerRequest()
                            }}
                        >
                            <PlusIcon />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
