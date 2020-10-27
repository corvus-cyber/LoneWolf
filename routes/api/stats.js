const router = require("express").Router();
const statsController = require("../../controllers/statsController");
const userController = require("../../controllers/userController")

// Matches with "/api/stats"
router.post("/stats", (req, res) => {
  console.log("hit server");
  statsController.create(req, res);
}) 
  // .post(statsController.create)
  // .post(userController.createNewUser);

module.exports = router;