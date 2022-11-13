import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        },
        receiver: {

        }
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);
