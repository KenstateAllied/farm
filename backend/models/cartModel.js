const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    primary_image: { type: String, required: true },
    alternative_image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    old_price: { type: String, required: false },
    category: { type: String, required: true },
    type: { type: String, required: true },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const cartModel = mongoose.model("carts", cartSchema);

module.exports = cartModel;
