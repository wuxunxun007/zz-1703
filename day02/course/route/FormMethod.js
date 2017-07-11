var url = require("url");
var querystring = require("querystring");
module.exports = {
	 formGet :function(req){
	 	var str = url.parse(req.url).query;
		//用来获取用户的信息
		var obj = url.parse(req.url,true).query;
		console.log(str)
		if(str != null){
			console.log("用户名为" + obj.userName);
			console.log("密码为" + obj.pwd);
			
			/*
			 * 将数据与数据库中的数据进行匹配，如果成功则返回到首页，如果失败则告知失败原因
			 */
			
		}else{
			console.log("aaaaaaaaaaaaaaaa")
		}
	 },
	 formPost :function(req){
	 	var str = "";
	 	req.on("data",(data) => {
	 		str += data;
	 	})
	 	req.on("end",() => {
//	 		console.log(str)
//	 		console.log(querystring.parse(str))
	 		
	 		if(str == ""){
	 			console.log("bbbbbb")
	 		}else{
	 			var obj = querystring.parse(str);
	 			console.log("用户名为" + obj.userName);
				console.log("密码为" + obj.pwd);
				/*
			 * 将数据与数据库中的数据进行匹配，如果成功则返回到首页，如果失败则告知失败原因
			 */
	 		}
	 	})
	 }
}
