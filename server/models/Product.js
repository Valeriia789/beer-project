import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  titles: {
    type: String,
    required: true,
    unique: true,
  },
  imgUrl: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
}, {timestamps: true});

export default mongoose.model('Product', ProductSchema)