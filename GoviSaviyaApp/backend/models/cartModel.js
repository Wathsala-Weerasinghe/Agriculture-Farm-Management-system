const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    customerID: {
      type: Number,
      required: true,
    },
    cartItems: [
      {
        _id: mongoose.Schema.Types.ObjectId,
        product: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        size: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
