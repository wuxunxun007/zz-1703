var http = require("http");
//引入模块
var MyServer = require("./md/myServer.js");
var str = "<h1>hello world2222</h1>";
http.createServer(function(req,res){
	MyServer.server(req,res,str);
}).listen(8000);


console.log("your server is running at http://localhost:8000")