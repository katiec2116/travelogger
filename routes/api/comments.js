const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

// matches /api/comments/

router.route("/:tripId")
  .post(commentsController.addComment)
  .get(commentsController.getComments)

  module.exports = router