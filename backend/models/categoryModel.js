import mongoose from "mongoose";
// TODO: co le la se khong dung file nay nen xoa
const categorySchema = new mongoose.Schema(
  {
    shop: {
      type: mongoose.Schema.ObjectId,
      ref: "Shop",
      required: true,
    },
    category: [
      {
        name: {
          type: String,
          required: true,
          unique: true,
          default: "All",
        },
        quantity: {
          type: Number,
          required: true,
          default: 0
        }
      }
    ]

  },
  { timestamps: true }
);


export default mongoose.model('Category', categorySchema);
