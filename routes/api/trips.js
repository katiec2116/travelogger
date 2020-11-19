const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");

// matches /api/trips/

router.route("/")
  .post(tripsController.addTrip)

router.route("/:user")
  .get(tripsController.getMyTrips);

router.route("/:tripid")
  .put(tripsController.updateTrip)
  .delete(tripsController.deleteTrip);


router.route("/getall")
  .get(tripsController.getAll)  



module.exports = router;