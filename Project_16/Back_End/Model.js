import mongoose from "mongoose";

const value = new mongoose.Schema({
    Name: String,
    Email: String,
    Password: String
})
const Data = mongoose.model('Data',value,'pd')

export default Data