import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import Shop from "../models/shopModel.js";
import {
    saveSingleFile,
    saveMultipleFile,
    getDataFromImage,
} from "../utils/saveFile.js";
import { getUrlImageForArrObject } from "../utils/getUrlImage.js";

// delete product
export const deleteProduct = async (req, res, next) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted");
    } catch (err) {
        next(err);
    }
};

// select products by category
export const selectProductsByCategory = async (req, res, next) => {
    try {
        const products = await Product.find({
            shop: req.params.idShop,
            category: req.params.idCgr,
        });
        const result = getUrlImageForArrObject(products);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

// select all products by shop id
export const selectAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find({ shop: req.params.shopId });
        const result = getUrlImageForArrObject(products);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

// select all products
export const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find({});
        const result = getUrlImageForArrObject(products);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};
// select product by Id
export const getProductById = async (req, res, next) => {
    try {
        const products = await Product.findById(req.params.id)
            .populate({
                path: "shop",
                // select: "name",
                transform: (doc) => {
                    const { img, ...others } = doc._doc
                    const data = { ...others, imgPath: doc.imgPath }
                    return data
                }
            });
        const { img, ...others } = products._doc;
        const result = {
            ...others,
            imgPath: products.coverImagePath,
        };
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};
// select product by SLug
export const getIDBySlug = async (req, res, next) => {
    try {
        const product = await Product.findOne({ slug: req.params.slug });
        res.status(200).json(product._id);
    } catch (err) {
        next(err);
    }
};
// create a new product
export const createProduct = async (req, res, next) => {
    try {
        const image = req.body.img.slice(0, req.body.img.length);
        const body = { ...req.body };
        const product = new Product(body);
        if (typeof req.body.img === "string") {
            saveSingleFile(product, image);
        } else saveMultipleFile(product, image);

        await product.save();
        res.status(200).send("Product has been created.");
    } catch (err) {
        next(err);
    }
};

// update product by id
export const updateProduct = async (req, res, next) => {
    try {
        const image = req.body.img.slice(0, req.body.img.length);
        let img = [];
        for (var i = 0; i < image.length; i++) {
            var data = getDataFromImage(image[i]);
            img.push(data);
        }
        const body = { ...req.body, img: img };
        const update = await Product.findOneAndUpdate(
            { _id: req.params.id },
            { $set: body },
            { new: true }
        );
        res.status(200).json(update);
    } catch (error) {
        next(error);
    }
};
