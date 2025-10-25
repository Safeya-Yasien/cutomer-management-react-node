import express from "express";
const router = express.Router();

import {
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  deleteAllCustomers,
  getCustomerById,
} from "../controllers/customers.controller";

router.get("/", getCustomers);
router.post("/", addCustomer);
router.put("/:id", updateCustomer);
router.get("/:id", getCustomerById);
router.delete("/:id", deleteCustomer);
router.delete("/", deleteAllCustomers);

export default router;
