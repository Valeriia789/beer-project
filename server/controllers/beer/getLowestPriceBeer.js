import Product from "../../models/Product.js";

export const getLowestPriceBeer = async (req, res, next) => {
  try {
    const lowestPriceBeer = await Product.find().sort({ price: 1 });
    res.status(200).json(lowestPriceBeer);
  } catch (err) {
    next(err);
  }
};
