const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema({
  skill_name: String,
});

module.exports = mongoose.model("skills", skillsSchema);