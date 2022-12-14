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
        img: [
            {
                coverImage: {
                    type: Buffer,
                    required: true,
                },
                coverImageType: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);
reviewSchema.virtual("coverImagePath").get(function () {
    var i = 0;
    var rs = [];
    for (i = 0; i < this.img.length; i++) {
        if (
            this.img[i].coverImage != null &&
            this.img[i].coverImageType != null
        ) {
            rs.push(
                `data:${
                    this.img[i].coverImageType
                };charset=utf-8;base64,${this.img[i].coverImage.toString(
                    "base64"
                )}`
            );
        }
    }
    return rs;
});
export default mongoose.model("Review", reviewSchema);
