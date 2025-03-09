const express = require("express");
const {
  getMentees,
  getMenteeById,
  createMentee,
  updateMentee,
  deleteMentee,
} = require("../controllers/menteeController");

const router = express.Router();

router.get("/", getMentees);
router.get("/:id", getMenteeById);
// router.post("/", createMentee);
// router.put("/:id", updateMentee);
// router.delete("/:id", deleteMentee);

module.exports = router;
