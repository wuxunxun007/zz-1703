var express = require('express');
var router = express.Router();
var url = require("url");
var MongoClient = require("mongodb").MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/movies';

var MyData = require("./../md/MyData.js");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/register', function(req, res, next) {
//res.send("注册成功")
	//接收到前端所提交的数据
//	console.log(url.parse(req.url,true).query);
	var userObj = url.parse(req.url,true).query;
	var user = [{"username":userObj.username,"pwd":userObj.pwd}];
	MongoClient.connect(DB_CONN_STR,(err,db) => {
		if(err){
			console.log(err)
		}else{
			console.log("数据库连接成功");
			MyData.selectData(db,"user",{"username":userObj.username},{"_id":0},function(result){
				console.log(result);
				if(result.length == 0){
					console.log(userObj)
					//注册成功-----往数据库添加数据
					MyData.insertData(db,"user",user,function(err){
						if(err){
							console.log(err);
						}else{
							console.log("ok")
						
						}
					})
					res.send("1");
					
					
				}else{
					//表示用户名重名     0 就表示用户名重名
						console.log("用户名重名")
					res.send("0")
				}
			})
		}
	})
	
//	res.send("注册成功");
});
module.exports = router;
