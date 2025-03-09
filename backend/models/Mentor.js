const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  name: String,
  field: String
});

module.exports = mongoose.model("mentors", mentorSchema);