import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import registerRoute from "./routes/register.js";
import mongodb from "./config/mongodb.js";

const app = express();
app.use(cors());
app.use(express.json());

mongodb();

app.use("/api/techlead", registerRoute);
app.use("/", (req, res) => {
  res.send("Api is Running...");
});

app.listen(5000, () => console.log("Server started on port 5000"));
