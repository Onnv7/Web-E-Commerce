import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { saveFileObj } from "../utils/saveFile.js";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import { getImgPathFromImgData } from "../utils/getUrlImage.js";

// TODO: khoong biet lam gi nua, coi lai va xoa
export const getUser = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, "You are not authenticated!"));
    }
    jwt.verify(token, "an", (err, user) => {
        if (err) return next(createError(403, "Token is not valid!"));
        res.json(user);
    });
};

// register a new user
export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        //const image = req.body.img;

        const newUser = new User({
            ...req.body,
            password: hash,
        });
        //await saveFileObj(newUser, image);
        await newUser.save();
        res.status(200).json("Ok");
    } catch (err) {
        next(err);
    }
};

// login to set token into cookie
export const login = async (req, res, next) => {
    try {
        var imgPath;

        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, "User not found!"));

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect)
            return next(createError(400, "Wrong password or username!"));
        if (user.img === null) {
            imgPath = "/Img/default-user.png";
        } else {
            imgPath = getImgPathFromImgData(user.img);
        }
        const token = jwt.sign({ id: user._id, role: user.role }, "an");
        const { img, password, deliveryInfo, ...otherDetails } = user._doc;
        //res.cookie("id", `${user._id}`);
        res.cookie("access_token", token)
            .status(200)
            .json({ ...otherDetails, imgPath });
    } catch (err) {
        next(err);
    }
};
