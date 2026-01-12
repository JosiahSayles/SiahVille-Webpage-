import React from "react";
import CartItemQuantity from "../Cart/CartItemQuantity";

function CartSummary({ item }) {
  return (
    <>
      <li className="flex justify-items-left items-center border mr-20 ml-20 mt-2">
        <div className="flex justify-items-center items-center  ml-2 mr-1 ">
          <img
            src={item.cover}
            alt={item.title}
            className="max-w-20 h-20 rounded-2xl shadow-lg mt-2 mb-2 "
          />
        </div>
        <div className="ml-5 flex-col text-sm pr-10">
          <h2 className="">{item.title}</h2>
          <p className="mt-1"> ${item.cost}</p>
          <p> Quantity: {item.quantity}</p>
        </div>
      </li>
    </>
  );
}
export default CartSummary;
