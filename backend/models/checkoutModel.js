const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
      required: [true, "Checkout must contain a product"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Checkout must be done by a user"],
    },
    deliveryAddress: {
      type: String,
      required: [true, "Checkout must has a deliveryAddress"],
    },
    shipCost: {
      type: Number,
      default: 0,
    },
    voucher: {
      type: Number,
      default: 0,
    },
    totalCost: {
      type: Number,
      required: [true, "Checkout must has the totalCost"],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Checkout = mongoose.model("Checkout", checkoutSchema);

module.exports = Checkout;
