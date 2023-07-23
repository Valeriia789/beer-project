import Product from "../../models/Product.js";

export const getHighestPriceBeer = async (req, res, next) => {
  try {
    const highestPriceBeer = await Product.find().sort({ price: -1 });
    res.status(200).json(highestPriceBeer);
  } catch (err) {
    next(err);
  }
};
