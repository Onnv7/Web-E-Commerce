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
            // unique: true,
        },
        ratingAverage: {
            type: Number,
            default: 0,
            min: [0, "Rating must be above 1"],
            max: [5, "Rating must be below 5"],
        },
        ratingQuantity: { type: Number, default: 0 },
        subCategory: [String],
        mainCategory: {
            type: mongoose.Schema.ObjectId,
            ref: "MainCategory",
        },
        img: {
            type: {
                coverImage: {
                    type: Buffer,
                    //required: true,
                },
                coverImageType: {
                    type: String,
                    //required: true,
                },
            },
            default: null,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Shop", shopSchema);
