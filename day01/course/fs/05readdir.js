var fs = require("fs");
fs.readdir("./",function(err,data){
	if(err){
		console.log(err)
	}else{
		console.log(data)
	}
})
