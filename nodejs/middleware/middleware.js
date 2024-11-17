import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';
export const authMiddleware = (req, res, next) => {
  const authHeader = req?.headers?.authoirzation;

  if (!authHeader || authHeader.startsWith("Bearer ")) {
    res.status(401).json({
      message: "please send the auth headers properly !!",
    });
  }

  try {
    var decoded = jwt.verify(authHeader.split(' ')[1], JWT_SECRET);
    req.username=decoded.username;
    next();
  } catch (err) {
    res.status(401).json({
        message: "Wrong jwt token !!",
      });
  }
};