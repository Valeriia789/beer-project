import express from 'express'
import { signIn, signUp } from '../controllers/authController.js'

const router = express.Router()

// Create user
router.post('/signup', signUp)
// sign in
router.post('/signin', signIn)
// // google auth
// router.post('/google')

export default router