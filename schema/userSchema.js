var mongoose = require("./db.js");
var userSchema = mongoose.Schema;


// 用户
var userSchema = new userSchema({
	name: {type: String, default: '匿名用户'},
	phone: {type : Number},
	pwd: {type : String},
	sex: {type: String, default: '保密'},
	picture: {type : String},
	introduce: {type : String, default: '这家伙很懒，什么都没写！'},
	date: {type : Date, default : Date.now},
});


module.exports = mongoose.model('user', userSchema);

