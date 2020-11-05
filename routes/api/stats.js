const router = require("express").Router();
const statsController = require("../../controllers/statsController");
const repsAndTimeController = require("../../controllers/repsAndTimeController");

router.use("/api");

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Matches with "/api/stats"
router.route("/stats")
  .post(statsController.create)
  .get(statsController.getWeightStats)

  // Matches with "/api/repsandtime"
router.route("/repsandtime")
  .post(repsAndTimeController.create)
  .get(repsAndTimeController.getRepsAndTimeStats)
