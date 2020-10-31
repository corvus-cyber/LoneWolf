import axios from "axios";

export default {

  // get weight and lean body mass stats
  getWeightStats: function () {
    return axios.get("/api/stats");
  },

  // Saves new user weight and lean body mass to the database
  saveStats: function (stats) {
    return axios.post("api/stats", stats);
  },

  // get reps and time data
  getRepsAndTime: function () {
    return axios.get("/api/repsandtime");
  },

  // Saves reps and time of exercises to the database
  saveRepsAndTime: function (data) {
    return axios.post("api/repsandtime", data);
  }
};
