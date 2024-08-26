import express from "express";
import { notesControllers } from "../controllers/notesControllers.js";
import auth from "../middleware/auth.js";

export const notesRouter = express.Router();

notesRouter.post("/create", auth, notesControllers.createNote);
notesRouter.get("/", notesControllers.listAllNotes);
notesRouter.get("/:noteId", notesControllers.listOneNote);

notesRouter.get("/user/notes", auth, notesControllers.listMyNotes);

notesRouter.put("/edit/:noteId", notesControllers.updateNote);
notesRouter.delete("/delete/:id", notesControllers.deleteNote);
