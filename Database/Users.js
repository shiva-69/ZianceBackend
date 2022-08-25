const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : String,
    contact : Number,
    email : String,
    password : String,
    id : [mongoose.Types.ObjectId]
})

const Users = mongoose.model("User", userSchema);
module.exports = {
    Users
} 