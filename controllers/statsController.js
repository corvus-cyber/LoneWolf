const db = require("../models");

module.exports = {  
    findWeightStats: function(req, res){
      db.Stats
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
      db.Stats
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };