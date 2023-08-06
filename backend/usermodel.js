const mongoose = require("mongoose");
const { Schema } = mongoose;

const userschema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  
});

const User = mongoose.model('User', userschema);

module.exports = User;