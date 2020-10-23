const router = require("express").Router();
const statsController = require("../../controllers/statsController");

// Matches with "/api/stats"
router.route("/")
  .post(statsController.create);

module.exports = router;