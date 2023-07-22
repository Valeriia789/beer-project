import { createError } from "../../createError.js";
import Product from "../../models/Product.js";

export const deleteBeer = async (req, res, next) => {
  try {
    const beer = await Product.findById(req.params.id);

    if (!beer) return next(createError(404, "Product not found"));

    // #TODO змінити на айді адміна
    if (req.user.id === beer.userId) {
      await Product.findByIdAndDelete(
        req.params.id,
      );
      res.status(200).json(updatedBeer)
    } else {
      return next(createError(403, 'You can delete only your beer'))
    }
  } catch (err) {
    next(err)
  }
  
}