import express from "express";
import { authMiddleware } from "../middleware/middleware.js";
import {
  Cinema,
  City,
  Mall,
  Movie,
  ServiceProvider,
  Show,
} from "../db/movie.js";
import { TOTAL_SEATS } from "../config.js";
const router = express.Router();

router.get("/get_movies_in_city", authMiddleware, async (req, res) => {
  const city = req?.params?.city || "New Delhi";
  const cityObject = await City.findOne({ name: city });
  if (cityObject) {
    try {
      const cinemas = await Cinema.find({ city: cityObject?._id });
      if (cinemas) {
        let moviesIds = [];
        for (const cinemaObj of cinemas) {
          const shows = await Show.find({ cinema: cinemaObj?._id });
          {
            shows &&
              shows.forEach((show) => {
                if (!moviesIds.includes(show?.movie)) {
                  moviesIds.push(show?.movie);
                }
              });
          }
        }
        if (moviesIds.length) {
          let movies = [];
          for (let id of moviesIds) {
            const movie = await Movie.findById({ _id: id });
            movies.push(movie);
          }
          res.json({
            sucess: true,
            movies,
          });
        }
      }
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.json({
      sucess: false,
      movies: [],
    });
  }
});

router.post("/get_all_shows", authMiddleware, async (req, res) => {
  const city = req?.body?.city;
  const movie = req?.body?.movie;

  try {
    const movieObject = await Movie.find({ name: movie });
    const cityObject = await City.findOne({ name: city });
    const cinemas = await Cinema.find({ city: cityObject?._id });

    let allShows = [];
    for (const cinemaObj of cinemas) {
      const shows = await Show.find({
        cinema: cinemaObj?._id,
        movie: movieObject[0]?._id,
      });

      const serviceProviderObject = await ServiceProvider.find({
        _id: cinemaObj?.serviceProvider,
      });
      const mallObject = await Mall.find({ _id: cinemaObj?.mall });

      for (let show of shows) {
        allShows.push({
          id: show?._id,
          serviceProvider: serviceProviderObject[0]?.name,
          mall: mallObject[0]?.name,
          startTime: show?.startTime,
          startTime: show?.startTime,
          endTime: show?.endTime,
          intervalTime: show?.intervalTime,
          interval: show?.interval,
        });
      }
    }
    res.json({
      sucess: true,
      allShows,
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      error: "Internal Server Error",
    });
  }
});

router.get("/confirm_the_ticket", authMiddleware, async (req, res) => {
  const username = req.username;
  const seatNumber = Math.floor((Math.random()*TOTAL_SEATS))+1;

  res.json({
    username,
    seatNumber
  })

});

export default router;
