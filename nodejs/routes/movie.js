import express from "express";
import { authMiddleware } from "../middleware/middleware";
const router = express.Router();

router.get("/get_movies_in_city", authMiddleware, (req, res) => {

});

router.get("/get_all_shows", authMiddleware, (req, res) => {

});



export default router;
