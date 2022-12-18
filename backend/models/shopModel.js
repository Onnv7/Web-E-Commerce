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
        addressInfo: {
            province: { type: String, required: true },
            distinct: { type: String, required: true },
            ward: { type: String, required: true },
            address: { type: String, required: true },
        },
        ratingAverage: {
            type: Number,
            default: 0,
            min: [0, "Rating must be above 1"],
            max: [5, "Rating must be below 5"],
        },
        ratingQuantity: { type: Number, default: 0 },
        subCategories: [String],
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
shopSchema.virtual("imgPath").get(function () {
    if (
        this.img.coverImage != null &&
        this.img.coverImageType != null
    ) {
        return `data:${this.img.coverImageType
            };charset=utf-8;base64,${this.img.coverImage.toString(
                "base64"
            )}`

    }
    return null;

});
export default mongoose.model("Shop", shopSchema);
