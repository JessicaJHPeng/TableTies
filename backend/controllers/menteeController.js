const Mentee = require("../models/Mentee");
const bcrypt = require("bcryptjs");

// Get all mentees
exports.getMentees = async (req, res) => {
  try {
    const mentees = await Mentee.find();
    res.json(mentees);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get single mentee by ID
exports.getMenteeById = async (req, res) => {
  try {
    const mentee = await Mentee.findById(req.params.id);
    if (!mentee) return res.status(404).json({ error: "Mentee not found" });
    res.json(mentee);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// // Create a mentee
// exports.createMentee = async (req, res) => {
//   try {
//     const { name, loginMail, loginPass, portrait, aboutMe } = req.body;

//     // Hash password before saving
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(loginPass, salt);

//     const mentee = new Mentee({
//       name,
//       loginMail,
//       loginPass: hashedPassword,
//       portrait,
//       aboutMe,
//     });

//     await mentee.save();
//     res.status(201).json(mentee);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// };

// // Update a mentee
// exports.updateMentee = async (req, res) => {
//   try {
//     const mentee = await Mentee.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!mentee) return res.status(404).json({ error: "Mentee not found" });
//     res.json(mentee);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// };

// // Delete a mentee
// exports.deleteMentee = async (req, res) => {
//   try {
//     const mentee = await Mentee.findByIdAndDelete(req.params.id);
//     if (!mentee) return res.status(404).json({ error: "Mentee not found" });
//     res.json({ message: "Mentee deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// };
