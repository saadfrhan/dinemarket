"use client";

import { addToCart } from '@/server-actions/add-to-cart';
import { deleteFromCart } from '@/server-actions/delete-product';
import { MinusIcon, PlusIcon, Trash2Icon } from 'lucide-react'
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation';

interface ItemCardProps {
    _id: string;
    imageUrl: string;
    name: string;
    price: number;
    quantity: number;
    tags: string;
}

export default function ItemCard({
    imageUrl,
    name,
    price,
    quantity,
    tags,
    _id,
}: ItemCardProps) {

    let [_, startTransition] = useTransition();
    const [_quantity, setQuantity] = useState(quantity ? quantity : 0)
    const [disableButton, setDisableButton] = useState(false);

    const decreaseQuantity = () => {
        setQuantity(q => q - 1)
        setDisableButton(true);

        startTransition(() => {
            void addToCart({
                product_id: _id,
                quantity: quantity - 1
            });

            router.refresh();
        });
        setDisableButton(false)
    };

    const increaseQuantity = () => {
        setQuantity(q => q + 1)
        setDisableButton(true);

        startTransition(() => {
            void addToCart({
                product_id: _id,
                quantity: quantity + 1
            });

            router.refresh();
        });
        setDisableButton(false);

    };

    const router = useRouter();

    return (
        <div className="item-card">
            <div className="item-image">
                <Image src={imageUrl} alt={name} width={200} height={190} priority />
            </div>
            <div className="item-details">
                <div className="name-and-remove">
                    <h3>{name}</h3>
                    <button className="remove-item">
                        <Trash2Icon width={28} height={28} onClick={() => {
                            startTransition(() => {
                                void deleteFromCart({
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
                        <span
                            className="minus"
                            onClick={() => decreaseQuantity()}
                            aria-disabled={disableButton}
                        >
                            <MinusIcon />
                        </span>

                        <span className="num">{_quantity}</span>

                        <span
                            className="plus"
                            onClick={() => increaseQuantity()}
                            aria-disabled={disableButton}
                        >
                            <PlusIcon />
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}
