import { Dispatch } from "react";

export interface ProductCardI {
    _id: string;
    name: string;
    tags: string;
    price: number;
    image: any[];
    slug: string;
}

export interface MoreProdInfoI {
    details: [ArrayChildren];
    care: ArrayChildren[]
}

export interface ArrayChildren {
    children: [
        { text: string; }
     ]
}