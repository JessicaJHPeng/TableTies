const mongoose = require("mongoose");

const menteeSchema = new mongoose.Schema({
  name: String,
  field: String,
  portrait: String,
  aboutMe: String,
  loginMail: { type: String, unique: true },
  loginPass: String, // Will be hashed before saving
  // subPlan: none
});

module.exports = mongoose.model("mentees", menteeSchema);