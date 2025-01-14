import express from "express";
const router = express.Router();
import { Admin } from "../db/admin.js";
import { signInSchema, signupSchema } from "./user.js";
import { JWT_SECRET } from "../config.js";
import { Booking } from "../db/movie.js";
import { adminAuthMiddleware } from "../middleware/middleware.js";
import { generateToken } from "../utils/auth.js";

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

router.post("/login", async (req, res) => {
  try {
    signInSchema.parse(req.body);
    const { username, password } = req.body;
    const userExist = await Admin.findOne({
      username,
      password,
    });
    if (!userExist) {
      return res.status(401).json({
        message: "User does not Exist!, Incorrect username or password",
      });
    }
    var token = generateToken(username, "admin");
    return res.json({
      success: true,
      token,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: `Fill proper credentials ${error.message} !`,
    });
  }
});

router.get("/bookings", adminAuthMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.find();
    return res.json({
      success: true,
      bookings,
    });
  } catch (error) {
    return res.status(501).json({
      success: false,
      message: "internal server error",
    });
  }
});

export default router;
