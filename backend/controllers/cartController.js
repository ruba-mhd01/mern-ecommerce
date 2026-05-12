const Cart = require("../models/Cart")

exports.getCart = async (req, res) => {
  try {

    const cart = await Cart.find({
      user: req.user.id,
    }).populate("product");

    res.json(cart);

  } catch (err) {
    console.log(err);
  }
};

exports.addToCart = async (req, res) => {
  try {

    const { productId } = req.body;

    const existing = await Cart.findOne({
      user: req.user.id,
      product: productId,
    });

    if (existing) {

      existing.quantity += 1;

      await existing.save();

      return res.json(existing);
    }

    const cart = await Cart.create({
      user: req.user.id,
      product: productId,
      quantity: 1,

    });

    res.json(cart);

  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Server Error",
    });
  }
};


exports.updateQuantity =
  async (req, res) => {

  try {

    const { action } = req.body;

    const cartItem =
      await Cart.findById(
        req.params.id
      );

    if (!cartItem) {

      return res.status(404).json({
        msg: "Item not found",
      });
    }

    if (action === "increase") {

      cartItem.quantity += 1;
    }

    if (
      action === "decrease"
    ) {

      cartItem.quantity -= 1;

      // remove if 0
      if (
        cartItem.quantity <= 0
      ) {

        await Cart.findByIdAndDelete(
          req.params.id
        );

        return res.json({
          msg: "Removed",
        });
      }
    }

    await cartItem.save();

    res.json(cartItem);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      msg: "Server Error",
    });
  }
};

exports.removeFromCart = async (req, res) => {
  try {

    await Cart.findByIdAndDelete(req.params.id);

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