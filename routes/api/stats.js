const router = require("express").Router();
const statsController = require("../../controllers/statsController");

// Matches with "/api/stats"
router.route("/stats")
  .post(statsController.create)
  .get(statsController.getWeightStats)

module.exports = router;