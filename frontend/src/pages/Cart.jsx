import AppBackground from "../components/layout/AppBackground";
import Navbar from "../components/Navbar/Navbar";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {

  const { cart, updateQuantity, removeFromCart } = useCart();

  const totalPrice =
    cart.reduce(
      (sum, item) =>
        sum +
        item.product.price *
        item.quantity,
      0
    );

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
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-sm uppercase tracking-[4px] text-zinc-500 mb-2">
              Shopping Cart
            </p>
            <h1 className="text-4xl font-black">
              Your Cart
            </h1>
          </div>
          <div className="text-right">
            <p className="text-zinc-500 text-sm">
              Total
            </p>
            <h2 className="text-3xl font-black">
              ₹{totalPrice}
            </h2>
          </div>
        </div>

        {cart.length === 0 && (
          <div className="bg-white rounded-3xl p-20 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Cart is Empty
            </h2>
            <p className="text-zinc-500">
              Add products to your cart.
            </p>
          </div>
        )}
        <div className="space-y-5">

          {cart.map((item) => (

            <div
              key={item._id}
              className="
        bg-white
        rounded-3xl
        p-5
        border
        border-black/5
        flex
        flex-col
        md:flex-row
        gap-6
      "
            >

              {/* IMAGE */}
              <div
                className="
          w-full
          md:w-36
          h-52
          md:h-36
          bg-stone-100
          rounded-2xl
          flex
          items-center
          justify-center
          p-4
          shrink-0
        "
              >

                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="max-h-full w-full object-contain"
                />

              </div>


              {/* CONTENT */}
              <div className="flex-1 flex flex-col justify-between">

                {/* TOP */}
                <div>

                  <p className="text-sm text-zinc-500 capitalize mb-2">

                    {item.product.category}

                  </p>

                  <h2
                    className="
              text-lg
              md:text-xl
              font-bold
              leading-snug
              mb-4
            "
                  >

                    {item.product.name}

                  </h2>

                </div>


                {/* BOTTOM */}
                <div
                  className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-5
          "
                >

                  {/* PRICE + QTY */}
                  <div className="flex flex-col gap-4">

                    <p className="text-2xl font-black">

                      ₹{
                        item.product.price *
                        item.quantity
                      }

                    </p>

                    <div
                      className="
                flex
                items-center
                border
                border-black/10
                rounded-xl
                overflow-hidden
                w-fit
              "
                    >

                      <button
                        onClick={() =>
                          updateQuantity(
                            item._id,
                            "decrease"
                          )
                        }
                        className="
                  w-10
                  h-10
                  bg-stone-100
                  hover:bg-stone-200
                  transition
                "
                      >
                        -
                      </button>

                      <div
                        className="
                  w-10
                  text-center
                  font-semibold
                "
                      >

                        {item.quantity}

                      </div>

                      <button
                        onClick={() =>
                          updateQuantity(
                            item._id,
                            "increase"
                          )
                        }
                        className="
                  w-10
                  h-10
                  bg-stone-100
                  hover:bg-stone-200
                  transition
                "
                      >
                        +
                      </button>

                    </div>

                  </div>


                  {/* REMOVE */}
                  <button
                    onClick={() =>
                      removeFromCart(item._id)
                    }
                    className="
              h-11
              px-6
              rounded-2xl
              border
              border-red-200
              text-red-500
              hover:bg-red-50
              transition
              w-full
              md:w-auto
            "
                  >

                    Remove

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>
      </div>
   </AppBackground>
  );
}