var http = require("http");

http.createServer((req,res) => {
	
	//不会打印在浏览器端控制台，注意这里是后台程序，会打印在dos命令窗口
//	console.log(req.url)
	//过滤请求
	if(req.url !== "/favicon.ico"){
		
//		console.log(req.url)

		//去掉斜杠
		var pathname = req.url.replace(/\//,"");
		console.log(pathname)		
		res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
		switch (pathname){
			case "login":
				res.write("登录");
				break;
			case "register":
				res.write("注册");
				break;
			case "kind":
				res.write("分类");
				break;
			default:
				break;
		}
//		res.write("hello route");
		
		res.end();
	}
	
	
}).listen(3000);

console.log("your server is Running at http://localhost:3000")
