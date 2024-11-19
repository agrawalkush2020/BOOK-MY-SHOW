import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import adminRouter from "./routes/admin.js"
import movieRouter from "./routes/movie.js"

const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://kushagraagrawalug20:NyNPUXy0SXLv5UA1@cluster0.nqeg4.mongodb.net/book-my-show"
  )
  .then(() => {
    console.log("connected to db atlas")
  })
  .catch(()=>{
    console.log("error does not connect ");
  })


app.use("/users", userRouter);
app.use("/admin", adminRouter)
app.use("/movies", movieRouter);


app.listen(3000);
