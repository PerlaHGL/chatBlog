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

// 判断用户是否登录
router.get('/', islogin,  function(req, res, next){
	if(islogin){
		res.render('addarticle');
	}else{
		res.send('请登录');
	}
});

// 文章添加
router.post('/', islogin, function(req, res, next){
	var id = req.cookies.id;
	userSchema.find({_id:id},{name: 1}).exec(function(err, result){
		if(err){
			console.log(err);
		}
		var title = req.body.title;
		var author = result[0].name;
		var content = req.body.content;
		var oDate = new Date();
	    var sDate = oDate.getFullYear()+ "-" + (oDate.getMonth() + 1) + "-" + oDate.getDate() + '  ' + oDate.getHours() + ':' + oDate.getMinutes() + ':' + oDate.getSeconds();
		var article = new articleSchema({
			author: author,
			title: title,
			content: content,
			date: sDate,
			look: 0,
			count: 0,
			users: id
		});
		article.save(function(err, result){
			if(err){
				console.log(err);
				res.send('文章添加失败！');
			}
			console.log('文章添加成功！');
			res.redirect('/');
		});
	});
});

/*
json返回当前登录用户
*/
	router.get('/showUD', islogin, function(req, res, next){
		var uid = req.cookies.id;
		articleSchema.find({users: uid}).populate({path: 'users'}).exec(function(err, result){
			res.json(result);
		});
	});

	// /*
	// 删除文章
	// */
	router.get('/delarticle/:id', function(req, res){
		var aid = req.params.id;
		var uid = req.cookies.id;
		console.log(aid)
		commentSchema.remove({articleid:aid},function(err, result){		// 删除文章时，先删除该文章的相关评论
			console.log('评论清空');
		});
		articleSchema.remove({_id: aid}, function(err, result){		// 删除文章
			if(err){
				res.send("删除失败！");
				console.log("删除失败！");
			}
			console.log("删除成功！");
			res.redirect('/');
		});
	});



module.exports = router;