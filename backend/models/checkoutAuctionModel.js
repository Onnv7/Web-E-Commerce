import mongoose from "mongoose";

const checkoutAuctionSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
        },
        shop: {
            type: mongoose.Schema.ObjectId,
            ref: "Shop",
        },
        auction: {
            type: mongoose.Schema.ObjectId,
            ref: "Auction",
        },
        deliveryInfo: {
            fullName: { type: String },
            phoneNumber: { type: String },
            email: { type: String },
            province: { type: String },
            distinct: { type: String },
            ward: { type: String },
            address: { type: String },
        },
        totalCost: {
            type: Number,
            // required: true,
        },
        shipCost: {
            type: Number,
            default: 0,
        },
        status: {
            type: String,
            enum: ["notpaid", "waiting", "delivering", "delivered"],
        },
        note: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("CheckoutAuction", checkoutAuctionSchema);
