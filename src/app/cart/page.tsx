import getUserCart from "@/lib/drizzle/functions/getUserCart";
import { getProductsByIds } from "../../../sanity/utils";
import CartPageContainer from "@/components/Cart/CartPageContainer";

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
