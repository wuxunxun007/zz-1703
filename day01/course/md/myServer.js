//定义接口
var MyServer = {
	server:function(req,res,str){
		res.setHeader("Access-Control-Allow-Origin","*");
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(str);
		res.end();
	}
}
//暴露接口
module.exports = MyServer;