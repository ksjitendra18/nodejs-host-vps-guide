import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import todosRoutes from "./routes/todos";
import mongoose from "mongoose";
// app initialization
const app = express();

dotenv.config();

// initializing middlewares
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
  })
);
app.use(bodyParser.json());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});
app.use("/todos", todosRoutes);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.DB_URL!)
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log("Error while connecting to DB", error);
  });

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
