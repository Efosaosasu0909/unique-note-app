import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { authRouters } from "./routes/authRoutes.js";
import { notesRouter } from "./routes/notesRoutes.js";

// CONNECT TO DB

connectDB();

// MIDLEWARE
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// ROUTES

app.get("/", (req, res) => {
  res.json({ msg: "Hello, welcome to the Note app!!!!" });
});


app.use("/api/auth", authRouters);
app.use("/api/notes", notesRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
