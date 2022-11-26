import mongoose, { mongo } from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    followerQuantity: {
      type: Number,
      default: 0,
    },
    ratingAverage: {
      type: Number,
      default: 0,
      min: [0, "Rating must be above 1"],
      max: [5, "Rating must be below 5"],
    },
    ratingQuantity: { type: Number, default: 0 },
    subCategory: {
      type: [
        {
          name: {
            type: String,
            required: true,
            unique: true,
          },
          quantity: {
            type: Number,
            default: 0,
          },
        },
      ],
      required: false,
      default: [
        {
          name: "All",
          quantity: 0,
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Shop", shopSchema);
