const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");

// matches /api/trips/

router.route("/")
  .post(tripsController.addTrip);

router.route("/:user")
.get(tripsController.getMyTrips)
.delete(tripsController.deleteTrip);

router.route("/update/:tripid")
  .put(tripsController.updateTrip);

router.route("/getalltrips")
.get(tripsController.getAllTrips);


module.exports = router;