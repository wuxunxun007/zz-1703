/**
 * 协议、域名、端口
 * 1、引入http模块，属于原生模块（只要你安装了node，就会带有的模块）,require-----协议确定
 * 2、创建服务器，确定端口
 * 		http.createServer()   ---创建服务器
 * 		http.createServer().listen(8000) -----  端口
 * 3、创建服务器里内容
 * 		
 * http.createServer(function(req,res){
 * 	res.writeHead(200, {'Content-Type': 'text/plain'});
 * res.write("hello world");
 * res.end();
 * }).listen(8000)
 * 4、给用户提示信息
 */

//1、http/https/fs
var http = require("http");
//var test = [1,2,3,4,5,6,7];
http.createServer(function(req,res){
	//主要使用res，可以给页面返回基本额信息
	//设置跨域白名单
	res.setHeader("Access-Control-Allow-Origin","*");
	//1、设置一些头信息
	//Content-Type:内容的类型（text/plain---文本---innerText------/--- text/html---解析html---- innerHTML）
	res.writeHead(200, {'Content-Type': 'text/html'});
	//2、给页面返回信息
	res.write("<h1>hello world</h1>");
//	res.write(JSON.stringify(test));
	//结束
	res.end();
}).listen(8000);


console.log("your server is running at http://localhost:8000");