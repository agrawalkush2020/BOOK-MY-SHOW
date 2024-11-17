import express from "express";
const router = express.Router();
import { Admin } from "../db/admin.js";
import { signInSchema, signupSchema } from "./user.js";
import { JWT_SECRET } from "../config.js";

router.post("/signup", async (req, res) => {
  try {
    signupSchema.parse(req.body);
    const userObject = new Admin(req.body);
    const userAlreadyExist = await Admin.findOne({
      username: req?.body?.username,
    });
    if (userAlreadyExist) {
      res.status(401).json({
        message: "user already exist!",
      });
    }
    await userObject.save();
    res.send({
      message: "user created successfully !!",
    });
  } catch (error) {
    res.status(401).json({
      message: `Fill proper credentials ${error.message} !`,
    });
  }
});

router.get("/signin", async (req, res) => {
  try {
    signInSchema.parse(req.body);
    const { username, password } = req.body;
    const userExist = await Admin.findOne({
      username,
      password,
    });
    if (!userExist) {
      res.status(401).json({
        message: "User does not Exist!, Incorrect username or password",
      });
    }
    var token = jwt.sign({ username }, JWT_SECRET);
    res.json({
      token,
    });
  } catch (error) {
    res.status(401).json({
      message: `Fill proper credentials ${error.message} !`,
    });
  }
});

export default router;
