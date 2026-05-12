import styles from "./Filters.module.css";

export default function Filters({ sortBy, setSortBy }) {
  return (
    <div className={styles.filters}>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="price-low">Price Low to High</option>
        <option value="price-high">Price High to Low</option>
      </select>
    </div>
  );
}