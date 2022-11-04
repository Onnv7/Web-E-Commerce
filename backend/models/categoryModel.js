import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
      shop: {
        type: mongoose.Schema.ObjectId,
        ref: "Shop",
        required: true,
      },
      category: [
        {
          name:{
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
  
//export const nameCategory =  mongoose.model('categoryname', categorySchema.category);
export default mongoose.model('Category', categorySchema);
  