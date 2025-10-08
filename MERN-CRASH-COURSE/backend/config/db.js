import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // console.log(process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to DB: ${error}`);
    //will kill any ongoing taks to be careful!!
    process.exit(1); //1 code means exit with failure, 0 means success
  }
};
