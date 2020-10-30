const router = require("express").Router();
const statsController = require("../../controllers/statsController");
const repsAndTimeController = require("../../controllers/repsAndTimeController");

// Matches with "/api/stats"
router.route("/stats")
  .post(statsController.create)
  .get(statsController.getWeightStats)


router.route("/repsandtime")
.post(repsAndTimeController.create)

module.exports = router;