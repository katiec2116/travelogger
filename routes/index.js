const path = require("path");
const router = require("express").Router();
const userController = require("../controllers/userController");


// Matches with "/api/users/""
router.route("/api/users")
  .get(userController.findAll)
  .post(userController.create);


router.route("/api/users/:username")
  .get(userController.findById)
  // .delete(userController.remove);


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});




module.exports = router;
