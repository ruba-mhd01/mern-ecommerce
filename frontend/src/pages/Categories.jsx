import { Link } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import AppBackground from "../components/layout/AppBackground";

const categories = [
  {
    name: "electronics",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },

  {
    name: "jewelery",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
  },

  {
    name: "men's clothing",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
  },

  {
    name: "women's clothing",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  },
];

export default function Categories() {

  return (

   <AppBackground>

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">

        <h1 className="text-5xl font-black mb-12">
          Categories
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((cat) => (

            <Link
              key={cat.name}
              to={`/category/${cat.name}`}
              className="
      group
      relative
      h-80
      overflow-hidden
      rounded-3xl
      border
      border-black/5
      bg-white
    "
            >

              {/* IMAGE */}
              <img
                src={cat.image}
                alt={cat.name}
                className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        transition
        duration-500
        group-hover:scale-110
      "
              />


              {/* OVERLAY */}
              <div
                className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/70
        via-black/20
        to-transparent
      "
              />


              {/* CONTENT */}
              <div
                className="
        absolute
        bottom-0
        left-0
        p-6
        text-white
      "
              >

                <p className="text-sm uppercase tracking-[3px] mb-2 text-white/70">

                  Collection

                </p>

                <h2 className="text-3xl font-black capitalize">

                  {cat.name}

                </h2>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </AppBackground>
  );
}