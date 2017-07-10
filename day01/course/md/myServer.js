//定义接口
var MyServer = {
	server:function(req,res){
		res.setHeader("Access-Control-Allow-Origin","*");
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write("<h1>hello world111111111111</h1>");
		res.end();
	}
}
//暴露接口
module.exports = MyServer;