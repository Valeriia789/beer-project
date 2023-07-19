import mongoose from "mongoose";
import User from "../models/User.js";

export const signUp = async (req, res) => {
  try {
    const newUser = new User(req.body);
  } catch (err) {}
};
