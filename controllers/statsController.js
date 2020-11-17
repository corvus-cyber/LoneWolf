const db = require("../models");

module.exports = {  
    getWeightStats: function(req, res){
      db.Stats
      .find({token: req.query.token})
      .sort({ date: 1 })
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