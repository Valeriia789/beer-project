import express from 'express'
import { test } from '../controllers/userController.js'
import { signUp } from '../controllers/authController.js'

const router = express.Router()

// Create user
router.post('/signup', signUp)
// sign in
router.post('/signin')
// google auth
router.post('/google')

export default router