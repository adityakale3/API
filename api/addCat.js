const express = require('express');
const router = express.Router();
const player = require('../model/player');

router.get('/', (req,res) => {
    player.find({}).exec((err,data) => {
        if(err) throw err;
        res.send(data);
    });
});


router.post('/', (req,res) => {
    res.send('Post Method Working');
});

router.put('/', (req,res) => {
    res.send('PUT Method Working');
});

module.exports = router;