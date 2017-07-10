var fs = require("fs");
fs.rename("test.txt","test111.txt",(err)=>{
	if(err){
		console.log(err)
	}else{
		console.log("ok")
	}
})
