const mongoose = require("mongoose");
const axios = require("axios");
require("dotenv").config();

const Product = require("./models/Product");

mongoose.connect(process.env.MONGO_URI).then(() => console.log("DB connected"));

const seedProducts = async () => {
  try {
    // clear old data
    await Product.deleteMany();

    // fetch dummy data
    const { data } = await axios.get("https://fakestoreapi.com/products");

    // map to your schema
    const products = data.map((item) => ({
      name: item.title,
      price: item.price * 100, // convert to INR style
      description: item.description,
      image: item.image,
      category: item.category,

      rating: {
        rate: item.rating.rate,
        count: item.rating.count,
      },
    }));

    await Product.insertMany(products);

    console.log("Products seeded!");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

seedProducts();
