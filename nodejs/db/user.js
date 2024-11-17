import mongoose, { Schema } from "mongoose"; 

const userSchema = new Schema({
    email:String,
    number:Number,
    username:String,
    password:String,
})
export const User = mongoose.model('User',userSchema);


 