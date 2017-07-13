var express = require('express');
var router = express.Router();

var arr = [1,2,3,4,5]; 
/* GET home page. */
router.get('/', function(req, res, next) {
//res.render('index.ejs', { title: 'Express',"classid":1703,"course":"<h1>node-express</h1>",data:arr });
res.send("[1,2,3,4,5]")
});

module.exports = router;
