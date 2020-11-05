const router = require("express").Router();
const repsAndTimeController = require("../../controllers/repsAndTimeController");

  // Matches with "/api/repsandtime"
router.route("/")
  .post(repsAndTimeController.create)
  .get(repsAndTimeController.getRepsAndTimeStats)

module.exports = router;