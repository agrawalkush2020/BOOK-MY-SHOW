import express from "express";
import { authMiddleware } from "../middleware/middleware.js";
import {
  Booking,
  Cinema,
  City,
  Mall,
  Movie,
  ServiceProvider,
  Show,
} from "../db/movie.js";
import { TOTAL_SEATS } from "../config.js";
import { sendEmail } from "../mailling.js";
import { User } from "../db/user.js";
import { getCurrentBookingTime } from "../utils/dateAndTime.js";
const router = express.Router();

router.get("/get_movies_in_city", async (req, res) => {
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
      return res
        .status(500)
        .json({ sucess: false, error: "Internal Server Error" });
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
  const showId = req?.query?.showId;
  const seatNumber = Math.floor(Math.random() * TOTAL_SEATS) + 1;

  try {
    const userObject = await User.find({ username });
    const showObject = await Show.find({ _id: showId });

    const info = await sendEmail(
      userObject[0]?.email,
      "Yuppee!!, Seat confirmed",
      `congratulations, your seat number is ${seatNumber}`
    );

    const booking = await Booking.create({
      show: showObject[0]?._id,
      username,
      seatNumber,
      bookingTime: getCurrentBookingTime(),
    });

    res.json({
      sucess: true,
      seatNumber,
    });
  } catch (error) {
    console.log("error", error);
    res.json({
      sucess: false,
      message: "Unable to book your seat !!",
    });
  }
});

// https://easy.razorpay.com/onboarding/overview/kyc
// ispr 3-4 wokring days kha hai confirm krne mein ,

export default router;
