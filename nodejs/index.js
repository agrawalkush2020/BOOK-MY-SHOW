import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import adminRouter from "./routes/admin.js"
import movieRouter from "./routes/movie.js"
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

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

console.log("hello");


app.listen(3000);