const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
};