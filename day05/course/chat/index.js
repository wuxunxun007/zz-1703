var express = require("express");
var app = express();
//express写的服务器的协议为http
var http = require('http').Server(app);

var io = require('socket.io')(http);

app.get('/', function(req, res){
//res.send('<h1>Hello world</h1>');
//console.log(__dirname)
 res.sendFile(__dirname + "/index.html");
});

//有用户进入时触发
io.on("connection",(socket) => {
	//此处的socket代表的是每一个用户
	console.log("有用户进来啦");
	socket.broadcast.emit('hi');//只要你来，我就对你说：hi
	socket.on("chat_1703",(msg) => {
		console.log(msg);
		//广播給所有的用户
		io.emit('chat_1703', msg);
		
	})
	socket.on('disconnect', function(){
	    console.log('你怎么舍得我难过');
	    io.emit('chat_1703', "你怎么舍得我难过");
	  });
	
	
})


//http监听的端口号
http.listen(8000,() => {
	var str = "your server is running at :"
	var host = "http://localhost:8000"
	//es6 字符串模板
		/**
		 * 将变量使用${str}
		 * ``符号
		 */
	console.log(`${str} ${host}`)
})
