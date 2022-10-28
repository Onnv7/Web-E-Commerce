import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import cookieSession from "cookie-session";
import passport from "passport";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to mongoDB.')
    } catch (error) {
      throw error;
    }
};

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected!');
})

mongoose.connection.on('connected', () => {
  console.log('mongoDB connected!');
})

// middlewares
app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/backend/auth", authRoute);
app.use("/backend/users", usersRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(500).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  })
});

app.listen(8800, () => {
    connect();
    console.log("Connected to backend");
})