var fs = require("fs");
module.exports = {
	readHtml:function(res,urlStr){
//		console.log("readHTml")
		fs.readFile(urlStr,"utf-8",(err,data) => {
			if(err){
				console.log(err)
			}else{
//				console.log(data)
				res.write(data);
				res.end();
			}
		})
	}
}
