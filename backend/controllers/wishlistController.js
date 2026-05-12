const Wishlist = require("../models/Wishlist");

exports.getWishlist = async (req, res) => {
  const items = await Wishlist.find({
    user: req.user.id,
  }).populate("product");

  res.json(items);
};

exports.toggleWishlist = async (req, res) => {
  const { productId } = req.body;
  const existing = await Wishlist.findOne({
    user: req.user.id,
    product: productId,
  });

  if (existing) {
    await Wishlist.findByIdAndDelete(
      existing._id
    );
    return res.json({
      msg: "Removed",
    });
  }
  const item = await Wishlist.create({
    user: req.user.id,
    product: productId,
  });
  res.json(item);
};



exports.removeWishlist =
  async (req, res) => {

  try {

    await Wishlist.findByIdAndDelete(
      req.params.id
    );

    res.json({
      msg: "Removed",
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      msg: "Server Error",
    });
  }
};