import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

import StarRating from "../ui/StarRating";
import { useAuth } from "../../context/AuthContext";

export default function ProductCard({ product }) {
  const { openAuth } = useAuth();

  const token = localStorage.getItem("token");

  const { addToCart, isInCart } = useCart();

  const {
    toggleWishlist,
    isLiked,
  } = useWishlist();


  const handleCart = () => {

    if (!token) {
      return openAuth();
    }

    addToCart(product._id);
  };


  const handleWishlist = () => {

    if (!token) {
      return openAuth();
    }

    toggleWishlist(product._id);
  };

  const added = isInCart(product._id)

  return (

    <div className="bg-white rounded-2xl p-4 shadow-sm border hover:shadow-md transition">

      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-contain"
      />


      {/* CATEGORY */}
      <p className="text-xs text-zinc-500 mt-3 capitalize">
        {product.category}
      </p>


      {/* TITLE */}
      <h3 className="font-medium mt-1 line-clamp-2 min-h-[48px]">
        {product.name}
      </h3>


      {/* RATING */}
      <div className="mt-2">

        <StarRating
          rating={product.rating?.rate}
          count={product.rating?.count}
        />

      </div>


      {/* PRICE */}
      <p className="text-lg font-bold mt-3">
        ₹{product.price}
      </p>


      {/* ACTIONS */}
      <div className="flex gap-2 mt-4">

        <button
          onClick={handleCart}
          disabled={added}
          className={`
    flex-1
    h-10
    rounded-xl
    transition
    font-medium
    ${added
              ? "bg-green-500 text-white cursor-default"
              : "bg-black text-white hover:opacity-90"
            }
  `}
        >

          {added
            ? "Added ✓"
            : "Add to Cart"}

        </button>

        <button
          onClick={handleWishlist}
          className={`w-10 rounded-xl border transition ${isLiked(product._id)
            ? "bg-black text-white border-black"
            : "bg-white"
            }`}
        >
          {isLiked(product._id)
            ? "♥"
            : "♡"}
        </button>

      </div>

    </div>
  );
}