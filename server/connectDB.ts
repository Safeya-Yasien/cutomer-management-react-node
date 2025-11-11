import mongoose from "mongoose";

const connectDB = async (mongoURL: string) => {
  try {
    const connect = await mongoose.connect(
      mongoURL || "mongodb://localhost:27017/customers"
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
};

export default connectDB;
