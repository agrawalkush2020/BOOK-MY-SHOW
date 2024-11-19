import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

export const authMiddleware = (req, res, next) => {
  const authHeader = req?.headers?.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({
      message: "user is not Authenticated !!",
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