var fs = require("fs");
/**
 * writeFile,appendFile 有则添加，无则创建并且添加
 */
//fs.writeFile("text.txt","第一次写入了内容",(err)=>{
//	if(err){
//		console.log(err)
//	}else{
//		console.log("ok")
//	}
//})
fs.appendFile("test.txt","，第三次写入了内容",(err)=>{
	if(err){
		console.log(err)
	}else{
		console.log("ok")
	}
})