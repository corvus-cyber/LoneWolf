const router = require("express").Router();
const statsRoutes = require("./stats");
const repsAndTimeRoutes = require("./repsandtime");

// stats routes
router.use("/stats", statsRoutes);

// books and time routes
router.use("/repsandtime", repsAndTimeRoutes);

module.exports = router;