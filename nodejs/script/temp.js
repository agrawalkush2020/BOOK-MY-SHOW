import mongoose from "mongoose";
import { ServiceProvider, City, Mall, Cinema, Screen, Movie, Show } from "../db/movie.js"; // Replace with your schema file path

// MongoDB connection
const mongoURI = "mongodb+srv://kushagraagrawalug20:NyNPUXy0SXLv5UA1@cluster0.nqeg4.mongodb.net/book-my-show"; // replace with your actual MongoDB URI
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async function () {
  console.log("Connected to the database");

  try {
    // Clear existing data (optional)
    await ServiceProvider.deleteMany({});
    await City.deleteMany({});
    await Mall.deleteMany({});
    await Cinema.deleteMany({});
    await Screen.deleteMany({});
    await Movie.deleteMany({});
    await Show.deleteMany({});

    // Create Service Providers
    const sp1 = await ServiceProvider.create({ name: "PVR Cinemas", external_eatables_allowed: false });
    const sp2 = await ServiceProvider.create({ name: "Inox", external_eatables_allowed: true });
    const sp3 = await ServiceProvider.create({ name: "Cinepolis", external_eatables_allowed: true });

    // Create Cities
    const city1 = await City.create({ name: "New Delhi", pincode: 110001 });
    const city2 = await City.create({ name: "Mumbai", pincode: 400001 });
    const city3 = await City.create({ name: "Bengaluru", pincode: 560001 });

    // Create Malls
    const mall1 = await Mall.create({ name: "Select Citywalk", city: city1._id });
    const mall2 = await Mall.create({ name: "Phoenix Mall", city: city2._id });
    const mall3 = await Mall.create({ name: "Orion Mall", city: city3._id });

    // Create Cinemas
    const cinema1 = await Cinema.create({ serviceProvider: sp1._id, mall: mall1._id, city: city1._id, is_multiplex: true });
    const cinema2 = await Cinema.create({ serviceProvider: sp2._id, mall: mall2._id, city: city2._id, is_multiplex: true });
    const cinema3 = await Cinema.create({ serviceProvider: sp3._id, mall: mall3._id, city: city3._id, is_multiplex: false });

    // Create Screens
    const screen1 = await Screen.create({ name: "Screen 1", cinema: cinema1._id, displayName: 101 });
    const screen2 = await Screen.create({ name: "Screen 2", cinema: cinema1._id, displayName: 102 });
    const screen3 = await Screen.create({ name: "Screen 1", cinema: cinema2._id, displayName: 201 });
    const screen4 = await Screen.create({ name: "Screen 1", cinema: cinema3._id, displayName: 301 });

    // Create Movies
    const movie1 = await Movie.create({
      name: "Inception",
      actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
      director: "Christopher Nolan",
      producer: "Emma Thomas",
      duration: 148,
      trailer: "https://example.com/trailer/inception",
      rating: 8.8,
    });
    const movie2 = await Movie.create({
      name: "The Dark Knight",
      actors: ["Christian Bale", "Heath Ledger"],
      director: "Christopher Nolan",
      producer: "Charles Roven",
      duration: 152,
      trailer: "https://example.com/trailer/dark-knight",
      rating: 9.0,
    });
    const movie3 = await Movie.create({
      name: "Interstellar",
      actors: ["Matthew McConaughey", "Anne Hathaway"],
      director: "Christopher Nolan",
      producer: "Emma Thomas",
      duration: 169,
      trailer: "https://example.com/trailer/interstellar",
      rating: 8.6,
    });

    // Create Shows
    const show1 = await Show.create({
      cinema: cinema1._id,
      movie: movie1._id,
      screen: screen1._id,
      startTime: new Date("2024-11-19T15:00:00"),
      endTime: new Date("2024-11-19T17:28:00"),
      intervalTime: new Date("2024-11-19T16:00:00"),
      interval: 15,
    });
    const show2 = await Show.create({
      cinema: cinema1._id,
      movie: movie2._id,
      screen: screen2._id,
      startTime: new Date("2024-11-19T18:00:00"),
      endTime: new Date("2024-11-19T20:32:00"),
      intervalTime: new Date("2024-11-19T19:00:00"),
      interval: 15,
    });
    const show3 = await Show.create({
      cinema: cinema2._id,
      movie: movie3._id,
      screen: screen3._id,
      startTime: new Date("2024-11-19T21:00:00"),
      endTime: new Date("2024-11-19T23:49:00"),
      intervalTime: new Date("2024-11-19T22:00:00"),
      interval: 15,
    });

    console.log("Sample data added successfully!");
  } catch (error) {
    console.error("Error adding sample data:", error);
  } finally {
    mongoose.connection.close();
  }
});
