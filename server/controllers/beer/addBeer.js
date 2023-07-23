import Product from "../../models/Product.js";

export const addBeer = async (req, res, next) => {
  // #TODO змінити на айді адміна
  const newBeer = new Product({ userId: req.user.id, ...req.body });

  try {
    console.log({ userId: req.user.id, ...req.body });
    
    const savedBeer = await newBeer.save();
    res.status(200).json(savedBeer);
  } catch (err) {
    next(err);
  }
};
