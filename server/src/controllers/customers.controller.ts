import { asyncWrapProviders } from "async_hooks";
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
    });

    await newCustomer.save();

    res.status(201).json({ msg: "success", data: newCustomer, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
    console.log(err);
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
    await Customer.findOneAndDelete(id);
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

export {
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  deleteAllCustomers,
};
