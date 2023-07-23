import Product from "../../models/Product.js"

export const getBeerById = async (req, res, next) => {
  try {
    const beer = await Product.findById(req.params.id)
    res.status(200).json(beer)
  } catch (err) {
    next(err)
  }
}