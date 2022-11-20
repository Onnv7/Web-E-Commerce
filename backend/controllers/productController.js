import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import Shop from "../models/shopModel.js";
import { saveSingleFile, saveMultipleFile } from "../utils/saveFile.js";
import { getUrlImageForArrObject } from "../utils/getUrlImage.js";

// update product
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

// delete product
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

// select products by category
export const selectProductsByCategory = async (req, res, next) => {
  try {
    const products = await Product.find(
      {
        shop: req.params.idShop,
        category: req.params.idCgr
      }
    );
    const result = getUrlImageForArrObject(products);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

// select all products by shop id
export const selectAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findOne({ _id: req.params.shopId });
    const result = getUrlImageForArrObject(products);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

// create a new product
export const createProduct = async (req, res, next) => {
  try {
    const img = req.body.img;
    const body = { ...req.body };
    const product = new Product(body);
    if (typeof req.body.img === 'string') {
      saveSingleFile(product, img)
    }
    else
      saveMultipleFile(product, img)

    await product.save();
    res.status(200).send("Product has been created.");

  }
  catch (err) {
    next(err)
  }
}
