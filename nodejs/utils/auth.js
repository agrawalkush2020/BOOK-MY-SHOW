import { JWT_SECRET } from "../config.js";
import jwt from "jsonwebtoken";

export const generateToken = (username, role) => {
  const payload = {
    username: username,
    role: role,
  };

  // Sign the token with a secret key
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
};
