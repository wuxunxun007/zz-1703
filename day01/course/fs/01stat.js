var fs = require("fs");
//查看状态  stat
fs.stat("./../note.txt",(err,data)=>{
	if(err){
		console.log(err);
	}else{
		console.log("note.txt是一个文件：" + data.isFile());
		console.log("note.txt是一个目录：" + data.isDirectory());
	}
})
fs.stat("./../md",(err,data)=>{
	if(err){
		console.log(err);
	}else{
		console.log("md是一个文件：" + data.isFile());
		console.log("md是一个目录：" + data.isDirectory());
	}
})