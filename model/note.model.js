import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true // enables search
    },

    content: {
      type: String,
      required: true,
      index: true // enables search
    },

    category: {
      type: String,
      default: "General"
    },

    tags: [
      {
        type: String
      }
    ]
  },
  {
    timestamps: true // createdAt & updatedAt
  }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;