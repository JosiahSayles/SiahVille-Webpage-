import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = (sticker) => {
    const itemExists = cart.find((cartItem) => cartItem.id === sticker.id);

    if (itemExists) {
      const newCartArray = cart.map((cartItem) =>
        cartItem.id === sticker.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(newCartArray);
    } else {
      const newCartArray = [...cart, { ...sticker, quantity: 1 }];
      setCart(newCartArray);
    }
  };

  const removeFromCart = (sticker) => {
    const newCartArray = cart
      .map((cartItem) =>
        cartItem.id === sticker.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      .filter((cartItem) => cartItem.quantity > 0);
    setCart(newCartArray);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw Error("useCart must be used inside the CartProvider");
  }
  return context;
}
