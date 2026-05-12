import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();
  const { user, logout, openAuth } = useAuth();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/categories", label: "Categories" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="sticky top-4 z-50 px-4 lg:px-6">

        <div className="max-w-7xl mx-auto h-16 px-5 lg:px-7 flex items-center justify-between gap-4 bg-white/75 backdrop-blur-2xl border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-2xl">

          {/* Brand */}
          <Link
            to="/"
            className="text-2xl font-black tracking-[-1px] text-zinc-900 shrink-0 hover:opacity-70 transition-all duration-300"
          >
            market<span className="text-zinc-400">.</span>
          </Link>


          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">

            {navLinks.map(({ to, label }) => (

              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${isActive(to)
                  ? "bg-white text-zinc-900 border border-black/5 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-white/70"
                  }`}
              >
                {label}
              </Link>

            ))}

          </nav>


          {/* Right Side */}
          <div className="flex items-center gap-1.5">

            {!user ? (
              <>

                {/* Sign In */}
                <button
                  onClick={openAuth}
                  className="hidden sm:inline-flex items-center justify-center h-11 px-5 rounded-xl text-sm font-semibold text-zinc-600 hover:text-zinc-900 hover:bg-white/70 transition-all duration-300"
                >
                  Sign in
                </button>


                {/* Get Started */}
                <button
                  onClick={openAuth}
                  className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-zinc-900 hover:bg-black text-white text-sm font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-[1px] transition-all duration-300"
                >
                  Get started
                </button>

              </>
            ) : (
              <>

                {/* Wishlist */}
                <Link
                  to="/wishlist"
                  title="Wishlist"
                  className="relative p-2.5 rounded-xl text-zinc-500 hover:text-zinc-900 hover:bg-white/70 transition-all duration-300"
                >

                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
                    />
                  </svg>

                  {wishlist.length > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 min-w-[17px] h-[17px] flex items-center justify-center bg-rose-500 text-white text-[10px] font-bold rounded-full px-0.5">
                      {wishlist.length > 99 ? "99+" : wishlist.length}
                    </span>
                  )}

                </Link>


                {/* Cart */}
                <Link
                  to="/cart"
                  title="Cart"
                  className="relative p-2.5 rounded-xl text-zinc-500 hover:text-zinc-900 hover:bg-white/70 transition-all duration-300"
                >

                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>

                  {totalItems > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 min-w-[17px] h-[17px] flex items-center justify-center bg-zinc-900 text-white text-[10px] font-bold rounded-full px-0.5">
                      {totalItems > 99 ? "99+" : totalItems}
                    </span>
                  )}

                </Link>


                {/* User Section */}
                <div className="hidden sm:flex items-center gap-2 pl-3 ml-1 border-l border-black/5">

                  <div className="w-7 h-7 rounded-full bg-zinc-900 text-white text-xs font-semibold flex items-center justify-center select-none shrink-0">
                    {(user.name || user.email || "U")[0].toUpperCase()}
                  </div>

                  <span className="hidden lg:block text-sm text-zinc-700 font-medium max-w-[100px] truncate">
                    {user.name || user.email}
                  </span>

                  <button
                    onClick={() => setShowLogoutModal(true)}
                    className="text-sm text-red-700 px-3 py-1.5 rounded-xl hover:bg-red-100 transition-all duration-300 font-medium"
                  >
                    Logout
                  </button>

                </div>

              </>
            )}


            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2.5 ml-1 rounded-xl text-zinc-500 hover:text-zinc-900 hover:bg-white/70 transition-all duration-300"
              aria-label="Toggle menu"
            >

              {menuOpen ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}

            </button>

          </div>

        </div>

      </header>

      {/* Logout Confirmation */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">

          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-md"
            onClick={() => setShowLogoutModal(false)}
          />


          {/* Modal */}
          <div className="relative w-full max-w-sm bg-white/80 backdrop-blur-3xl border border-white/40 rounded-[32px] shadow-[0_10px_60px_rgba(0,0,0,0.15)] p-6 animate-[popup_.2s_ease]">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-5">

              <svg
                className="w-7 h-7 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V4"
                />
              </svg>

            </div>


            {/* Content */}
            <div className="text-center">

              <h2 className="text-2xl font-black text-zinc-900 mb-2">
                Logout?
              </h2>

              <p className="text-sm leading-6 text-zinc-500">
                Are you sure you want to logout from your account?
              </p>

            </div>


            {/* Actions */}
            <div className="grid grid-cols-2 gap-3 mt-7">

              <button
                onClick={() => setShowLogoutModal(false)}
                className="h-12 rounded-2xl border border-black/5 bg-white/70 text-sm font-semibold text-zinc-700 hover:bg-white transition-all duration-300"
              >
                Cancel
              </button>


              <button
                onClick={() => {
                  logout();
                  setShowLogoutModal(false);
                }}
                className="h-12 rounded-2xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600 shadow-lg transition-all duration-300"
              >
                Logout
              </button>

            </div>

          </div>

        </div>
      )}

      {menuOpen && (
  <div className="md:hidden absolute top-[65px] left-0 right-0 z-40 px-4">

    {/* Backdrop */}
    <div
      className="fixed inset-0 bg-black/20 backdrop-blur-md transition-all"
      onClick={() => setMenuOpen(false)}
    />


    {/* Dropdown Panel */}
    <div className="relative w-full max-w-7xl mx-auto bg-white/75 backdrop-blur-3xl border border-white/40 shadow-[0_10px_50px_rgba(0,0,0,0.12)] rounded-b-[28px] overflow-hidden animate-[dropdown_.25s_ease]">

      {/* Content */}
      <div className="max-h-[75vh] overflow-y-auto p-5 pt-7">

        {/* Navigation */}
        <nav className="grid grid-cols-3 gap-3">

          {navLinks.map(({ to, label }) => (

            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center justify-center px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                isActive(to)
                  ? "bg-white text-zinc-900 border border-black/5 shadow-sm"
                  : "text-zinc-600 hover:bg-white/70 hover:text-zinc-900"
              }`}
            >
              {label}
            </Link>

          ))}

        </nav>


        <div className="my-5 border-t border-black/5" />


        {user ? (
          <div className="space-y-5">

            {/* Wishlist + Cart */}
            <div className="grid grid-cols-2 gap-3">

              {/* Wishlist */}
              <Link
                to="/wishlist"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-2xl bg-white/50 border border-black/5 text-sm font-semibold text-zinc-700 hover:bg-white transition-all duration-300"
              >

                <span>Wishlist</span>

                {wishlist.length > 0 && (
                  <span className="bg-rose-500 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                    {wishlist.length}
                  </span>
                )}

              </Link>


              {/* Cart */}
              <Link
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-2xl bg-white/50 border border-black/5 text-sm font-semibold text-zinc-700 hover:bg-white transition-all duration-300"
              >

                <span>Cart</span>

                {totalItems > 0 && (
                  <span className="bg-zinc-900 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                    {totalItems}
                  </span>
                )}

              </Link>

            </div>


            {/* User Card */}
            <div className="p-4 bg-white/60 backdrop-blur-xl rounded-3xl border border-black/5 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-zinc-900 text-white text-sm font-semibold flex items-center justify-center shrink-0">
                  {(user.name || user.email || "U")[0].toUpperCase()}
                </div>

                <div className="min-w-0">

                  {user.name && (
                    <p className="text-sm font-semibold text-zinc-900 truncate">
                      {user.name}
                    </p>
                  )}

                  <p className="text-xs text-zinc-500 truncate">
                    {user.email}
                  </p>

                </div>

              </div>


              <button
                onClick={() => {
                  setShowLogoutModal(true);
                  setMenuOpen(false);
                }}
                className="w-full mt-4 px-4 py-3 rounded-2xl text-sm text-red-700 hover:text-red-500 transition-all duration-300 text-left"
              >
                Logout
              </button>

            </div>

          </div>
        ) : (
          <div className="flex flex-col gap-3">

            <button
              onClick={() => {
                openAuth();
                setMenuOpen(false);
              }}
              className="text-center px-4 py-3 rounded-2xl border border-black/5 bg-white/70 text-sm font-semibold text-zinc-700 hover:bg-white transition-all duration-300"
            >
              Sign in
            </button>


            <button
              onClick={() => {
                openAuth();
                setMenuOpen(false);
              }}
              className="text-center px-4 py-3 rounded-2xl bg-zinc-900 text-white text-sm font-semibold shadow-lg hover:bg-black transition-all duration-300"
            >
              Get started
            </button>

          </div>
        )}

      </div>

    </div>

  </div>
)}
    </>
  );
}