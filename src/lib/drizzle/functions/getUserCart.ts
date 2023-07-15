import { auth } from "@clerk/nextjs";
import { cartItemsTable, cartTable, db } from "../tables";
import { eq } from "drizzle-orm";

export default async function getUserCart() {
  const { userId } = auth()
  if (!userId) {
    return {
      message: 'Not authenticated.'
    }
  }
  try {
    const [{ id }] = await db
      .select({
        id: cartTable.id
      })
      .from(cartTable)
      .where(
        eq(cartTable.user_id, userId)
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

    return {
      products,
      cartId: id
    }
  } catch (error) {
    console.log(error);
  }
}