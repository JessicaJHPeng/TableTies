const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  description: String,
  externalLink: String,
});

module.exports = mongoose.model("projects", projectSchema);