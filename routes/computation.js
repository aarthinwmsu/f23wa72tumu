var express = require('express');
var router = express.Router();
var rand = Math.random();
var imul = Math.imul(rand);
var log = Math.log(rand);
var log10 = Math.log10(rand);
/* GET home page. */
router.get('/', function(req, res, next) {
  var x = req.query.x;
  if(x!=null){
    rand=x;
  }
  res.render('computation', { title: `Function imul applied to ${rand} is ${imul}, Function log applied to ${rand} is ${log}, Function log10 applied to ${rand} is ${log10}` });
});

module.exports = router;
