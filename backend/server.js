require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: ["https://mern-ecommerce-neon-one.vercel.app"],
    credentials: true,
  }),
);
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/wishlist", require("./routes/wishlistRoutes"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.get("/test", (req, res) => {
  res.send("WORKING");
});
