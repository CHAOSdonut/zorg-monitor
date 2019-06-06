let express = require('express');
let router = express.Router();
let data = require("../database/mongodb");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/data', function(req, res) {
    data.find({}, function(err, docs) {
        res.render('data', { title: 'Data', str: docs});
    });
});

module.exports = router;
