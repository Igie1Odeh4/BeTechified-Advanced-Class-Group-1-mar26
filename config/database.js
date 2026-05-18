import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected Successfully");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1); // STOP APP
  }
};

export default connectDb;