const express = require("express");

const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

const reservations = [];

const waitlist = [];

// // Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Path to homepage/home.html
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
// Tables page
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
// Reserve Page
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays reservations
app.get("/api/reservations", function (req, res) {
  return res.json(reservations);
});
// Displays waitlist
app.get("/api/waitlist", function (req, res) {
  return res.json(waitlist);
});

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});