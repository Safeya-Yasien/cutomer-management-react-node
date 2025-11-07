import mongoose from "mongoose";
import Customer from "../models/customer.model";

const getCustomers = async (req: any, res: any) => {
  try {
    const allCustomers = await Customer.find({}, { __v: 0 });
    res.status(200).json({ msg: "success", data: allCustomers, success: true });
  } catch (err) {
    res.status(500).send(err);
  }
};

const addCustomer = async (req: any, res: any) => {
  try {
    const newCustomer = new Customer({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      country: req.body.country,
      gender: req.body.gender,
      age: req.body.age,
    });

    await newCustomer.save();

    res.status(201).json({ msg: "success", data: newCustomer, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
    console.log(err);
  }
};

const getCustomerById = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        msg: "Invalid ID format provided.",
        success: false,
      });
    }

    const customer = await Customer.findById(id, { __v: 0 });
    if (!customer) {
      res.status(404).json({ msg: "customer not found", success: false });
      return;
    }

    res.status(200).json({ msg: "success", data: customer, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const updateCustomer = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        country: req.body.country,
        gender: req.body.gender,
        age: req.body.age,
      },
      { new: true }
    );

    res
      .status(200)
      .json({ msg: "success", data: updatedCustomer, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const deleteCustomer = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    await Customer.findByIdAndDelete(id);
    res.status(200).json({ msg: "success", data: null, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const deleteAllCustomers = async (req: any, res: any) => {
  try {
    await Customer.deleteMany({});
    res.status(200).json({ msg: "success", data: null, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const searchCustomers = async (req: any, res: any) => {
  try {
    const { search: searchTerm } = req.query;

    if (!searchTerm) {
      return res.status(400).json({
        msg: "No search term provided.",
        success: false,
      });
    }

    const customers = await Customer.find({
      $or: [
        { firstName: { $regex: `${searchTerm}`, $options: "i" } },
        { lastName: { $regex: `${searchTerm}`, $options: "i" } },
        { email: { $regex: `${searchTerm}`, $options: "i" } },
        { country: { $regex: `${searchTerm}`, $options: "i" } },
      ],
    });

    res.status(200).json({ msg: "success", data: customers, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

export {
  getCustomers,
  addCustomer,
  updateCustomer,
  getCustomerById,
  deleteCustomer,
  deleteAllCustomers,
  searchCustomers,
};
