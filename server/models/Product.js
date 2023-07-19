import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  imgUrl: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
}, {timestamps: true});

export default mongoose.model('Product', ProductSchema)