import mongoose from "mongoose";

const checkoutSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    // shop:
    // {
    //   type: mongoose.Schema.ObjectId,
    //   required: true,
    // },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Checkout must be done by a user"],
    },
    deliveryAddress: {
      type: String,
      required: [true, "Checkout must has a deliveryAddress"],
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true
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
    status: {
      type: String,
      enum: ["Awaiting confirmation", "Delivering", "Received"],
      required: true,
      default: "Awaiting confirmation"
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export default mongoose.model("Checkout", checkoutSchema);
