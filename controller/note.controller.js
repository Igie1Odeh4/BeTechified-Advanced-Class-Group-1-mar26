import Note from "../model/note.model.js";

export const createNote = async (req, res, next) => {
  try {

    // 🔍 CHECK FOR DUPLICATE FIRST (PLACE HERE)
    const existing = await Note.findOne({
      title: req.body.title,
      content: req.body.content
    });

    if (existing) {
      return res.status(400).json({
        message: "Duplicate note not allowed"
      });
    }

    // ✅ CREATE ONLY IF NOT DUPLICATE
    const note = await Note.create(req.body);

    res.status(201).json({
      success: true,
      note
    });

  } catch (error) {
    next(error);
  }
};


export const getNotes = async (req, res, next) => {
  try {
    const { search, page = 1, limit = 10 } = req.query;

    let filter = {};

    // SEARCH
    if (search) {
      filter = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { content: { $regex: search, $options: "i" } }
        ]
      };
    }

    const skip = (page - 1) * limit;

    // GET PAGINATED DATA
    const notes = await Note.find(filter)
      .skip(skip)
      .limit(Number(limit));

    // TOTAL COUNT (for frontend pagination UI)
    const total = await Note.countDocuments(filter);

    res.status(200).json({
      success: true,
      count: notes.length,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      notes
    });

  } catch (error) {
    next(error);
  }
};


export const updateNote = async (req, res, next) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true
      }
    );

    if (!updatedNote) {
      return res.status(404).json({
        message: "Note not found"
      });
    }

    res.status(200).json({
      success: true,
      note: updatedNote
    });

  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (req, res, next) => {
  try {

    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(404).json({
        message: "Note not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Note deleted successfully"
    });

  } catch (error) {
    next(error);
  }
};