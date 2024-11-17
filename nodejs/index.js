import express from "express";
const app = express();
app.use(express.json());
import mongoose from "mongoose";
mongoose
  .connect(
    "mongodb+srv://kushagraagrawalug20:NyNPUXy0SXLv5UA1@cluster0.nqeg4.mongodb.net/"
  )
  .then(() => {
    console.log("connected to db atlas")
  })
  .catch(()=>{
    console.log("error does not connect ");
  })

import userRouter from "./routes/user.js";
import adminRouter from "./routes/admin.js"

app.use("/users", userRouter);
app.use("/admin", adminRouter)
app.use("/movies", moviesRouter);


app.listen(3000);
