import express, { response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import shopsRoute from "./routes/shops.js";
import productsRoute from "./routes/products.js";
import checkoutRoute from "./routes/checkout.js";
import reviewRoute from "./routes/reviews.js";
import cookieParser from "cookie-parser";
import conversationRoute from "./routes/conversations.js";
import messageRoute from "./routes/messages.js";
import paypalRoute from "./routes/paypals.js";
// import mongoosePatchUpdate from "mongoose-patch-update";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    // node > 17 => 127.0.0.1 else localhost
    await mongoose.connect("mongodb://127.0.0.1:27017/web-ec"); //process.env.MONGO //mongodb://localhost:27017/web-ec
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected!");
});
//mongoose.plugin(mongoosePatchUpdate);

// middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors({ credentials: true, origin: true }));

app.options('*', cors({ credentials: true, origin: true }));
app.use(cookieParser());
app.use(express.json());
app.get("/", (req, res, next) => res.send("BACKEND"))
// app.get("/backend/cookie", (req, res, next) => { const rs = res.cookie("an", "611").send("SET COOKIE"); console.log(rs) })
app.use("/backend/auth", authRoute);
app.use("/backend/users", usersRoute);
app.use("/backend/shops", shopsRoute);
app.use("/backend/products", productsRoute);
app.use("/backend/checkout", checkoutRoute);
app.use("/backend/reviews", reviewRoute);
app.use("/backend/conversations", conversationRoute);
app.use("/backend/messages", messageRoute);
app.use("/backend/paypal", paypalRoute);
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(500).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend");
});
