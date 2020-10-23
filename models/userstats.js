const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statsSchema = new Schema({
  weight: { type: Number},
  leanBodyMass: { type: Number},
});

const Stats = mongoose.model("Stats", statsSchema);

module.exports = Stats;