import React from "react";
import { useCart } from "../../CartContext";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import "./Cart.css";

export default function Cart() {
  const { cart } = useCart();

  if (cart === null) {
    return (
      <section>
        <h2>Your cart is currently empty...</h2>
        <h3>Checkout out our catalog page to find all of out stickers!</h3>
      </section>
    );
  }

  return (
    <section className="flex justify-center items-center">
      <div className="min-h-screen flex flex-col max-w-5xl ml-85 mr-2 mt-30 items-center ">
        <h2 className="font text-8xl mb-5 text-shadow-lg underline">Cart</h2>
        <ul className=" rounded-2xl flex flex-wrap justify-center ">
          {cart.map((sticker) => (
            <CartItem key={sticker.id} item={sticker} />
          ))}
        </ul>
      </div>
      <div className="bg-slate-100 max-w-80 max-h-400  text-lg rounded-xl py-5 flex-col justify-items-center">
        <h2 className="underline font-semibold">Cart Summary</h2>
        <p>Total items selected: </p>
        <div>
          <hr className="h-[1px] mt-3 mb-3 border-0 w-70 bg-gray-700" />
        </div>
        <ul>
          {cart.map((sticker) => (
            <CartSummary key={sticker.id} item={sticker} />
          ))}
        </ul>
        <div>
          <hr className="h-[1px] mt-3 mb-3 border-0 w-70 bg-gray-700" />
        </div>

        <div>
          <h3>Grand total: </h3>
        </div>

        <div className="flex-col ml-3">
          <p>Estimated ETA: </p>
          <p>Return Policy:</p>
          <p className="text-xs">
            These Items are eligible for return within 30 days of purchase.
            Checkout our Returns page for more info
          </p>
        </div>
        <div>
          <button className="border-2 mt-5 rounded-xl p-2 text-white bg-black hover:bg-white hover:text-black ">
            Checkout now
          </button>
        </div>
      </div>
    </section>
  );
}
