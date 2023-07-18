const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    name: { type: String},
    email: { type: String },
    mobile: { type: String },
    password: { type: String }
})


module.exports = mongoose.model("Page", UserSchema)