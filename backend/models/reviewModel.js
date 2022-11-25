import mongoose, { mongo } from "mongoose";

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
    //review -> content
    content: {
      type: String,
      required: [true, "Content cannot be empty"],
    },
    rating: {
      type: Number,
      default: 1,
      max: [5, "Rating must be equal or below 5"],
      min: [1, "Rating must be equal or greater than 1"],
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Review", reviewSchema);
