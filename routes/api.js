var express = require('express');
var router = express.Router();
var gamesRouter = require('./games');

/* GET users listing. */
router.use('/games', gamesRouter);

module.exports = router;
