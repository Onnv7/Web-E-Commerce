import mongoose from "mongoose";

const MainCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("MainCategory", MainCategorySchema);
