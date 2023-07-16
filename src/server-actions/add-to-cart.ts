"use server";

import { cartItemsTable, cartTable, db } from '../lib/drizzle/tables';
import { and, eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { auth } from '@clerk/nextjs';

export async function addToCart({ product_id, quantity }: {
    product_id: string,
    quantity: number
}) {

    console.log({
        product_id, quantity
    });

    const { userId: user_id } = auth()

    console.log('user_id:', user_id);

    if (user_id) {
        try {
            // Check if a cart already exists for the user
            const existingCart = await db
                .select()
                .from(cartTable)
                .where(eq(cartTable.user_id, user_id))
                .limit(1);
    
            let cartId = 0;
            let itemsCount = 0;
    
            if (existingCart.length !== 0) {
                // If cart exists, use existing cart's ID
                cartId = existingCart[0].id;
                console.log('existing cart:', existingCart[0]);
                itemsCount = existingCart[0].items_count!;
            } else {
                // Create a new cart and use its ID
                const [{ id }] = await db
                    .insert(cartTable)
                    .values({ user_id })
                    .returning();
    
                cartId = id;
    
                console.log('new cart created. cart ID:', cartId);
            }
    
    
            // Check if the product already exists in the cart
            const existingCartItem = await db
                .select()
                .from(cartItemsTable)
                .where(
                    and(eq(cartItemsTable.cart_id, cartId),
                        eq(cartItemsTable.product_id, product_id))
                )
                .limit(1);
    
            if (existingCartItem.length !== 0) {
                console.log('existing cart item:', existingCartItem[0]);
    
                // If the item exists, update the quantity
                await db
                    .update(cartItemsTable)
                    .set({ quantity: existingCartItem[0].quantity + quantity })
                    .where(eq(cartItemsTable.id, existingCartItem[0].id));
    
                await db
                    .update(cartTable)
                    .set({ items_count: itemsCount + quantity })
                    .where(eq(cartTable.user_id, user_id));
    
                console.log("Existing item quantity updated in the cart.");
    
            } else {
                console.log('new cart item');
    
                // Insert the new item into the cart
                await db
                    .insert(cartItemsTable)
                    .values({
                        cart_id: cartId,
                        product_id,
                        quantity
                    });
    
                await db
                    .update(cartTable)
                    .set({ items_count: itemsCount + quantity });
    
                console.log("New item added to the cart.");
            }
    
            revalidatePath('/');
    
            console.log({
                message: 'Cart and cart items successfully created or updated!',
                status: 200
            });
        } catch (error) {
            console.log('Error:', error);
            revalidatePath('/');
            console.log({
                message: "An error occurred while creating or updating the cart and cart items",
                error,
                status: 500
            });
        }
    } else {
        throw new Error('unauthorized!')
    }
}