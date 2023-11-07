var express = require('express');
var router = express.Router();
var gamesRouter = require('./games');
var studioRouter = require('./studio');

/* GET users listing. */
router.use('/games', gamesRouter);
router.use('/studio', studioRouter);

module.exports = router;
