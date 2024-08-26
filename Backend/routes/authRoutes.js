import express from "express";
import { authControllers } from "../controllers/authController.js";
import auth from "../middleware/auth.js";

export const authRouters = express.Router();

authRouters
  .post("/register", authControllers.register)
  .post("/login", authControllers.login);

authRouters.get("/users", authControllers.getAllUsers);
authRouters.delete("/users/delete/:id", authControllers.deleteUser);
authRouters.get("/users/:userId", auth, authControllers.getOneUser);
