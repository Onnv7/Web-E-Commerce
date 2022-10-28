import express from "express";
import { register, login } from "../controllers/auth.js";
import passport from "passport";
const router = express.Router();
const CLIENT_URL = "http://localhost:3000/";

// XAC THUC GOOGLE 

// xac thuc thanh cong
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

// xac thuc loi
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

// dang xuat
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

// get xac thuc bang gg
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

// URL
router.post("/register", register);
router.post("/login", login);

export default router;
