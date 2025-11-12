import mongoose, { Schema } from "mongoose";
import validator from "validator";

interface IUser {
  email: string;
  password: string;
  role: string;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: { type: String, required: [true, "Please enter a password"] },
  role: { type: String, default: "user" },
});

const User = mongoose.model("User", userSchema);

export default User;
