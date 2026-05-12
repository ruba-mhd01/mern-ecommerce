import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

// TOKEN
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = token;
  }

  return req;
});

// AUTH
export const authService = {
  login: async (data) => {
    const res = await API.post("/auth/login", data);

    return res.data;
  },

  register: async (data) => {
    const res = await API.post("/auth/register", data);

    return res.data;
  },
};

// PRODUCTS
export const productService = {
  getAll: async () => {
    const res = await API.get("/products");

    return res.data;
  },
};

// CART
export const cartService = {
  getCart: async () => {
    const res = await API.get("/cart");

    return res.data;
  },

  addToCart: async (productId) => {
    const res = await API.post("/cart", { productId });

    return res.data;
  },

  updateQuantity: async (id, action) => {
    const res = await API.put(`/cart/${id}`, { action });

    return res.data;
  },

  removeFromCart: async (id) => {
    const res = await API.delete(`/cart/${id}`);

    return res.data;
  },
};

// WISHLIST
export const wishlistService = {
  getWishlist: async () => {
    const res = await API.get("/wishlist");

    return res.data;
  },

  toggleWishlist: async (productId) => {
    const res = await API.post("/wishlist", { productId });

    return res.data;
  },

  removeWishlist: async (id) => {
    const res = await API.delete(`/wishlist/${id}`);

    return res.data;
  },
};

export default API;
