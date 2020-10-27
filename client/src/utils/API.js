import axios from "axios";

export default {

  // create a new user upon the first Auth0 authentification
  createNewUser: function(user) {
    return axios.post("api/stats", user);
  },

  // Saves new user weight and lean body mass to the database
  saveStats: function(stats) {
    return axios.post("api/stats", stats);
  }
};
