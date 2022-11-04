import mongoose, { mongo } from 'mongoose';

const shopSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },
    followerQuantity: {
      type: Number,
      default: 0,
    },
    ratingAverage: {
      type: Number,
      default: 0,
      min: [0, "Rating must be above 1"],
      max: [5, "Rating must be below 5"],
      set: (value) => Math.round(value * 10) / 10,
    },
    ratingQuantity: { type: Number, default: 0 },
    category: {
      type: [
        {
          name: {
            type: String,
            required: true,
            unique: true
          },
          quantity: {
            type: Number,
            default: 0
          }
        },
      ],
      required: false,
      default: [{
        name: "All",
        quantity: 0
      }]
    }
  },
  { timestamps: true }
);

// shopSchema.pre('validate', function validate(next) {
//   var unique = [];
//   try {
//   for (var i = 0, l = this.category.length; i < l; i++) {
//     let prop = this.category[i].name;

//     if (unique.indexOf(prop) > -1) {
//       return next(createError(404, "Duplicate name!"));
//     }

//     unique.push(prop);
//   }
// }
//   catch (err) {
//     next(err);
//   }
// });

export default mongoose.model('Shop', shopSchema);
