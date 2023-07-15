"use server";

import { cookies } from 'next/headers';
import { cartItemsTable, cartTable, db } from '../lib/drizzle';
import { and, eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import crypto from 'crypto'

export async function deleteFromCart({ product_id }: {
    product_id: string
}) {

    const setCookies = cookies();
    const getUserId = setCookies.get('user_id')?.value;
    const user_id = Number(getUserId)

    console.log('user_id:', user_id);

    if (!user_id) {
        // @ts-ignore
        setCookies.set('user_id', crypto.randomInt(1, 1000000));
        console.log('user_id generated:', getUserId);
    }

    try {
        const [{ id, items_count }] = await db.select({
            id: cartTable.id,
            items_count: cartTable.items_count
        }).from(cartTable)
            .where(eq(cartTable.user_id, user_id))

        const [{ product_id: deletedProductId, cart_id: cartId, quantity }] = await db.delete(
            cartItemsTable
        )
            .where(
                and(
                    eq(cartItemsTable.product_id, product_id),
                    eq(cartItemsTable.cart_id, id)
                )
            ).returning()

        await db
            .update(cartTable)
            .set({ items_count: items_count! - quantity })
            .where(eq(cartTable.user_id, user_id));

        revalidatePath('/');


        console.log({
            message: `#${deletedProductId} Product deleted from #${cartId}`
        });


    } catch (error) {
        revalidatePath('/');

        console.log({
            message: 'Error in deleting a product from cart.'
        });

    }
}
