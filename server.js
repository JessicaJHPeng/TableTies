// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const connectDB = require("./config/db");
// require("dotenv").config();

// const app = express();

// // Add functions to create a new project/mentor/user/whatever and add functions to edit/delete them
// // https://www.w3schools.com/nodejs/nodejs_mongodb.asp

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// connectDB();

// // Routes
// app.use("/api/items", require("./routes/itemRoutes"));

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const menteeRoutes = require("./routes/menteeRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/mentees", menteeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

