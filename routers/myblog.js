var express = require('express');
var bodyParser = require('body-parser');
var crypto = require('crypto');

var router = express.Router();

var islogin = require('./loginstatus').islogin;
/*
 数据库引用
*/
var articleSchema = require('../schema/articleSchema.js');
var userSchema = require('../schema/userSchema.js');
// var commentSchema = require('../schema/commentSchema.js');

// /*
// 获取我的博客
// */
router.get('/', islogin, function(req, res, next){
	var id = req.cookies.id;
	userSchema.find({_id:id}).exec(function(err, user){	 // 通过id 获取当前用户名
		if(err){
			console.log(err);
		}
		articleSchema.find({author: user[0].name}).populate({path: 'users'}).exec(function(err, result){  // 通过当前用户名获取所有博文
			res.render('myblog',{'user': user,'list': result});
			console.log(result,user);
		});
	});
});



module.exports = router;