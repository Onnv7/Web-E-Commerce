import mongoose from "mongoose";

const MainCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: { type: String, default: "default.jpg" },
  },
  { timestamps: true }
);

export default mongoose.model("MainCategory", MainCategorySchema);
