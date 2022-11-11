import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User must have a name"],
      trim: true,
      maxLength: [40, "A user name must have less or equal than 40 characters"],
      minLength: [5, "A user name must have more or equal than 5 characters"],
    },
    email: {
      type: String,
      required: [true, "User must have a email"],
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "User must have a phone number"],
      unique: true,
    },
    address: [String],
    photo: { type: String, default: "default.jpg" },
    role: {
      type: String,
      enum: ["user", "buyer", "admin"],
      required: true,
      default: "user",
    },
    username: {
      type: String,
      required: true,
      minLength: [6, "A user name must have more or equal than 6 characters"],
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
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
