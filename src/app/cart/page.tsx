import ItemCard from "@/components/ItemCard";
import { cookies } from "next/headers";
import { getProductsByIds } from "../../../sanity/utils";
import { urlForImage } from "../../../sanity/lib/image";
import { ShoppingBag } from "lucide-react";
import { cartItemsTable, cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import CartPageContainer from "@/components/CartPageContainer";

async function getUserCart() {
  const cookie = cookies();
  const getUserId = cookie.get('user_id')?.value;
  if (!getUserId) {
    return {
      message: 'No cart found.'
    }
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

    return {
      products,
      cartId: id
    }
  } catch (error) {
    console.log(error);
  }
}




export default async function Cart() {
  const data = await getUserCart();

  let _products: any[] = [];
  let quantity = 0;
  let subtotal = 0;

  if (data?.products) {
    _products = await getProductsByIds(
      data.products.map(d => d.product_id)
    )

    quantity = data.products.map(p => p.quantity).reduce((a, b) => a + b, 0)

    subtotal = _products.filter((p, index) =>
      p._id === data.products[index].product_id
    ).map((p, index) =>
      p.price * data.products[index].quantity
    ).reduce((a, b) => a + b, 0)
  }

  return <CartPageContainer
    _products={_products}
    products={data?.products ? data?.products : []}
    quantity={quantity}
    subtotal={subtotal}
  />
}
