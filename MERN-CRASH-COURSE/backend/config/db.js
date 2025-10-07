import mongoose from "mongoose";
import dotenv from "dotenv";

//loads our .env file
dotenv.config();
console.log(process.env.MONGO_URI);

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to DB: ${error}`);
    process.exit(1); //1 code means exit with failure
  }
};
