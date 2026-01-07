import React from "react";
import { useCart } from "../../CartContext";
import CartItem from "./CartItem";
import "./Cart.css";

export default function Cart() {
  const { cart } = useCart();
  return (
    <section className="min-h-screen flex flex-col max-w-7xl mx-auto p-10 mt-30 items-center ">
      <h2 className="font text-8xl mb-20 ">Cart</h2>
      <ul className=" rounded-2xl flex ">
        {cart.map((sticker) => (
          <CartItem key={sticker.id} item={sticker} />
        ))}
      </ul>

      <div></div>
    </section>
  );
}
