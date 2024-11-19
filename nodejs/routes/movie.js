import express from "express";
import { authMiddleware } from "../middleware/middleware.js";
import { Cinema, City, Movie, Show } from "../db/movie.js";
const router = express.Router();

router.get("/get_movies_in_city", authMiddleware, async (req, res) => {
  const city = req?.params?.city || "New Delhi";
  const cityObject = await City.findOne({ name: city });
  if (!cityObject) {
    res.json({
      movies: [],
    });
  }

  const cinemas = await Cinema.find({ city: cityObject?._id });
  if (!cinemas) {
    res.json({
      movies: [],
    });
  }

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
  if (!moviesIds.length) {
    res.json({
      movies: [],
    });
  }

  let movies = [];
  for (let id of moviesIds) {
    const movie = await Movie.findById({ _id: id });
    movies.push(movie);
  }

  res.json({
    message: "success !!",
    movies,
  });
});

router.post("/get_all_shows", authMiddleware, async (req, res) => {
  const city = req?.body?.city;
  const movie = req?.body?.movie;

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
});

export default router;
