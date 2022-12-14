import MainCategory from "../models/mainCategoryModel.js";
import { saveFileObj } from "../utils/saveFile.js";

import { getImgPathFromImgData } from "../utils/getUrlImage.js";

// create a new shop and up level for user => buyer
export const createMainCategory = async (req, res, next) => {
    try {
        const image = req.body.img;
        const newMainCategory = new MainCategory({
            ...req.body,
        });
        await saveFileObj(newMainCategory, image);
        await newMainCategory.save();
        res.status(200).send("Category has been created.");
    } catch (err) {
        next(err);
    }
};

// update a shop
export const updateMainCategory = async (req, res, next) => {
    try {
        let image = null;
        let body;
        // nếu có ảnh
        if (req.body.img !== null) {
            image = getImg(req.body.img);
            body = { ...req.body, img: image };
        } else {
            body = { ...req.body };
        }

        const updateMainCategory = await MainCategory.updateOne(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updateMainCategory);
    } catch (err) {
        next(err);
    }
};

// delete a shop
export const deleteMainCategory = async (req, res, next) => {
    try {
        await MainCategory.deleteOne({ _id: req.params.id });
        res.status(200).json("Main Category has been deleted");
    } catch (err) {
        next(err);
    }
};

// select all shop
export const selectAllMainCategory = async (req, res, next) => {
    try {
        let rs = [];
        const mainCategory = await MainCategory.find();
        mainCategory.forEach((e) => {
            let imgPath = "";
            if (e.img !== null)
                imgPath = getImgPathFromImgData(e.img);
            const { img, ...body } = e._doc;
            rs.push({ ...body, imgPath: imgPath })
        })
        res.status(200).json(rs);
    } catch (err) {
        next(err);
    }
};
