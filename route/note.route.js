import express from "express";
const router = express.Router();

import {
  validateCreateNote,
  validateUpdateNote
} from "../middlewares/note.validator.js";

import {
  createNote,
  getNotes,
  updateNote,
  deleteNote
} from "../controller/note.controller.js";

// CREATE
router.post("/", validateCreateNote, createNote);

// READ ALL
router.get("/", getNotes);

// UPDATE
router.put("/:id", validateUpdateNote, updateNote);

// DELETE
router.delete("/:id", deleteNote);

export default router;