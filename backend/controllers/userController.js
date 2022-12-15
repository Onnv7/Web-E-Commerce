import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { getImgPathFromImgData } from "../utils/getUrlImage.js";
import { getDataFromImage } from "../utils/saveFile.js";
// update user
export const updateUser = async (req, res, next) => {
    try {
        const userID = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(
            userID,
            { $set: req.body },
            { new: true }
        );
        let imgPath;
        if (updatedUser.img === null) {
            imgPath = "/Img/default-user.png";
        } else {
        }
        const { img, password, ...body } = updatedUser._doc;
        res.status(200).json({ ...body, imgPath });
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err });
    }
};

// export const updateDeliveryInfo = async (req, res, next) => {
//     try {
//         console.log(req.body);
//         const userID = req.params.id;
//         const updatedUser = await User.updateOne(
//             { _id: userID },
//             {
//                 $push: {
//                     deliveryInfo: req.body,
//                 },
//             },
//             { new: true }
//         );
//         console.log(updatedUser);
//         res.status(200).json({ deliveryInfo: updatedUser.deliveryInfo });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ err: err });
//     }
// };
export const updateDeliveryInfo = async (req, res, next) => {
    try {
        console.log(req.body);
        const userID = req.params.id;
        const updatedUser = await User.findById(userID);
        updatedUser.deliveryInfo = req.body;
        await updatedUser.save();
        res.status(200).json({ updatedUser });
    } catch (err) {
        console.log(err);
        next(err);
    }
};

// update user's password + other
export const updateUserPassword = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const body = { ...req.body, password: hash };
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: body },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ err: err });
    }
};

//Update User Avatar
export const updateUserImage = async (req, res, next) => {
    try {
        let image = getDataFromImage(req.body.img);
        let body = { img: image };
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: body },
            { new: true }
        );
        const { img, password, ...data } = updatedUser._doc;
        const imgPath = getImgPathFromImgData(img);
        res.status(200).json({ ...data, imgPath });
    } catch (err) {
        console.log(err);
        next(err);
    }
};

// delete a user
export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    } catch (err) {
        next(err);
    }
};

// select a user
export const selectUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        let imgPath = "";
        if (user.img !== null) imgPath = getImgPathFromImgData(user.img);
        const { img, ...body } = user._doc;
        res.status(200).json({ ...body, imgPath });
    } catch (err) {
        next(err);
    }
};

// select all users
export const selectAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};

export const selectUserByUserName = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};
