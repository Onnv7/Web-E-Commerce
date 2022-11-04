import mongoose, { mongo } from 'mongoose';

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
      default: 1,
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
export default mongoose.model("Review", reviewSchema);

