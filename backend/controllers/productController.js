import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import Shop from "../models/shopModel.js";
import { saveSingleFile, saveMultipleFile } from "../utils/saveFile.js";

export const updateProduct = async (req, res, next) => {
  try {
    const body = req.body;
    const update = await Product.findOneAndUpdate(
      { _id: req.params.id },
      { $set: body },
      { new: true }
    )
    res.status(200).json(update)
  } catch (error) {
    next(error)
  }
}

export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json("Product has been deleted");
  } catch (err) {
    next(err);
  }
};
export const getGroupProducts = async (req, res, next) => {
  try {
    const products = await Product.find(
      {
        shop: req.params.idShop,
        category: req.params.idCgr
      }
    );
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
}

// TODO: sua findone => all
export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findOne(
      { shop: req.params.idShop }
    )

    var rs = [];
    // for (var i = 0; i < products.length; i++) {
    //   var data = {
    //     // //...products[i],
    //     // _id: products[i]._id,
    //     // name: products[i].name,
    //     // shop: products[i].shop,
    //     // quantity: products[i].quantity,
    //     // brand: products[i].brand,
    //     // ratingAverage: products[i].ratingAverage,
    //     // ratingQuantity: products[i].ratingQuantity,
    //     // description: products[i].description,
    //     // slug: products[i].slug,
    //     //url: products[i].coverImagePath
    //   }
    // console.log("🚀 ~ file: productController.js ~ line 66 ~ getAllProducts ~ products[i]", products[i].name)
    // rs.push(data);
    // }
    console.log("🚀 ~ file: productController.js ~ line 61 ~ getAllProducts ~ rs", products.coverImagePath)
    //const rs = { ...products, url: products.coverImagePath };

    res.status(200).json(products.coverImagePath);
  } catch (err) {
    next(err)
  }
}
export const test = async (req, res, next) => {
  const products = await Product.findOne({ shop: "635fb1f7acee8d4442244077" });
  console.log("coverImagePath", products.coverImagePath);
}
export const createProduct = async (req, res, next) => {
  try {

    const img = req.body.img;

    try {
      // TODO: need fully code at here for props
      const newProduct = new Product({

        name: req.body.name,
        shop: req.body.shop,
        quantity: Number(req.body.quantity),
        brand: req.body.brand,
        description: req.body.description,


        //...otherDetails,
      });
      if (typeof req.body.img === 'string') {
        saveSingleFile(newProduct, img)
      }
      else
        saveMultipleFile(newProduct, img)

      await newProduct.save();
      res.status(200).send("Product has been created.");
    } catch (err) {
      next(err);
    }
  }
  catch (err) {
    next(err)
  }
}
// export const updateProduct = async (req, res, next) => {
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(
//             req.params.id,
//             { $set: body},
//             {new: true }
//             );
//         res.status(200).json(updatedUser);
//     } catch (err) {
//         next(err);
//     }
// };

// export const getUser = async (req, res, next) => {
//     try {
//         const user = await User.findById(
//             req.params.id
//             );
//         res.status(200).json(user);
//     } catch (err) {
//         next(err);
//     }
// };
// export const getUsers = async (req, res, next) => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch (err) {
//         next(err);
//     }
// };
