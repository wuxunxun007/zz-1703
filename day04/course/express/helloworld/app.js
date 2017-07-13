//引入express
//var express = require("express");
//生成实例
//var app = express();
var app = require("express")();
//设定路由
app.get("/",(req,res) => {
	res.send("hello world");
})
app.get("/login",(req,res) => {
	res.send("登录");
})
app.get("/register",(req,res) => {
	res.send("注册");
})
//监听端口
app.listen(3000,() => {
	console.log("your server is running at http://localhost:3000");
})
