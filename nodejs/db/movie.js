import mongoose, { Schema, mongo } from "mongoose";
import { number, string } from "zod";

// service provider
const serviceProviderScheama = new Schema({
  name: String,
  external_eatables_allowed: Boolean,
});
export const ServiceProvider = mongoose.model(
  "ServiceProvider",
  serviceProviderScheama
);


// City
const cityScheama = new Schema({
  name: String,
  pincode: Number,
});
export const City = mongoose.model("City", cityScheama);


// Mall
const mallScheama = new Schema({
  name: String,
  city: { type: Schema.Types.ObjectId, ref: "City" },
});
export const Mall = mongoose.model('Mall', mallScheama);


// cinema
const cinemaScheama = new Schema({
    serviceProvider :{ type: Schema.Types.ObjectId, ref: "ServiceProvider" },
    mall :{ type: Schema.Types.ObjectId, ref: "Mall" },
    city :{ type: Schema.Types.ObjectId, ref: "City" },
    is_multiplex:Boolean
})
export const Cinema = mongoose.model('Cinema',cinemaScheama);


// Screen
const screenSchema = new Schema({
    name:String,
    cinema:{ type: Schema.Types.ObjectId, ref: "Cinema" },
    displayName:Number
})
export const Screen = mongoose.model("Screen", screenSchema);


// Movie
const movieSchema = new Schema({
    name:String,
    actors:[String],
    director:String,
    producer:String,
    duration:Number,
    trailer:String,
    rating:Number       //point mein kuch bhi store ni kraate toh 2 digit number hoga, meaning one decimal places
})
export const Movie = mongoose.model("Movie", movieSchema);


// Show

const showSchema = new Schema({
    cinema:{ type: Schema.Types.ObjectId, ref: "Cinema" },
    movie:{ type: Schema.Types.ObjectId, ref: "Movie" },
    screen:{ type: Schema.Types.ObjectId, ref: "Screen" },
    startTime:Date,
    endTime:Date,
    intervalTime:Date,
    interval:Number,    //in minutes
})
export const Show = mongoose.model("Show", showSchema);


// Booking records
const bookingScheama = new Schema({
  show:{ type: Schema.Types.ObjectId, ref: "Show" },
  username:String,
  seatNumber:Number,
  bookingTime:Date,
})

export const Booking = mongoose.model("Booking", bookingScheama);

 