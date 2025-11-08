import "dotenv/config";
import express from "express";
import customerRoutes from "./src/routes/customers.route";
import cors from "cors";
import connectDB from "./connectDB";
import path from "path";

connectDB();

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
// const _dirname = path.resolve();

app.use("/api/customers", customerRoutes);

const CLIENT_DIST_PATH = path.join(__dirname, "../client/dist");
// app.use(express.static(path.join(_dirname, "../client/dist")));
app.use(express.static(CLIENT_DIST_PATH));
app.get("{*splat}", (_, res) => {
  // res.sendFile(path.resolve(_dirname, "client", "dist", "index.html"));
  res.sendFile(path.join(CLIENT_DIST_PATH, "index.html"));
});

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`http://localhost:${port}`);
// });
export default app;
