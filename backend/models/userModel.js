import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            // required: [true, "User must have a name"],
            trim: true,
            maxLength: [
                40,
                "A user name must have less or equal than 40 characters",
            ],
            minLength: [
                5,
                "A user name must have more or equal than 5 characters",
            ],
        },
        email: {
            type: String,
            //required: [true, "User must have a email"],
            // unique: true,
        },
        phoneNumber: {
            type: String,
            //required: [true, "User must have a phone number"],
            // unique: true,
        },
        birthday: { type: String },
        deliveryInfo: [
            {
                fullName: { type: String, required: true },
                phoneNumber: { type: String, required: true },
                email: { type: String, required: true },
                province: { type: String, required: true },
                distinct: { type: String, required: true },
                ward: { type: String, required: true },
                address: { type: String, required: true },
            },
        ],
        gender: {
            type: String,
            enum: ["male", "female"],
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
        role: {
            type: String,
            enum: ["user", "seller", "admin", "shipper"],
            //required: true,
            default: "user",
        },
        username: {
            type: String,
            required: true,
            minLength: [
                6,
                "A user name must have more or equal than 6 characters",
            ],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "User must have a password"],
            minLength: [
                6,
                "A user password must have more or equal than 6 characters",
            ],
        },
        ruby: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);
