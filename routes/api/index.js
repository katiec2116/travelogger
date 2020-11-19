const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const tripRoutes = require("./trips");

//User Routes
router.use("/users", userRoutes);

// Trip Routes
router.use("/trips", tripRoutes);
// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
