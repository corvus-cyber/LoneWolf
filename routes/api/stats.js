const router = require("express").Router();
const statsController = require("../../controllers/statsController");

// Matches with "/api/stats"
router.route("/stats")
  .get(statsController.findAll)
  .post(statsController.create);


module.exports = router;