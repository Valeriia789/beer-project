import express from 'express'
import { verifyToken } from "../verifyToken.js";

import { addBeer } from '../controllers/beer/addBeer.js'
import { updateBeer } from '../controllers/beer/updateBeer.js'
import { deleteBeer } from '../controllers/beer/deleteBeer.js'
import { getBeerById } from '../controllers/beer/getBeerById.js'
import { getLowestPriceBeer } from '../controllers/beer/getLowestPriceBeer.js';
import { getHighestPriceBeer } from '../controllers/beer/getHighestPriceBeer.js';
import { getByTitle } from '../controllers/beer/getBeerByTitle.js';

const router = express.Router();

router.post('/', verifyToken, addBeer)
router.put('/:id', verifyToken, updateBeer)
router.delete('/:id', verifyToken, deleteBeer)

router.get('/find/:id', verifyToken, getBeerById)
router.get('/search', getByTitle)

router.get('/sort/low', getLowestPriceBeer)
router.get('/sort/high', getHighestPriceBeer)

export default router