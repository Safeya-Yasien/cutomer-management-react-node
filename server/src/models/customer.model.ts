import mongoose, { Schema } from "mongoose";
import validator from "validator";

interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  gender: string;
}

const customerSchema = new Schema<ICustomer>({
  firstName: {
    type: String,
    required: [true, "Please enter a first name"],
    minlength: 2,
  },
  lastName: {
    type: String,
    required: [true, "Please enter a last name"],
    minlength: 2,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  phone: {
    type: String,
    required: [true, "Please enter a phone number"],
    unique: true,
    validate: [validator.isMobilePhone, "Please enter a valid phone number"],
  },
  country: { type: String },
  gender: { type: String },
});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
