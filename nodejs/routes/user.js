import express from "express";
const router = express.Router();
import { z } from "zod";
import { User } from "../db/user.js";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config.js";

export const signupSchema = z.object({
  email: z.string().email(),
  number: z.number(),
  username: z.string(),
  password: z.string(),
});

export const signInSchema = z.object({
  username: z.string(),
  password: z.string(),
});

router.post("/signup", async (req, res) => {
  console.log("dfg");
  try {
    console.log("req.body", req.body);
    signupSchema.parse(req.body);
    const userObject = new User(req.body);
    const userAlreadyExist = await User.findOne({
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

router.post("/signin", async (req, res) => {
  try {
    console.log("req.body", req.body);
    signInSchema.parse(req.body);
    const { username, password } = req.body;
    const userExist = await User.findOne({
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
      token
    });
  } catch (error) {
    res.status(401).json({
      message: `Fill proper credentials ${error.message} !`,
    });
  }
});

export default router;
