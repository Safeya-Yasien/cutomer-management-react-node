import "dotenv/config";
import express from "express";
import customerRoutes from "./src/routes/customers.route";
import cors from "cors";
import connectDB from "./connectDB";

const mongoURL =
  process.env.MONGODB_URL || "mongodb://localhost:27017/customers";

connectDB(mongoURL);

const allowedOrigins = [
  "http://localhost:5173",
  "https://cutomer-management-react-node.vercel.app",
  "https://cutomer-management-react-node-prm5.vercel.app",
];
const corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/customers", customerRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
