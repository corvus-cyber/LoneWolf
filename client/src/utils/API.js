import axios from "axios";

export default {

  // Saves new user weight and lean body mass to the database
  saveStats: function(stats) {
    return axios.post("/api/stats", stats);
  }
};
