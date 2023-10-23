var express = require('express');
var router = express.Router();
var rand = Math.random();
var imul = Math.imul(rand);
var log = Math.log(rand);
var log10 = Math.log10(rand);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', { title: `Function imul applied to ${rand} is ${imul} '\n' Function log applied to ${rand} is ${log} '\n' Function log10 applied to ${rand} is ${log10}` });
});

module.exports = router;
