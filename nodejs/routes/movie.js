import express from "express";
import { authMiddleware } from "../middleware/middleware.js";
import { Cinema, City } from "../db/movie.js";
const router = express.Router();

router.get("/get_movies_in_city", authMiddleware, async (req, res) => {
    const city = req?.params?.city || "New Delhi";
    const cityObject = await City.findOne({name:city})
    if(!cityObject){
        res.json({
            movies:[]
        })
    }
    console.log("cityObject",cityObject);


    // we will find all the cinemas from the movies
    // const cinemas = await Cinema.find({city:cityObject?._id});
    res.json({
        message:"success !!"
    });
});

router.get("/get_all_shows", authMiddleware, (req, res) => {

});



export default router;
