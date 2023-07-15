import { eq } from "drizzle-orm";
import { cartItemsTable, cartTable, db } from "../tables";

export default async function emptyCart(userId: string) {
  if (userId) {
    try {
      const existingCart = await db
        .select()
        .from(cartTable)
        .where(eq(cartTable.user_id, userId))
        .limit(1);

      if (existingCart) {
        await db.update(cartTable).set({
          items_count: 0
        }).where(eq(cartTable.user_id, userId))
        await db.delete(cartItemsTable).where(eq(cartItemsTable.cart_id, existingCart[0].id))
        console.log("Deleted successfully!");
      } else {
        console.log("Cart do not exist.");
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log('Not authenticated!');
  }
}