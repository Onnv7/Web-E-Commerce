import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { getUserID } from "../utils/verifyToken.js";


export const addRuby = async (req, res, next) => {
    try {
        const money = req.body.money;
        const user = await User.findOne(
            { _id: req.params.id }
        )
        const oldMoney = user.ruby;
        const newMoney = oldMoney + money;
        const result = await User.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { ruby: newMoney } }
        )

    } catch (error) {

    }
}