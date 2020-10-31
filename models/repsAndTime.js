const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const repsAndTimeSchema = new Schema({
  token: {type: String},
  date: {type: Date},
  sets: { type: Number},
  reps: { type: Number},
  time: {type: Number},
  muscleGroup: {type: String}
});

const RepsAndTime = mongoose.model("RepsAndTime", repsAndTimeSchema);

module.exports = RepsAndTime;