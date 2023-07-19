import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRouter from "./routes/authRouter.js";
import usersRouter from "./routes/usersRouter.js";
// import beerRouter from './routes/beerRouter.js'

const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to DB :)");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
// app.use('/api/beer', beerRouter)

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Err, Something went wrong";
  return res.status(status).json({
    success: false,
    status: status,
    message: message,
  });
});

app.listen(PORT, () => {
  connect();
  console.log(`Connected to server. Listening at http://localhost:${PORT}`);
});
