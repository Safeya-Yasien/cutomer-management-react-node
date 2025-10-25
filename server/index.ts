import "dotenv/config";
import express from "express";
import customerRoutes from "./src/routes/customers.route";
import mongoose from "mongoose";
import cors from "cors";

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/customers")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/customers", cors(corsOptions), customerRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
