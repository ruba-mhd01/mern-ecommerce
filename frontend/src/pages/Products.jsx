import AppBackground from "../components/layout/AppBackground";
import Navbar from "../components/Navbar/Navbar";

import ProductGrid
from "../components/ProductGrid/ProductGrid";

import { useProducts }
from "../hooks/useProducts";

export default function Products() {

  const { products } =
    useProducts();

  return (

   <AppBackground>

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">

        <div className="flex items-center justify-between mb-10">

          <div>

            <p className="text-sm uppercase tracking-[4px] text-zinc-500 mb-3">
              Products
            </p>

            <h1 className="text-4xl font-black">
              Explore Collection
            </h1>

          </div>

        </div>

        <ProductGrid
          products={products}
        />

      </div>

   </AppBackground>
  );
}