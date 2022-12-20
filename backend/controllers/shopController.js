import Shop from "../models/shopModel.js";
import User from "../models/userModel.js";
import Checkout from "../models/checkoutModel.js";
import { updateUser } from "./userController.js";
import { saveFileObj, getDataFromImage } from "../utils/saveFile.js";
import { getImgPathFromImgData } from "../utils/getUrlImage.js";
const upLevelSeller = async function (req, res, next) {
    try {
        await User.updateOne(
            { _id: req.params.id },
            { $set: { role: "seller" } }
        );
    } catch (err) {
        //next(err);
    }
};

// create a new shop and up level for user => buyer
export const createShop = async (req, res, next) => {
    try {
        const image = req.body.img;
        upLevelSeller(req, res, next);
        const newShop = new Shop({
            ...req.body,
        });
        await saveFileObj(newShop, image);
        await newShop.save();
        res.status(200).send("Shop has been created.");
    } catch (err) {
        console.log(err);
        next(err);
    }
};

// update a shop
export const updateShop = async (req, res, next) => {
    try {
        let img;
        let data;
        if (req.body.img !== undefined) {
            img = getDataFromImage(req.body.img);
            data = { ...req.body, img };
        } else {
            data = req.body;
        }
        const updatedShop = await Shop.updateOne(
            { user: req.params.userId },
            { $set: data },
            { new: true }
        );
        res.status(200).json(updatedShop);
    } catch (err) {
        next(err);
    }
};

// delete a shop
export const deleteShop = async (req, res, next) => {
    try {
        await Shop.deleteOne({ user: req.params.userId });
        res.status(200).json("Shop has been deleted");
    } catch (err) {
        next(err);
    }
};

// select shop by user id
export const selectShop = async (req, res, next) => {
    try {
        var imgPath;
        const shop = await Shop.findOne({ user: req.params.userId });
        if (shop.img === null) {
            imgPath = "/Img/default-user.png";
        } else {
            imgPath = getImgPathFromImgData(shop.img);
        }
        const { img, ...otherDetails } = shop._doc;
        res.status(200).json({ ...otherDetails, imgPath });
    } catch (err) {
        next(err);
    }
};

// select all shop
export const selectAllShop = async (req, res, next) => {
    try {
        const shop = await Shop.find();
        res.status(200).json(shop);
    } catch (err) {
        next(err);
    }
};

// select shop by shop id
export const selectShopByShopID = async (req, res, next) => {
    try {
        var imgPath;
        const shop = await Shop.findById(req.params.shopId).populate(
            "mainCategory"
        );
        if (shop.img === null) {
            imgPath = "/Img/default-user.png";
        } else {
            imgPath = getImgPathFromImgData(shop.img);
        }
        const { img, ...otherDetails } = shop._doc;
        res.status(200).json({ ...otherDetails, imgPath });
    } catch (err) {
        next(err);
    }
};
