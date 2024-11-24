import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

export const authMiddleware = (req, res, next) => {
  const authHeader = req?.headers?.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "user is not Authenticated !!",
    });
  }

  try {
    var decoded = jwt.verify(authHeader.split(" ")[1], JWT_SECRET);
    req.username = decoded.username;
    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Wrong jwt token !!",
    });
  }
};
