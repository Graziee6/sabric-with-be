import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
dotenv.config();


//Create connection

const connection = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to DB")
    })
    .catch((err) => console.error("Error connecting to MongoDB:", err));
};

export default connection;
