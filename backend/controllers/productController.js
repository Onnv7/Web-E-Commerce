import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import Shop from "../models/shopModel.js";


export const updateProduct = async (req, res, next) => {
  try {
    const body = req.body;
    const update = await Product.findOneAndUpdate(
      {_id: req.params.id},
      { $set: body},
      {new: true}
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
      {shop: req.params.idShop,
      category: req.params.idCgr}
    );
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
}
export const getAllProducts = async (req, res, next) => { 
  try {
    const products = await Product.find( 
      {shop: req.params.idShop}
      );
    res.status(200).json(products);
  } catch (err) {
    next(err)
  }
}
export const createProduct = async (req, res, next) => { 
    try {
        try {
            const newProduct = new Product({
              ...req.body,
            });
            
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
