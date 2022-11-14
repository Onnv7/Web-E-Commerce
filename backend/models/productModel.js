import mongoose, { mongo } from 'mongoose';
import slugify from "slugify";
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User product have a name"],
    //unique: true,
    trim: true,
    maxLength: [
      40,
      "A product name must have less or equal than 40 characters",
    ],
    minLength: [5, "A product name must have more or equal than 5 characters"],
  },
  shop: {
    type: mongoose.Schema.ObjectId,
    ref: "Shop",
    required: true,
  },
  slug: String,
  quantity: {
    type: Number,
    required: [true, "User product have quantity"],
    default: 1
  },

  brand: {
    type: String,
    required: [true, "User product have a brand"],
  },
  color: {
    type: String,
    //required: [true, "User product have a color"],
  },
  size: {
    type: String,
    //required: [true, "User product have a color"],
  },
  // classify: {
  //   standard: {
  //     type: String,
  //     required: true
  //   },
  //   desc: [{
  //     value: {
  //       type: String,
  //       required: true
  //     },
  //     price: {
  //       type: Number,
  //       required: true
  //     }
  //   }],
  // },
  ratingAverage: {
    type: Number,
    default: 0,
    min: [0, "Rating must be above 1"],
    max: [5, "Rating must be below 5"],
    set: (value) => Math.round(value * 10) / 10,
  },
  ratingQuantity: { type: Number, default: 0 },
  // price: { type: Number, required: [true, "A product must have a price"] },
  priceDiscount: {
    type: Number,
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
  img: [
    {
      coverImage: {
        type: Buffer,
        required: true
      },
      coverImageType: {
        type: String,
        required: true
      },
    }
  ],
  // imageCover: {
  //   type: String,
  //   //required: [true, "A product must have a cover image"],
  // },
  // images: [String],
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Shop.category",
  }
});

productSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true, trim: true });
  next();
});
productSchema.virtual('coverImagePath').get(function () {
  var i = 0;
  var rs = [];
  for (i = 0; i < this.img.length; i++) {
    if (this.img[i].coverImage != null && this.img[i].coverImageType != null) {
      rs.push(`data:${this.img[i].coverImageType};charset=utf-8;base64,${this.img[i].coverImage.toString('base64')}`)
    }
  }
  return rs;
})
export default mongoose.model('Product', productSchema);
