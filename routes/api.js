var express = require('express');
var router = express.Router();

/* GET hello listing. */
router.get('/hello', function(req, res, next) {
    res.send('hello everyone');
});

module.exports = router;
