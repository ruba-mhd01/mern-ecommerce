import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { wishlistService } from "../services/api";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {

  const [wishlist, setWishlist] = useState([]);


  const fetchWishlist = async () => {

    try {

      const data =
        await wishlistService.getWishlist();

      setWishlist(data);

    } catch {}
  };


  const toggleWishlist = async (productId) => {

    await wishlistService.toggleWishlist(productId);

    fetchWishlist();
  };


  // ✅ REMOVE
  const removeWishlist = async (id) => {

    await wishlistService.removeWishlist(id);

    fetchWishlist();
  };


  const isLiked = (id) => {

    return wishlist.some(
      (item) => item.product._id === id
    );
  };


  useEffect(() => {

    if (localStorage.getItem("token")) {
      fetchWishlist();
    }

  }, []);


  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        removeWishlist,
        isLiked,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () =>
  useContext(WishlistContext);