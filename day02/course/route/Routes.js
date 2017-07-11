var fs = require("fs");
var Tool = require("./Tool.js");
module.exports = {
	"index":function(res){
//		res.write("首页");
		//读取文件
//		fs.readFile("./views/index.html","utf-8",(err,data) => {
//			if(err){
//				console.log(err)
//			}else{
//				res.write(data);
//				res.end();
//			}
//		})
		Tool.readHtml(res,"./views/index.html");
	},
	"login":function(res){
//		res.write("登录");
//		res.end();
		Tool.readHtml(res,"./views/login.html");
	},
	"register":function(res){
//		res.write("注册");
//		res.end();
		Tool.readHtml(res,"./views/register.html");
	},
	"kind":function(res){
		res.write("分类");
		res.end();
	},
	"other":function(res){
		res.write("404");
		res.end();
	}
}










