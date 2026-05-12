require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/wishlist", require("./routes/wishlistRoutes"));


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

app.listen(8000, () => console.log("Server running on port 8000"));
app.get("/test", (req, res) => {
  res.send("WORKING");
});

// db username  = ruba
// db pass = Daneen123


// mongodb+srv://ruba:Daneen123@cluster0.gumbzcf.mongodb.net/?appName=Cluster0