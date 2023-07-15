"use server";

import { auth } from '@clerk/nextjs';
import { cartItemsTable, cartTable, db } from '../lib/drizzle/tables';
import { and, eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function deleteFromCart({ product_id }: {
    product_id: string
}) {

    const {userId: user_id} = auth()

    console.log('user_id:', user_id);

    if (!user_id) {
        console.log('Unauthenticated!');
        return;
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
