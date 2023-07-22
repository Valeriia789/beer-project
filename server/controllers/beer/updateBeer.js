import { createError } from "../../createError.js";
import Product from "../../models/Product.js";

export const updateBeer = async (req, res, next) => {
  try {
    const beer = await Product.findById(req.params.id);

    if (!beer) return next(createError(404, "Product not found"));

    // #TODO змінити на айді адміна
    if (req.user.id === beer.userId) {
      const updatedBeer = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedBeer);
    } else {
      return next(createError(403, "You can update only your beer"));
    }
  } catch (err) {
    next(err);
  }
};
