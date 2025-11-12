import express from "express";
const router = express.Router();
import {
  deleteAllUsers,
  getUsers,
  login,
  register,
} from "../controllers/users.controller";

router.post("/register", register);
router.post("/login", login);
router.get("/", getUsers);
router.delete("/", deleteAllUsers);

export default router;
