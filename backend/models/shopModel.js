const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Shop must be belong to a user"],
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
      required: [true, "Shop must have some products"],
    },
    followerQuantity: Number,
    ratingAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must be above 1"],
      max: [5, "Rating must be below 5"],
      set: (value) => Math.round(value * 10) / 10,
    },
    ratingQuantity: { type: Number, default: 0 },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Shop = mongoose.model("Shop", shopSchema);

module.exports = Shop;
