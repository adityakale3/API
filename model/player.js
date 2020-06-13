const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/player', {useNewUrlParser:true, useUnifiedTopology:true})

var player = mongoose.Schema({
    name: String,
    email: String,
    level: String,
    kills: Number,
    matches: Number,
    profile:String
});

var playerModel = mongoose.model('players', player, 'players');

module.exports = playerModel;