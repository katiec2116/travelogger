const router = require("express").Router();
const passport = require('passport');

const usersController = require("../../controllers/usersController");
// Matches with "/api/users"
router.route("/")
  .get(usersController.getUsers);

/* Authentication Routes */
router.route("/register")
  .post(usersController.register);

router.route("/login")
  .post(passport.authenticate('local', { failureRedirect: '/login' }),usersController.login);
//Changed to post route to match the request

router.route("/logout")
  .post(usersController.logout);

// Matches with "/api/users/"
router.route("/user")
  .get(usersController.getUser);

router.route("/userdata/:user")
  .get(usersController.getUserData);


module.exports = router;