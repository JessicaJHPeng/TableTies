const mongoose = require("mongoose");

const menteeSchema = new mongoose.Schema({
  name: String,
  portrait: String,
  aboutMe: String,
  loginMail: { type: String, unique: true },
  loginPass: String, // Will be hashed before saving
  subscriptionPlan: { type: String, enum: ["monthly", "yearly", "none"], default: "none" },
});

module.exports = mongoose.model("Mentee", menteeSchema);