import mongoose, { mongo } from "mongoose";

const shippingCostSchema = new mongoose.Schema(
    {
        starting: { type: Number },
        destination: { type: Number },
        cost: { type: Number }
    },
    { timestamps: true }
);

export default mongoose.model("ShippingCost", shippingCostSchema);
