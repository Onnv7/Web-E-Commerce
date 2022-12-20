import mongoose from "mongoose";

const checkoutSchema = new mongoose.Schema(
    {
        productItems: [
            {
                name: { type: String },
                classifyProduct: { type: String },
                price: { type: Number },
                quantityProduct: { type: Number },
                //TODO: Sửa thành product
                _id: {
                    type: mongoose.Schema.ObjectId,
                    ref: "Product",
                    required: true,
                },
            },
        ],
        shop: {
            type: mongoose.Schema.ObjectId,
            ref: "Shop",
            required: true,
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: [true, "Checkout must be done by a user"],
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

export default mongoose.model("Checkout", checkoutSchema);
