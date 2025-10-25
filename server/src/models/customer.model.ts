import mongoose, { Schema, SchemaOptions } from "mongoose";
import validator from "validator";

interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: Number;
  country: string;
  gender: string;
}

const options: SchemaOptions = {
  versionKey: false,
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (doc: any, ret: any) => {
      delete ret._id;
      return ret;
    },
  },

  toObject: {
    virtuals: true,
  },
};

const customerSchema = new Schema<ICustomer>(
  {
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
    age: { type: Number },
    country: { type: String },
    gender: { type: String },
  },
  options as any
);

customerSchema
  .virtual("fullName")
  .get(function (this: ICustomer) {
    return `${this.firstName} ${this.lastName}`;
  })
  .set(function (v: String) {
    const firstName = v.substring(0, v.indexOf(" "));
    const lastName = v.substring(v.indexOf(" ") + 1);
    this.set({ firstName, lastName });
  });

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
