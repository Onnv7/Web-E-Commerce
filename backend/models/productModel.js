import mongoose, { mongo } from "mongoose";
import slugify from "slugify";
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User product have a name"],
        //unique: true,
        trim: true,
        maxLength: [
            40,
            "A product name must have less or equal than 40 characters",
        ],
        minLength: [
            5,
            "A product name must have more or equal than 5 characters",
        ],
    },
    shop: {
        type: mongoose.Schema.ObjectId,
        ref: "Shop",
        // required: true,
    },
    slug: String,
    quantity: {
        type: Number,
        required: [true, "User product have quantity"],
        default: 1,
    },
    price: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: [true, "User product have a brand"],
    },
    sizes: {
        type: [String],
        //required: [true, "User product have a color"],
    },
    ratingAverage: {
        type: Number,
        default: 0,
        min: [0, "Rating must be above 1"],
        max: [5, "Rating must be below 5"],
    },
    ratingQuantity: { type: Number, default: 0 },
    soldQuantity: { type: Number, default: 0 },
    description: {
        type: String,
        required: [true, "A product must have a description"],
        trim: true,
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
    subCategory: String,
});

productSchema.pre("save", function (next) {
    this.slug = slugify(this.name + "-i." + this._id, {
        lower: true,
        trim: true,
    });
    next();
});
productSchema.virtual("coverImagePath").get(function () {
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
export default mongoose.model("Product", productSchema);
