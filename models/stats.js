const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statsSchema = new Schema({
  weight: { type: String},
  leanBodyMass: { type: String},
  token: {type: String},
  date: {type: String}
});

const Stats = mongoose.model("Stats", statsSchema);

module.exports = Stats;