var mongoose = require("./db.js");

var articleSchema = mongoose.Schema;


// 发布博文
var articleSchema = new articleSchema({
    users: {type: mongoose.Schema.Types.ObjectId, ref: 'user' },    // 关联user 表id
	author:{type : String, defalut : '匿名用户'},
    title: {type : String},
    date: {type : String, defalut: Date.now},
    content: {type : String},
    look: {type: Number, defalut : 0},
    count: {type: Number, defalut : 0}
});

module.exports = mongoose.model('article', articleSchema);