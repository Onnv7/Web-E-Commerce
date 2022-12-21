import mongoose from "mongoose";

const auctionSchema = new mongoose.Schema(
    {
        buyer: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
        },
        product: {
            name: String,
            description: String,
            quantity: Number,
            img: [
                {
                    coverImage: {
                        type: Buffer,
                        // required: true,
                    },
                    coverImageType: {
                        type: String,
                        // required: true,
                    },
                },
            ],
        },
        startingPrice: { type: Number },
        currentPrice: { type: Number },
        endTime: Date, // thời gian kết thúc đấu giá
        auctionHistory: {
            // người đặt giá cao nhất
            type: [
                {
                    bidder: {
                        type: mongoose.Schema.ObjectId,
                        ref: "Shop",
                    },
                    price: {
                        type: Number,
                    },
                    time: Date,
                },
            ],
            default: null,
        },
    },
    {
        timestamps: true,
    }
);
auctionSchema.virtual("coverImagePath").get(function () {
    var i = 0;
    var rs = [];
    for (i = 0; i < this.img.length; i++) {
        if (
            this.product.img[i].coverImage != null &&
            this.product.img[i].coverImageType != null
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
export default mongoose.model("Auction", auctionSchema);
