import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import Shop from "../models/shopModel.js";
import {
    saveSingleFile,
    saveMultipleFile,
    getDataFromImage,
} from "../utils/saveFile.js";
import {
    getUrlImageForArrObject,
    getImgPathFromImgData,
} from "../utils/getUrlImage.js";
import { getTextSearch } from "../utils/formatIO.js";

export const selectProductsRating = async (req, res, next) => {
    try {
        const result = [];
        const products = await Product.find().sort({ ratingAverage: -1 });
        for (const product of products) {
            const shop = await Shop.findById(product.shop);
            const address =
                shop.addressInfo.distinct + " - " + shop.addressInfo.ward;
            let imgPath;
            try {
                imgPath = getImgPathFromImgData(product.img[0]);
            } catch (e) {}
            const data = {
                _id: product._id,

                name: product.name,
                soldQuantity: product.soldQuantity,
                price: product.classify[0].price,
                ratingAverage: product.ratingAverage,
                slug: product.slug,
                address,
                imgPath,
            };
            result.push(data);
        }
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

// select products by main category
export const selectAllProductsByMainCategory = async (req, res, next) => {
    try {
        if (req.params.cgrId === "all") {
            const shopIds = await Shop.find().select("_id");

            const products = await Product.find({
                shop: { $in: shopIds },
            }).populate("shop");
            const result = [];
            for (const product of products) {
                const { shop } = product._doc;
                const address =
                    shop.addressInfo.distinct + " - " + shop.addressInfo.ward;
                const imgPath = getImgPathFromImgData(product.img[0]);
                const data = {
                    _id: product._id,
                    name: product.name,
                    soldQuantity: product.soldQuantity,
                    price: product.classify[0].price,
                    ratingAverage: product.ratingAverage,
                    slug: product.slug,
                    address,
                    imgPath,
                };
                result.push(data);
            }
            res.status(200).json(result);
        }
        const shopIds = await Shop.find({
            mainCategory: req.params.cgrId,
        }).select("_id");

        const products = await Product.find({
            shop: { $in: shopIds },
        }).populate("shop");
        const result = [];
        for (const product of products) {
            const { shop } = product._doc;
            const address =
                shop.addressInfo.distinct + " - " + shop.addressInfo.ward;
            const imgPath = getImgPathFromImgData(product.img[0]);
            const data = {
                _id: product._id,
                name: product.name,
                soldQuantity: product.soldQuantity,
                price: product.classify[0].price,
                ratingAverage: product.ratingAverage,
                slug: product.slug,
                address,
                imgPath,
            };
            result.push(data);
        }
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

// search products
export const searchProduct = async (req, res, next) => {
    try {
        const input = getTextSearch(req.query.text);
        const cgrId = req.query.cgrId;

        let products;
        if (cgrId === "all") {
            products = await Product.find({
                $text: { $search: input },
            }).populate("classify");
        } else if (cgrId !== null) {
            products = await Product.find()
                .populate("shop")
                .find({ mainCategory: cgrId })
                .find({
                    $text: { $search: input },
                });
        }

        const result = [];
        for (const product of products) {
            const shop = await Shop.findById(product.shop);
            const address =
                shop.addressInfo.distinct + " - " + shop.addressInfo.ward;
            const imgPath = getImgPathFromImgData(product.img[0]);
            const data = {
                _id: product._id,
                name: product.name,
                soldQuantity: product.soldQuantity,
                price: product.classify[0].price,
                subCategory: product.subCategory,
                ratingAverage: product.ratingAverage,
                slug: product.slug,
                address,
                imgPath,
            };
            result.push(data);
        }

        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

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
        const result = [];
        const products = await Product.find({
            shop: req.params.idShop,
            category: req.params.idCgr,
        });
        for (const product of products) {
            const shop = await Shop.findById(product.shop);
            const address =
                shop.addressInfo.distinct + " - " + shop.addressInfo.ward;
            const imgPath = getImgPathFromImgData(product.img[0]);
            const data = {
                _id: product._id,
                name: product.name,
                slug: product.slug,
                soldQuantity: product.soldQuantity,
                subCategory: product.subCategory,
                imgPath,
            };
            result.push(data);
        }
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

// select all products by shop id
export const selectAllProductsByShopId = async (req, res, next) => {
    try {
        const result = [];
        const products = await Product.find({ shop: req.params.shopId });
        for (const product of products) {
            const shop = await Shop.findById(product.shop);
            const address =
                shop.addressInfo.distinct + " - " + shop.addressInfo.ward;
            const imgPath = getImgPathFromImgData(product.img[0]);
            const data = {
                _id: product._id,
                name: product.name,
                slug: product.slug,
                soldQuantity: product.soldQuantity,
                subCategory: product.subCategory,
                imgPath,
            };
            result.push(data);
        }
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

// select all products
export const getAllProducts = async (req, res, next) => {
    try {
        const result = [];
        const products = await Product.find({});
        for (const product of products) {
            const shop = await Shop.findById(product.shop);
            const address =
                shop.addressInfo.distinct + " - " + shop.addressInfo.ward;
            const imgPath = getImgPathFromImgData(product.img[0]);
            const data = {
                _id: product._id,
                name: product.name,
                soldQuantity: product.soldQuantity,
                price: product.classify[0].price,
                ratingAverage: product.ratingAverage,
                slug: product.slug,
                address,
                imgPath,
            };
            result.push(data);
        }
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

// select all products and sort
export const getAllProductsAndSort = async (req, res, next) => {
    try {
        const sort = req.params.sort === 1 ? 1 : -1;

        // const products = await Product.find({}).sort(classify[0].price: sort);
        const result = getUrlImageForArrObject(products);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

// select product by Id
export const getProductById = async (req, res, next) => {
    try {
        const products = await Product.findById(req.params.id).populate({
            path: "shop",
            // select: "name",
            transform: (doc) => {
                const { img, ...others } = doc._doc;
                const data = { ...others, imgPath: doc.imgPath };
                return data;
            },
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
        console.log(err);
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
