const router = require("express").Router();
const statsController = require("../../controllers/statsController");
const repsAndTimeController = require("../../controllers/repsAndTimeController");

// Matches with "/api/stats"
router.route("/stats")
  .post(statsController.create)
  .get(statsController.getWeightStats)

  // Matches with "/api/repsandtime"
router.route("/repsandtime")
  .post(repsAndTimeController.create)
  .get(repsAndTimeController.getRepsAndTimeStats)

module.exports = router;