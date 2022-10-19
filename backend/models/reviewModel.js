const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Review must be post by a user"],
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
      required: [true, "Review must be had by product"],
    },
    review: {
      type: String,
      required: [true, "Review cannot be empty"],
    },
    rating: {
      type: Number,
      default: 5,
      max: [5, "Rating must be equal or below 5"],
      min: [1, "Rating must be equal or greater than 1"],
      set: (value) => Math.round(value * 10) / 10,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
