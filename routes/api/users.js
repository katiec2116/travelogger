const router = require("express").Router();
const passport = require('passport');
const userController = require("../../controllers/userController");
// Matches with "/api/users"
router.route("/")
.get(userController.getUser);

/* Authentication Routes */
router.route("/signup")
.post(userController.register);

  //Added this to redirect to the login 
router.route("/login")
.post(passport.authenticate('local', { failureRedirect: '/login' }),userController.login);

//Changed to post route to match the request
router.route("/logout")
.post(userController.logout);

// Matches with "/api/users/:id"
router.route("/user")
.get(userController.getUser);
/* Testing Endpoint */
router.route("/ping")
.get(userController.test);
  

module.exports = router;