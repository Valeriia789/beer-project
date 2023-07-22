import express from 'express'
import { verifyToken } from "../verifyToken.js";

import { addBeer } from '../controllers/beer/addBeer.js'
import { updateBeer } from '../controllers/beer/updateBeer.js'
import { deleteBeer } from '../controllers/beer/deleteBeer.js'
import { getBeer } from '../controllers/beer/getBeer.js'

const router = express.Router();

router.post('/', verifyToken, addBeer)
router.put('/:id', verifyToken, updateBeer)
router.delete('/:id', verifyToken, deleteBeer)
router.get('/find/:id', verifyToken, getBeer)

export default router