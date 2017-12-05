var express = require('express');
var bodyParser = require('body-parser');
var crypto = require('crypto');

var router = express.Router();
router.use(bodyParser.urlencoded({ extended:true}));
var islogin = require('./loginstatus').islogin;
/*
 数据库引用
*/
var userSchema = require('../schema/userSchema.js');
var articleSchema = require('../schema/articleSchema.js');
var commentSchema = require('../schema/commentSchema.js');

router.get('/', function(req, res ,next){
	res.render('login');
})

// 用户登录
router.post('/', function(req, res){
	var name = req.body.userName;
	var pwd = crypto.createHmac('sha256', req.body.pwd).update("key").digest("hex");
	if(name && pwd){	// 判断输入是否为空
		userSchema.find({name:name},{name: 1, _id: 1, pwd: 1}).exec(function(err, result){
			if(err){
				console.log(err);
				res.render('fail');
			}
			if(result[0].name === name && result[0].pwd === pwd){	// 判断当前输入用户与账号是否存在
				req.session.islogin = name;	// 记录当前登录状态
				res.locals.islogin = req.session.islogin;
				res.cookie('islogin', name, {maxAge: (1000 * 60), httpOnly: true});
				res.cookie('id', result[0]._id, {maxAge: (1000 * 60 * 60 * 24 * 7)});
				res.redirect('../');
			}
		});
	}
});


module.exports = router;