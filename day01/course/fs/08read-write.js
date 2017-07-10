var fs = require("fs");
var fileReadStream = fs.createReadStream("text.txt");
var fileWriteStream = fs.createWriteStream("text333.txt");

//读取到文件信息并且立即写入
fileReadStream.on("data",function(msg){
	fileWriteStream.write(msg)
});
fileReadStream.on("error",function(err){
	console.log(err)
});
fileReadStream.on("end",function(){
	console.log("over")
});