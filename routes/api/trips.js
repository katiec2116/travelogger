const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");

// matches /api/trips/

router.route("/")
  .post(tripsController.addTrip)

router.route("/:user")
  .get(tripsController.getMyTrips);

router.route("/:user/been/:been")
  .get(tripsController.getMyTripsType);

router.route("/:tripid")
  .put(tripsController.updateTrip)
  .delete(tripsController.deleteTrip)
  .get(tripsController.getTrip);


router.route("/getalltrips/:user")
  .get(tripsController.getAllTrips); 




module.exports = router;