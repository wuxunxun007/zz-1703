var fs = require("fs");
var url = require("url");
var FormMethod = require("./FormMethod.js");
var Tool = require("./Tool.js");
module.exports = {
	"index":function(req,res){
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
	"login":function(req,res){
//		res.write("登录");
//		res.end();
//		console.log(url.parse(req.url,true).query);
//用来测试用户信息是否为空
//		var str = url.parse(req.url).query;
//		//用来获取用户的信息
//		var obj = url.parse(req.url,true).query;
//		console.log(str)
//		if(str != null){
//			console.log("用户名为" + obj.userName);
//			console.log("密码为" + obj.pwd);
//		}else{
//			console.log("aaaaaaaaaaaaaaaa")
//		}
			
		FormMethod.formGet(req);
		Tool.readHtml(res,"./views/login.html");
	},
	"register":function(req,res){
//		res.write("注册");
//		res.end();
		FormMethod.formPost(req);
		Tool.readHtml(res,"./views/register.html");
	},
	"kind":function(req,res){
		res.write("分类");
		res.end();
	},
	"other":function(req,res){
		res.write("404");
		res.end();
	}
}










