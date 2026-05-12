import { useEffect, useMemo, useState } from "react";
import { productService } from "../services/api";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    productService.getAll().then(setProducts);
  }, []);

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (searchQuery.trim()) {
      list = list.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortBy === "price-low")
      list.sort((a, b) => a.price - b.price);

    if (sortBy === "price-high")
      list.sort((a, b) => b.price - a.price);

    return list;
  }, [products, searchQuery, sortBy]);

  return {
    products: filteredProducts,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
  };
}