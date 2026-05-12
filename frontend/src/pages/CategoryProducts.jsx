import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

import ProductGrid
  from "../components/ProductGrid/ProductGrid";

import { useProducts }
  from "../hooks/useProducts";
import AppBackground from "../components/layout/AppBackground";

export default function CategoryProducts() {

  const { name } = useParams();

  const { products } =
    useProducts();

  const filtered =
    products.filter(
      (p) => p.category === name
    );

  return (

   <AppBackground>

      <Navbar />
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-8">

        <Link
          to="/categories"
          className="text-sm text-zinc-600 hover:text-black transition"
        >
          ← Back to Categories
        </Link>

      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">

        <h1 className="text-5xl font-black capitalize mb-10">

          {name}

        </h1>

        <ProductGrid
          products={filtered}
        />

      </div>

    </AppBackground>
  );
}