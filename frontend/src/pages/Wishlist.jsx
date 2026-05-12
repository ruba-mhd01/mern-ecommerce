import Navbar from "../components/Navbar/Navbar";

import { useWishlist }
  from "../context/WishlistContext";

import { useCart }
  from "../context/CartContext";
import { Link } from "react-router-dom";
import AppBackground from "../components/layout/AppBackground";

export default function Wishlist() {

  const {
    wishlist,
    removeWishlist,
  } = useWishlist();

  const { addToCart } =
    useCart();


  const handleAddToCart =
    async (item) => {

      // add to cart
      await addToCart(
        item.product._id
      );

      // remove wishlist
      await removeWishlist(
        item._id
      );
    };


  return (

   <AppBackground>

      <Navbar />
      <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-8">

        <Link
          to="/products"
          className="text-sm text-zinc-600 hover:text-black transition"
        >
          ← Continue Shopping
        </Link>

      </div>
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">

          <div>

            <p className="text-sm uppercase tracking-[4px] text-zinc-500 mb-2">
              Saved Products
            </p>

            <h1 className="text-4xl font-black">
              Your Wishlist
            </h1>

          </div>

          <div className="text-right">

            <p className="text-zinc-500 text-sm">
              Total Items
            </p>

            <h2 className="text-3xl font-black">

              {wishlist.length}

            </h2>

          </div>

        </div>


        {/* EMPTY */}
        {wishlist.length === 0 && (

          <div className="bg-white rounded-3xl p-20 text-center">

            <h2 className="text-2xl font-bold mb-3">

              Wishlist is Empty

            </h2>

            <p className="text-zinc-500">

              Save products to wishlist.

            </p>

          </div>
        )}


        {/* ITEMS */}
        <div className="space-y-5">

          {wishlist.map((item) => (

            <div
              key={item._id}
              className="bg-white rounded-3xl p-5 flex flex-col md:flex-row gap-6 md:items-center border border-black/5"
            >

              {/* IMAGE */}
              <div className="w-full md:w-32 h-32 md:h-32 bg-stone-100 rounded-2xl flex items-center justify-center p-4 shrink-0">

                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="max-h-full w-full object-contain"
                />

              </div>


              {/* INFO */}
              <div className="flex-1 text-center md:text-left">

                <p className="text-sm text-zinc-500 capitalize mb-2">

                  {item.product.category}

                </p>

                <h2 className="text-lg md:text-xl font-bold mb-3 leading-snug">

                  {item.product.name}

                </h2>

                <p className="text-2xl font-black">

                  ₹{item.product.price}

                </p>

              </div>


              {/* ACTIONS */}
              <div className="flex flex-col gap-3">

                {/* ADD TO CART */}
                <button
                  onClick={() =>
                    handleAddToCart(item)
                  }
                  className="bg-black text-white px-5 h-11 rounded-2xl hover:opacity-90 transition"
                >

                  Add to Cart

                </button>


                {/* REMOVE */}
                <button
                  onClick={() =>
                    removeWishlist(item._id)
                  }
                  className="border border-red-200 text-red-500 px-5 h-11 rounded-2xl hover:bg-red-50 transition"
                >

                  Remove

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

   </AppBackground>
  );
}