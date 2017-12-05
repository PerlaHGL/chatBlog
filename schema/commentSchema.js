var mongoose = require("./db.js");
var commentSchema = mongoose.Schema;


// 评论模块
var commentSchema = new commentSchema({
    users: {type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    articleid: {type: mongoose.Schema.Types.ObjectId, ref: 'article' },
    name: {type : String, defalut : '匿名用户'},
	content: {type : String},
	date: {type : String, defalut: Date.now},
});

module.exports = mongoose.model('comment', commentSchema);