import { cartItemsTable, cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const cookie = cookies();
    const getUserId = cookie.get('user_id')?.value;
    if (!getUserId) {
        return NextResponse.json({
            message: 'No cart found.'
        })
    }
    try {
        const [{ id }] = await db
            .select({
                id: cartTable.id
            })
            .from(cartTable)
            .where(
                eq(cartTable.user_id, Number(getUserId))
            );

        const products = await db.select({
            product_id: cartItemsTable.product_id,
            quantity: cartItemsTable.quantity,
            cart_id: cartItemsTable.cart_id
        })
            .from(cartItemsTable)
            .where(
                eq(cartItemsTable.cart_id, id)
            )

        return NextResponse.json({
            products,
            cartId: id
        });
    } catch (error) {
        return NextResponse.json({ error })
    }
}


