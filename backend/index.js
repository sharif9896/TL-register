import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import registerRoute from "./routes/register.js";
import mongodb from "./config/mongodb.js";

const app = express();
app.use(
  cors({
    origin: "https://tl-register.vercel.app", // your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

mongodb();

app.use("/api/techlead", registerRoute);
app.use("/", (req, res) => {
  res.send("Api is Running...");
});

app.listen(5000, () => console.log("Server started on port 5000"));
