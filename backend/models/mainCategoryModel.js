import mongoose from "mongoose";

const MainCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      //required: true,
    },
    img: {
      coverImage: {
        type: Buffer,
        // required: true,
      },
      coverImageType: {
        type: String,
        //required: true,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("MainCategory", MainCategorySchema);
