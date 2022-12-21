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
            fullName: { type: String, required: true },
            phoneNumber: { type: String, required: true },
            email: { type: String, required: true },
            province: { type: String, required: true },
            distinct: { type: String, required: true },
            ward: { type: String, required: true },
            address: { type: String, required: true },
        },
        totalCost: {
            type: Number,
            required: true,
        },
        shipCost: {
            type: Number,
            default: 0,
        },
        status: {
            type: String,
            enum: ["waiting", "delivering", "delivered"],
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
