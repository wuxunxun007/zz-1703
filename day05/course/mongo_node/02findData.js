/**
 * 查询数据
 */
//创建客户端
var MongoClient = require("mongodb").MongoClient;
//连接数据库的配置参数
var DB_CONN_STR = 'mongodb://localhost:27017/movies';

//查询数据
//var selectData = function(db,collectionName,selectStr1,selectStr2,callback){
//	var collection = db.collection(collectionName);
////	var selectStr = {"name":"美食"};
//	var selectStr1 = selectStr1;
//	var selectStr2 = selectStr2;
//	collection.find(selectStr1,selectStr2).toArray((err,result) => {
//		if(err){
//  		console.log(err);
//  	}else{
//  		callback(result)
//  	}
//	})
//}
var MyData = require("./MyData.js");

//连接数据库
MongoClient.connect(DB_CONN_STR,(err,db) => {
	if(err){
		console.log(err)
	}else{
		console.log("数据库连接成功")
		MyData.selectData(db,"list",{"name":"美食"},{"_id":0,"name":1},function(result){
			console.log(result);
			db.close();
		})
		MyData.selectData(db,"list",{"business_flag":1},{"_id":0,"name":1,"business_flag":1},function(result){
			console.log(result);
			db.close();
		})
	}
})
