import axios from "axios";

export default {

  // get weight and lean body mass stats
  getStats: function (token) {
    return axios.get("/api/stats");
  },

  // Saves new user weight and lean body mass to the database
  saveStats: function(stats) {
    return axios.post("api/stats", stats);
  }
};
