import Product from "../../models/Product.js";

export const getByTitle = async (req, res, next) => {
  const query = req.query.q

  try {
    const beer = await Product.find({ 
      title: { $regex: query, $options: 'i'},
    }).limit(40)

    res.status(200).json(beer);
  } catch (err) {
    next(err);
  }
}