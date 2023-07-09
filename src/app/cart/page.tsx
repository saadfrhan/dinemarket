import ItemCard from "@/components/ItemCard";
import { domain } from "@/constants";
import { cookies } from "next/headers";
import { getProductsByIds } from "../../../sanity/utils";
import { urlForImage } from "../../../sanity/lib/image";
import { ShoppingBag } from "lucide-react";

async function getUserCart() {
  try {
    const response = await fetch(`${domain[process.env.NODE_ENV]}/api/cart`, {
      headers: {
        Cookie: cookies().toString()
      }
    });
    return await response.json()
  } catch (error) {
    console.log(error);
  }
}

export default async function Cart() {
  const { products, cartId }: {
    products: {
      product_id: string,
      quantity: number
    }[],
    cartId: number;
  } = await getUserCart();

  const _products = products ? await getProductsByIds(products.map(d => d.product_id)) : [];

  const quantity = products ? products.map(p => p.quantity).reduce((a, b) => a + b, 0) : 0;
  const subtotal = _products ? _products.filter((p, index) => p._id === products[index].product_id).map((p, index) => p.price * products[index].quantity).reduce((a,b) => a + b, 0) : 0

  return (
    <div className="cart-wrapper">
      <h2>Shopping Cart</h2>
      <div className="cart-container">
        <div className="cart-items">
          {_products.length > 0 && _products.map((p, index) => (
            <ItemCard
              imageUrl={urlForImage(p.image && p.image[0]).url()}
              name={p.name}
              price={p.price}
              _id={p._id}
              quantity={products[index].quantity}
              tags={p.tags}
              cartId={cartId}
            />
          ))}
          {_products.length === 0 && (
            <div className="empty-cart">
              <ShoppingBag size={150} />
              <h1>Your shopping bag is empty</h1>
            </div>
          )}
        </div>
        {_products.length > 0 && <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="qty">
            <p>Quantity</p>
            <span>{quantity} {quantity > 1 ? " Products" : " Product"}</span>
          </div>
          <div className="subtotal">
            <p>Sub Total</p>
            <span>$ {subtotal}</span>
          </div>
          <div>
            <button className="btn">
              Proceed to Checkout
            </button>
          </div>
        </div>}
      </div>
    </div>
  )
}
