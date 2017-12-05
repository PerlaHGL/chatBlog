var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/chatblog");
var db = mongoose.connection;

db.on("connected",function(){
	console.log("数据已经连接...");
})

db.on("disconnect",function(){
	console.log("数据已关闭...");
})


// 导出文件
module.exports = mongoose;