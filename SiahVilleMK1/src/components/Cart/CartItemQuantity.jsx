import { useCart } from "../../CartContext";

function CartItemQuantity({ item }) {
  const { addToCart, removeFromCart } = useCart();
  return (
    <div className=" shadow-xl flex items-center justify-evenly text-2xl font-bold rounded-lg min-w-40 h-12 mt-3">
      <button
        className="border w-8 h-8 rounded-md flex items-center justify-center hover:text-white hover:bg-black"
        onClick={() => removeFromCart(item)}
      >
        -
      </button>
      <span className="text-md ">{item?.quantity}</span>
      <button
        className="border w-8 h-8 rounded-md flex items-center justify-center hover:text-white hover:bg-black"
        onClick={() => addToCart(item)}
      >
        +
      </button>
    </div>
  );
}

export default CartItemQuantity;
