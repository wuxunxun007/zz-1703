/**
 * 参考链接  ---- ele的协议为https,所以采用https模块
 * 	http://nodejs.cn/api/https.html#https_https_request_options_callback
 * 
 * 1、引入https模块
 * https.request(options[, callback])
 * 	options:向一个安全的服务器发起一个请求。
 * 
 * 	
 */

//1
var https = require("https");
var MyServer = require("./MyServer.js");
//2、配置对象
//https://mainsite-restapi.ele.me/shopping/v2/entries?latitude=34.774199&longitude=113.6695957&templates[]=main_template
var options = {
  hostname: 'mainsite-restapi.ele.me',
  port: 443,//如果是https协议均为443，如果为http协议，此值为80
  path: '/shopping/v2/entries?latitude=34.774199&longitude=113.6695957&templates[]=main_template',
  method: 'GET'
};

//3、
var req = https.request(options,function(res){
	//请求成功
//	console.log(res);
	var htmlStr = "";
	//有数据接收到时触发
	res.on("data",function(html){
//		console.log(html.toString())
		htmlStr += html;
	});
	//数据接受完毕
	res.on("end",function(){
		console.log(htmlStr);
		MyServer.server(htmlStr)
	});
	
});
req.on("error",function(err){
	console.log(err);
});
req.end();
