import mongoose, { Schema } from "mongoose";
 

const adminSchema = new Schema({
    email:String,
    number:Number,
    username:String,
    password:String,
})

export const Admin = mongoose.model('Admin',adminSchema);