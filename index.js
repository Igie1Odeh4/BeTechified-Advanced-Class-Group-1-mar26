import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/database.js";
import noteRoute from "./route/note.route.js";
import requestLogger from "./middlewares/requestLogger.js";
import errorHandler from "./middlewares/errorHandler.middleware.js";
import cors from "cors";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5050;

await connectDb();

app.use(cors());
app.use(requestLogger);

app.use(express.json());

app.use("/api/notes", noteRoute);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});