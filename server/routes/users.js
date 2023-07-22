import express from "express";
import { getUser } from "../controllers/users/getUser.js";
import { updateUser } from "../controllers/users/updateUser.js";
import { deleteUser } from "../controllers/users/deleteUser.js";

import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.get("/find/:id", getUser);

export default router;
