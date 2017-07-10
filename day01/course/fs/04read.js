var fs = require("fs");
/**
 * 读取文件，2中方式
 * 	fs.readFile("text.txt",callback),callback中需要把结果转换为string
 * 	fs.readFile("text.txt","utf-8",callback),直接打印结果即可
 */
//fs.readFile("text.txt",function(err,data){
//	if(err){
//		console.log(err)
//	}else{
//		console.log(data.toString())
//	}
//})

fs.readFile("text.txt","utf-8",function(err,data){
	if(err){
		console.log(err)
	}else{
		console.log(data)
	}
})

