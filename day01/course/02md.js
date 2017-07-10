var http = require("http");
//引入模块
var MyServer = require("./md/myServer.js");
http.createServer(function(req,res){
	MyServer.server(req,res);
}).listen(8000);


console.log("your server is running at http://localhost:8000")