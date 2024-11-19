import express from "express";
import { authMiddleware } from "../middleware/middleware.js";
import { Cinema, City, Movie, Show } from "../db/movie.js";
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
            message: "success !!",
            movies,
          });
        }
      }
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.json({
      movies: [],
    });
  }
});

router.post("/get_all_shows", authMiddleware, async (req, res) => {
  const city = req?.body?.city;
  const movie = req?.body?.movie;

  try {
    // finding the movie object
    const movieObject = await Movie.find({ name: movie });
    // finding the city object
    const cityObject = await City.findOne({ name: city });
    const cinemas = await Cinema.find({ city: cityObject?._id });

    let allShows = [];
    for (const cinemaObj of cinemas) {
      const shows = await Show.find({
        cinema: cinemaObj?._id,
        movie: movieObject[0]?._id,
      });

      shows && allShows.push(...shows);
    }

    res.json({
      allShows,
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
