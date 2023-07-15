import { auth } from "@clerk/nextjs";
import { cartTable, db } from "../tables";
import { eq } from "drizzle-orm";

export async function getItemsCount() {
    const { userId } = auth()
    if (!userId) {
      return {
        items_count: 0
      }
    } else {
      const response = await db.select({
        items_count: cartTable.items_count
      }).from(cartTable).where(eq(cartTable.user_id, userId))
  
      if (!response[0]?.items_count) {
        return {
          items_count: 0
        }
      } 
      
      if (response[0]?.items_count > 9) {
        return {
          items_count: "+9"
        }
      }
      
  
      return { items_count: response[0]?.items_count }
    }
  }