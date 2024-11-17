import express from "express";
import { authMiddleware } from "../middleware/middleware";
const router = express.Router();

router.get("/movies", authMiddleware, (req, res) => {
    
});
