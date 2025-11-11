import "dotenv/config";
import express from "express";
import customerRoutes from "./src/routes/customers.route";
import cors from "cors";
import connectDB from "./connectDB";
import path from "path";

connectDB();

const allowedOrigins = [
  "http://localhost:5173",
  "https://cutomer-management-react-node-prm5.vercel.app",
];
const corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
const _dirname = path.resolve();

app.use("/api/customers", customerRoutes);

app.use(express.static(path.join(_dirname, "../client/dist")));
app.get("{*splat}", (_, res) => {
  res.sendFile(path.resolve(_dirname, "client", "dist", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
