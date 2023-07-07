import { cartItemsTable, cartTable, db } from "@/lib/drizzle";
import { NextResponse } from "next/server";
import { v4 as uuid } from 'uuid';
import { and, eq } from "drizzle-orm";
import { cookies } from 'next/headers';

export async function GET() {
    try {
        const res = await db.select().from(cartTable);
        return NextResponse.json({ res });
    } catch (error) {
        return NextResponse.json({ error })
    }
}

export async function POST(request: Request) {
    const { product_id, quantity } = await request.json();
    const setCookies = cookies();

    if (!setCookies.has('user_id')) {
        // @ts-ignore
        setCookies.set('user_id', uuid());
    }

    const userId = setCookies.get('user_id')?.value as string;

    try {
        // Check if a cart already exists for the user
        const existingCart = await db
            .select()
            .from(cartTable)
            .where(eq(cartTable.user_id, userId))
            .limit(1)

        let cartId;

        if (existingCart) {
            // If cart exists, use existing cart's ID
            cartId = existingCart[0].id;
        } else {
            // Create a new cart and use its ID
            const [{ id }] = await db
                .insert(cartTable)
                .values({
                    user_id: userId
                })
                .returning();
            cartId = id;
        }

        // Check if the product already exists in the cart
        const existingCartItem = await db
            .select()
            .from(cartItemsTable)
            .where(
                and(eq(cartItemsTable.cart_id, cartId),
                eq(cartItemsTable.product_id, product_id))
            )
            .limit(1)

        if (existingCartItem) {
            // If the item exists, update the quantity      
            await db
                .update(cartItemsTable)
                .set({ quantity: existingCartItem[0].quantity + quantity })
                .where(eq(cartItemsTable.id, existingCartItem[0].id));
        } else {
            // Insert the new item into the cart
            await db
                .insert(cartItemsTable)
                .values({
                    cart_id: cartId,
                    product_id,
                    quantity
                });
        }

        return NextResponse.json(
            { message: 'Cart and cart items successfully created or updated!' },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "An error occurred while creating or updating the cart and cart items",
                error
            },
            { status: 500 }
        );
    }
}
