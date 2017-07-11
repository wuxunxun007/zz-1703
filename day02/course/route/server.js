var http = require("http");
var url = require("url");
var Routes = require("./Routes.js");
http.createServer((req,res) => {
	
	//不会打印在浏览器端控制台，注意这里是后台程序，会打印在dos命令窗口
//	console.log(req.url)
	//过滤请求
	if(req.url !== "/favicon.ico"){
		
//		console.log(req.url)

		//去掉斜杠
		var pathname = url.parse(req.url).pathname.replace(/\//,"");
		console.log(pathname)		
		res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
//		switch (pathname){
//			case "login":
//				Routes.login(res)
//				break;
//			case "register":
//				Routes.register(res)
//				break;
//			case "kind":
//				Routes.kind(res)
//				break;
//			default:
//				break;
//		}
		
		//此处会有一个异常，如果用户操作时，地址栏中输入的地址在Routes文件中没有设定，那么我们需要指定一个页面
//		Routes[pathname](res);
		try{
			//条件成立，也就是路由中定义了pathname时
			Routes[pathname](req,res);
		}catch(e){
			//没有条件满足时进行操作，路由中没有定义pathname时
			Routes["other"](req,res);
		}
		
//		res.write("hello route");
		
//		res.end();
	}
	
	
}).listen(3000);

console.log("your server is Running at http://localhost:3000")
