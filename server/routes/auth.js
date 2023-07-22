import express from 'express'

import { signup } from '../controllers/auth/signup.js'
import { signin } from '../controllers/auth/signin.js'

const router = express.Router()

// Create user
router.post('/signup', signup)
// sign in
router.post('/signin', signin)
// // google auth
// router.post('/google')

export default router