const path = require("path");
const router = require("express").Router();
const userController = require("../controllers/userController");
// const apiRoutes = require("./api");

router.route("/api/users")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/users/:id"
router.route("/api/users/:id")
  .get(userController.findById)

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
