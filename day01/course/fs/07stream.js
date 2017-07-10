var fs = require("fs");
var fileReadStream = fs.createReadStream("text.txt");
var fileWriteStream = fs.createWriteStream("text2222.txt");
//流的操作  pipe 思想
fileReadStream.pipe(fileWriteStream);
