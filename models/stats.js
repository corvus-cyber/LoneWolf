const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statsSchema = new Schema({
  weight: { type: Number},
  leanBodyMass: { type: Number},
  token: {type: String},
  date: {type: Date}
});

const Stats = mongoose.model("Stats", statsSchema);

module.exports = Stats;