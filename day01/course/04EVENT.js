/**
 * 导入events事件模块  ---  观察者模式    ----  socket通讯
 * 接受事件   obj.on("eventName",(msg) => {
 * 	cosnole.log(msg)
 * 
 * })
 * 广播事件，传递参数
 * 	obj.emit("eventName",params)
 */
var EventEmitter = require("events");

class Player extends EventEmitter{
	
}

var player = new Player();
//player.on("test",function(msg){
//	console.log(msg)
//});
player.once("test",function(msg){
	console.log(msg)
});
player.emit("test","广播了一个事件，有人监听，会打印此信息")
player.emit("test","成功打印了此信息")