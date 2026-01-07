import React from "react";
import CartItemQuantity from "../Cart/CartItemQuantity";

function CartItem({ item }) {
  return (
    <>
      <li className="flex-col justify-items-center mb-5 shadow-2xl">
        <div className="flex-col justify-items-center  rounded-3xl p-10 items-center shadow-2xl ml-2 mr-2 ">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <img
            src={item.cover}
            alt={item.title}
            className="max-w-80 h-100 rounded-2xl shadow-lg mt-2 "
          />
          <p className="text-xl font-bold mt-2"> Price: ${item.cost} each</p>
        </div>
        <CartItemQuantity item={item} />
      </li>

      <div></div>
    </>
  );
}
export default CartItem;
