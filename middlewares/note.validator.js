import Joi from "joi";

// CREATE NOTE
const createNoteSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  content: Joi.string().min(3).max(1000).required(),
  category: Joi.string().optional(),
  tags: Joi.array().items(Joi.string()).optional()
});

// UPDATE NOTE
const updateNoteSchema = Joi.object({
  title: Joi.string().min(3).max(100),
  content: Joi.string().min(3).max(1000),
  category: Joi.string(),
  tags: Joi.array().items(Joi.string())
});

// CREATE VALIDATOR
export const validateCreateNote = (req, res, next) => {
  const { error } = createNoteSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message
    });
  }

  next();
};

// UPDATE VALIDATOR
export const validateUpdateNote = (req, res, next) => {
  const { error } = updateNoteSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message
    });
  }

  next();
};