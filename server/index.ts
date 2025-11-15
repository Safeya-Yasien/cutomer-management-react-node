import "dotenv/config";
import cors from "cors";
import express from "express";
import customerRoutes from "./src/routes/customers.route";
import userRoutes from "./src/routes/users.route";
import connectDB from "./connectDB";

const mongoURL =
  process.env.MONGODB_URL || "mongodb://localhost:27017/customers";

connectDB(mongoURL);

const allowedOrigins = [
  "http://localhost:5173",
  "https://cutomer-management-react-node.vercel.app",
];
const corsOptions = {
  origin: allowedOrigins,
  allowHeaders: ["Content-Type", "Authorization"],
  METHODS: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  optionsSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/customers", customerRoutes);
app.use("/api/users", userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

// export default app;
