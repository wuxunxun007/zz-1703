var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/movies';

var MyData = require("./../md/MyData.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//接口获取饿了么数据
router.get('/getEleList', function(req, res, next) {
	MongoClient.connect(DB_CONN_STR,(err,db) => {
		if(err){
			console.log(err);
		}else{
			console.log("数据库链接成功");
			MyData.selectData(db,"list",{},{"_id":0,"name":1},function(result){
				console.log(result)
				res.send(result);
				db.close();
			})
		}
	})
//res.send("1111")
});
router.get('/getList', function(req, res, next) {
	MongoClient.connect(DB_CONN_STR,(err,db) => {
		if(err){
			console.log(err);
		}else{
			console.log("数据库链接成功");
			
			
			MyData.selectData(db,"list",{},{"_id":0,"name":1},function(result){
				console.log(result)
//				res.send(result);
				res.render('index', {title:"前后端一起做", data: result });
				db.close();
			})
		}
	})
//res.send("1111")
});
module.exports = router;
