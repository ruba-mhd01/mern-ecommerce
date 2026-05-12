import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { cartService } from "../services/api";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    try {
      const data = await cartService.getCart();
      setCart(data);
    } catch { }
  };


  const addToCart = async (productId) => {
    await cartService.addToCart(productId);
    fetchCart();
  };

  const updateQuantity =
    async (id, action) => {
      await cartService.updateQuantity(
        id,
        action
      );
      fetchCart();
    };

  const removeFromCart = async (productId) => {
    await cartService.removeFromCart(productId);
    fetchCart();
  };

  const isInCart = (id) => {
    return cart.some(
      (item) =>
        item.product._id === id
    );
  };


  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchCart();
    }
  }, []);


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        isInCart,
        totalItems: cart.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () =>
  useContext(CartContext);