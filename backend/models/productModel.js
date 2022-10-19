const mongoose = require("mongoose");
const slugify = require("slugify");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User product have a name"],
    unique: true,
    trim: true,
    maxLength: [
      40,
      "A product name must have less or equal than 40 characters",
    ],
    minLength: [5, "A product name must have more or equal than 5 characters"],
  },
  slug: String,
  quantity: {
    type: Number,
    required: [true, "User product have quantity"],
  },
  category: {
    type: String,
    enum: [
      "clothing",
      "electronice device",
      "sport item",
      "book",
      "cosmetic",
      "jewelry",
      "food and beverage",
      "daily supplies",
    ],
    default: "daily supplies",
  },
  brand: {
    type: String,
    required: [true, "User product have a brand"],
  },
  color: {
    type: String,
    required: [true, "User product have a color"],
  },
  ratingAverage: {
    type: Number,
    default: 4.5,
    min: [1, "Rating must be above 1"],
    max: [5, "Rating must be below 5"],
    set: (value) => Math.round(value * 10) / 10,
  },
  ratingQuantity: { type: Number, default: 0 },
  price: { type: Number, required: [true, "A product must have a price"] },
  priceDiscount: {
    type: Number,
    //TODO: Custom validate
    validate: {
      validator: function (value) {
        //! Only usable when create (not update)
        return value < this.price;
      },
      message: (props) =>
        `The discount price(${props.value}) must be below normal price`,
    },
  },
  description: {
    type: String,
    required: [true, "A product must have a description"],
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, "A product must have a cover image"],
  },
  images: [String],
});

productSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true, trim: true });
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
