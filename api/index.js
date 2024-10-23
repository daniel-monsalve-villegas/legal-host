import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(import.meta.env.BASE_URL)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

const app = express();
