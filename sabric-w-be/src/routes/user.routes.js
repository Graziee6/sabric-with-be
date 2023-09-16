import express from "express";
import {
  addUser,
  getAllUsers,
  login,
  updateUser,
} from "../controllers/user.controller.js";
import authToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/", addUser);
router.post("/login", login);
router.get("/getUsers", authToken, getAllUsers);
router.put("/updateUser", authToken, updateUser);

export default router;
