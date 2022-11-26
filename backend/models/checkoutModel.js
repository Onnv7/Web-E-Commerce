import mongoose from "mongoose";

const checkoutSchema = new mongoose.Schema(
  {
    productItems: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        sizeProduct: { type: String, required: true },
        colorProduct: { type: String, required: true },
        shop: {
          type: mongoose.Schema.ObjectId,
          ref: "Shop",
          required: true,
        },
        _id: {
          type: mongoose.Schema.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Checkout must be done by a user"],
    },
    deliveryAddress: {
      type: String,
      required: [true, "Checkout must has a deliveryAddress"],
    },
    totalCost: {
      type: Number,
      required: true,
    },
    shipCost: {
      type: Number,
      default: 0,
    },
    note: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Checkout", checkoutSchema);
