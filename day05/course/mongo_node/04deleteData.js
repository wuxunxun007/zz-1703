/**
 * 更新数据
 */
//创建客户端
var MongoClient = require("mongodb").MongoClient;
//连接数据库的配置参数
var DB_CONN_STR = 'mongodb://localhost:27017/movies';

//var deleteData = function(db,callback){
//	var collection = db.collection("user");
//	collection.remove({"username":"1"},function(err,result){
//		if(err){
//			console.log(err);
//		}else{
//			callback(result)
//		}
//	})
//}
var MyData = require("./MyData.js");

MongoClient.connect(DB_CONN_STR,(err,db)=>{
	if(err){
		console.log(err);
	}else{
		console.log("数据库连接成功")
		//更新数据
		MyData.deleteData(db,"user",{"username":"1"},function(result){
			console.log("删除成功");
			db.close();
		})
	}
	
})
