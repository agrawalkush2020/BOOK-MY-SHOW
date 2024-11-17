import express from "express";
const app = express();
import mongoose from 'mongoose';
mongoose.connect("mongodb://0.0.0.0:27017/bookMyShow");
 
import userRouter from "./routes/user.js"

app.post("/users", userRouter);

app.listen(3000);
