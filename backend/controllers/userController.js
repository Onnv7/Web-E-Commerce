import User from "../models/userModel.js";
import Shop from "../models/shopModel.js";
import Checkout from "../models/checkoutModel.js";
import bcrypt from "bcryptjs";
import { getImgPathFromImgData } from "../utils/getUrlImage.js";
import { getDataFromImage } from "../utils/saveFile.js";

// FIXME
export const generalStatistics = async (req, res, next) => {
    try {
        const countBuyer = await User.countDocuments();
        const countSeller = await User.countDocuments({ role: "seller" });
        const revenueThisMonth = await revenueThisMonthAdmin();
        res.status(200).json({ countBuyer, countSeller, revenueThisMonth });
    } catch (error) {
        next(error);
    }
};

export const countBuyer = async (req, res, next) => {
    try {
        const countMonth = await countUserPerMonth(0);
        const countWeek = await countUserPerWeek(0);
        const countDay = await countUserPerDay(0);
        res.status(200).json({
            day: countDay,
            week: countWeek,
            month: countMonth,
        });
    } catch (error) {
        next(error);
    }
};

export const countSeller = async (req, res, next) => {
    try {
        const countMonth = await countUserPerMonth(1);
        const countWeek = await countUserPerWeek(1);
        const countDay = await countUserPerDay(1);
        res.status(200).json({
            day: countDay,
            week: countWeek,
            month: countMonth,
        });
    } catch (error) {
        next(error);
    }
};
export const revenueThisMonthAdmin = async () => {
    try {
        const currentMonth = new Date().getMonth(); // Lấy tháng hiện tại
        const currentYear = new Date().getFullYear(); // Lấy năm hiện tại
        const startOfMonth = new Date(currentYear, currentMonth, 1); // Ngày bắt đầu của tháng hiện tại
        const endOfMonth = new Date(currentYear, currentMonth + 1, 1); // Ngày kết thúc của tháng hiện tại
        const revenue = await Checkout.aggregate([
            {
                $match: {
                    createdAt: { $gte: startOfMonth, $lt: endOfMonth },
                },
            },
            {
                $group: {
                    _id: null,
                    total: { $sum: "$totalCost" },
                },
            },
            {
                $project: {
                    total: { $multiply: ["$total", 0.25] },
                },
            },
        ]);
        return revenue[0].total;
    } catch (error) {}
};
const countUserPerMonth = async (flag) => {
    const startOfMonth = new Date();
    startOfMonth.setDate(1);

    const endOfMonth = new Date();
    endOfMonth.setMonth(endOfMonth.getMonth() + 1);
    endOfMonth.setDate(0);
    let count;
    if (flag === 0) {
        count = await User.countDocuments({
            createdAt: {
                $gte: startOfMonth,
                $lt: endOfMonth,
            },
        });
    } else {
        count = await User.countDocuments({
            role: "seller",
            createdAt: {
                $gte: startOfMonth,
                $lt: endOfMonth,
            },
        });
    }
    return count;
};
const countUserPerWeek = async (flag) => {
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date();
    endOfWeek.setDate(endOfWeek.getDate() - endOfWeek.getDay() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    let count;
    if (flag === 0) {
        count = await User.countDocuments({
            createdAt: {
                $gte: startOfWeek,
                $lt: endOfWeek,
            },
        });
    } else {
        count = await User.countDocuments({
            role: "seller",
            createdAt: {
                $gte: startOfWeek,
                $lt: endOfWeek,
            },
        });
    }
    return count;
};
const countUserPerDay = async (flag) => {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    let count;
    if (flag === 0) {
        count = await User.countDocuments({
            createdAt: {
                $gte: startOfDay,
                $lt: endOfDay,
            },
        });
    } else {
        count = await User.countDocuments({
            role: "seller",
            createdAt: {
                $gte: startOfDay,
                $lt: endOfDay,
            },
        });
    }
    return count;
};
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
        // console.log(err);
        // res.status(500).json({ err: err });
        next(err);
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
        const { img, password, ...body } = user._doc;
        res.status(200).json({ ...body, imgPath });
    } catch (err) {
        next(err);
    }
};

// select all users
export const selectAllUsers = async (req, res, next) => {
    try {
        const result = [];
        const users = await User.find();
        users.forEach((user) => {
            const { _id, name, email, phoneNumber, username, gender } =
                user._doc;
            const data = {
                _id,
                name: name === undefined ? "Chưa cập nhật" : name,
                email: email === undefined ? "Chưa cập nhật" : email,
                phoneNumber:
                    phoneNumber === undefined ? "Chưa cập nhật" : phoneNumber,
                username,
                gender: gender === undefined ? "Chưa cập nhật" : gender,
            };
            result.push(data);
        });
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

// select all
export const selectAllSellers = async (req, res, next) => {
    try {
        const result = [];
        const users = await User.find({ role: "seller" });
        for (const user of users) {
            const shop = await Shop.findOne({ user: user._id });

            const shopName = shop.name;
            const { img, ...other } = shop;
            const { _id, name, email, phoneNumber, username, gender, ruby } =
                user._doc;
            const data = {
                _id,
                name,
                shopName,
                email: email === undefined ? "Chưa cập nhật" : email,
                phoneNumber:
                    phoneNumber === undefined ? "Chưa cập nhật" : phoneNumber,
                username,
                gender: gender === undefined ? "Chưa cập nhật" : gender,
            };
            result.push(data);
        }
        res.status(200).json(result);
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
