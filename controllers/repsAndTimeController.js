const db = require("../models");

module.exports = {  
    getRepsAndTimeStats: function(req, res){
      db.RepsAndTime
      .find({})
      .sort({ date: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
      db.RepsAndTime
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
        console.log(req.body)
    }
  };