import mongoose, { mongo } from 'mongoose';
import slugify from 'slugify';
import validator from 'validator';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: [6, "A user name must have more or equal than 6 characters"]
  },
  name: {
    type: String,
    required: [true, "User must have a name"],
    trim: true,
    maxLength: [40, "A user name must have less or equal than 40 characters"],
    minLength: [5, "A user name must have more or equal than 5 characters"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "User must have a email"],
    validate: [validator.isEmail, "Invalid email"],
  },
  phoneNumber: {
    type: String,
    validate: [validator.isMobilePhone, "Invalid phone number"],
  },
  address: [String],
  photo: { type: String, default: "default.jpg" },
  role: {
    type: String,
    enum: ["user", "guide", "lead-guide", "admin"],
    default: "user",
  },
  password: {
    type: String,
    unique: true,
    required: [true, "User must have a password"],
    minLength: [6, "A user password must have more or equal than 6 characters"],
    select: false,
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

//TODO: Only find active user
userSchema.pre(/^find/, async function (next) {
  this.find({ active: true });
  next();
});

//TODO: Renew passwordChangedAt
userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1;

  next();
});

//TODO: Encrypt password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

//? Mỗi lần tạo user đều có thể truy cập tới correctPassword => user.correctPassword
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changePasswordAfter = function (JWTTimestampIssuedAt) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return changedTimestamp > JWTTimestampIssuedAt;
  }

  //? False means not changed
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  console.log({ resetToken }, this.passwordResetToken);
  return resetToken;
};

const User = mongoose.model("User", userSchema);

export default User;
