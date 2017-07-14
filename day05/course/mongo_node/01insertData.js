/**
 * 插入数据
 */
//创建客户端
var MongoClient = require("mongodb").MongoClient;
//连接数据库的配置参数
var DB_CONN_STR = 'mongodb://localhost:27017/movies';

//插入数据
//var insertData = function(db,collectionName,data,callback){
//	var collection = db.collection(collectionName);
//  collection.insertMany(data,(err,result) => {
//  	if(err){
//  		console.log(err);
//  	}else{
//  		callback(result)
//  	}
//  })
//}
var MyData = require("./MyData.js");

//连接数据库
MongoClient.connect(DB_CONN_STR,(err,db) => {
	if(err){
		console.log(err)
	}else{
		console.log("数据库连接成功")
		var data = [{
                "business_flag":1,
                "image_hash":"b7ed1890cf73ae6f2adb97caa39de7fcjpeg",
                "name":"美食3",
           },{
                "business_flag":7,
                "image_hash":"8a578332f1f7ff14afbb97b4f125911cjpeg",
                "name":"下午茶2",
            }];
		//插入数据
		MyData.insertData(db,"list",data,function(result){
			console.log(result);
			
			db.close();
		});
		MyData.insertData(db,"movie",data,function(result){
			console.log(result);
			
			db.close();
	}
})
