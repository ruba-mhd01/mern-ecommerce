export default function StarRating({ rating = 0, count = 0 }) {
  const fullStars = Math.round(rating);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        marginTop: "6px",
      }}
    >
      <div
        style={{
          display: "flex",
          color: "#f5a623",
          fontSize: "14px",
        }}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star}>
            {star <= fullStars ? "★" : "☆"}
          </span>
        ))}
      </div>

      <span
        style={{
          fontSize: "12px",
          color: "#666",
        }}
      >
        ({count})
      </span>
    </div>
  );
}