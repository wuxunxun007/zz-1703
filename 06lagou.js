var https = require("https");

var url = "https://www.lagou.com/";

var cheerio = require("cheerio");

function filter(htmlStr){
	//定义一个变量$ --- 拿到页面所有的dom结构
	var $ = cheerio.load(htmlStr);
	var menu_box = $(".menu_box");
	var data = [];
//	console.log(menu_box)
	menu_box.each(function(index,value){
		var h2 = $(value).find("h2").text();
//		console.log(h2)
		data.push(h2)
	})
	return data;
}



/*
 *https.get(options, callback)
 * 参数 options 可以是一个对象或是一个字符串。 如果参数 options 是一个字符串, 它自动被 url.parse() 所解析
 * */
https.get(url,function(res){
	var htmlStr = "";
	//有可接收的数据的时候执行
	res.on("data",function(str){
		htmlStr += str;
	})
	//数据接受完毕时候执行
	res.on("end",function(){
//		console.log(htmlStr);
		console.log(filter(htmlStr))
	})
	//接受数据错误
	res.on("error",function(err){
		console.log(err)
	})
})

