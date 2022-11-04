import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
    
        const newUser = new User({
          ...req.body,
          password: hash,
        });
        //const newUser = new User({...req.body});
        await newUser.save();
        res.status(200).send("User has been created.");
      } catch (err) {
        next(err);
      }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, "User not found!"));
    
        const isPasswordCorrect = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (!isPasswordCorrect)
          return next(createError(400, "Wrong password or username!"));
    
        const token = jwt.sign(
          { id: user._id, role: user.role },
          process.env.JWT
        );
        const { password, ...otherDetails } = user._doc;
    
        res
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json({ details: { ...otherDetails } });
      } catch (err) {
        next(err);
      }
}