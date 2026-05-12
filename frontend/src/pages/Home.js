import { Link } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import AppBackground from "../components/layout/AppBackground";

export default function Home() {
  return (
    <AppBackground>
      <Navbar />

      <section className="relative px-6 lg:px-16 pt-14 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-black/5 px-4 py-2 rounded-full shadow-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

              <span className="text-xs tracking-[3px] uppercase text-zinc-600 font-medium">
                Modern Ecommerce Experience
              </span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black leading-[0.95] tracking-[-4px] text-zinc-900">
              Discover
              <br />
              Premium
              <br />
              Fashion.
            </h1>

            <p className="mt-10 text-zinc-600 text-lg leading-9 max-w-xl">
              Explore premium products, curated collections and minimalist
              shopping experience built with MERN.
            </p>

            <div className="flex flex-wrap gap-4 mt-12">
              <Link
                to="/products"
                className="
                  group
                  relative
                  overflow-hidden
                  bg-zinc-900
                  text-white
                  px-9
                  h-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  font-medium
                  shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <span className="relative z-10">Explore Products</span>

                <div className="absolute inset-0 bg-gradient-to-r from-zinc-700 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                to="/categories"
                className="
                  bg-white/70
                  backdrop-blur-md
                  border
                  border-black/5
                  px-9
                  h-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  font-medium
                  hover:bg-white
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  shadow-sm
                "
              >
                Categories
              </Link>
            </div>

            <div className="flex gap-10 mt-16">
              <div>
                <h3 className="text-4xl font-black text-zinc-900">10K+</h3>

                <p className="text-zinc-500 mt-2">Products</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-zinc-900">5K+</h3>

                <p className="text-zinc-500 mt-2">Customers</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-zinc-900">24/7</h3>

                <p className="text-zinc-500 mt-2">Support</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-[42px] z-10" />

            <div className="absolute -top-6 -right-6 w-full h-full border border-white/50 rounded-[42px]" />

            <div className="absolute -bottom-6 -left-6 w-full h-full border border-black/5 rounded-[42px]" />

            <div className="relative overflow-hidden rounded-[40px] shadow-2xl border border-white/40 backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200"
                alt="fashion"
                className="w-full h-[700px] object-cover hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl rounded-3xl p-5 border border-white/50 shadow-xl">
                <p className="text-xs tracking-[3px] uppercase text-zinc-500 mb-2">
                  Featured Collection
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-zinc-900">
                      Minimal Luxury
                    </h3>

                    <p className="text-zinc-600 mt-1">
                      New arrivals available now
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-white flex items-center justify-center text-xl">
                    ↗
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-16 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-7">
          <div className="group bg-white/70 backdrop-blur-xl rounded-[32px] p-8 border border-black/5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 text-white flex items-center justify-center text-2xl mb-7">
              ✦
            </div>

            <h3 className="text-2xl font-black mb-4 text-zinc-900">
              Premium Quality
            </h3>

            <p className="text-zinc-600 leading-8">
              Carefully selected products with modern minimalist design.
            </p>
          </div>

          <div className="group relative overflow-hidden bg-zinc-900 text-white rounded-[32px] p-8 shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/30 to-transparent" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center text-2xl mb-7">
                ⚡
              </div>

              <h3 className="text-2xl font-black mb-4">Fast Delivery</h3>

              <p className="text-zinc-300 leading-8">
                Smooth shopping experience with fast order processing.
              </p>
            </div>
          </div>

          <div className="group bg-white/70 backdrop-blur-xl rounded-[32px] p-8 border border-black/5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 text-white flex items-center justify-center text-2xl mb-7">
              ◎
            </div>

            <h3 className="text-2xl font-black mb-4 text-zinc-900">
              MERN Powered
            </h3>

            <p className="text-zinc-600 leading-8">
              Full stack ecommerce architecture with modern UI.
            </p>
          </div>
        </div>
      </section>
    </AppBackground>
  );
}
