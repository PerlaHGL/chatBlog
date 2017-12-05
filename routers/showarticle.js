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
var commentSchema = require('../schema/commentSchema.js');

/*
获取当前的文章
*/
router.get('/:id', islogin, function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	var id = req.params.id;
	console.log(id);
	articleSchema.find({_id: id}).populate({path: 'users'}).exec(function(err, result){	 // 查询当前请求文章
		if(err){
			console.log('数据错误！');
		}
		count = result[0].look + 1;
		articleSchema.update({_id: id},{$set: {look: count}}, function(err){	// 每次请求增加一次浏览数
			if(err){
				console.log('浏览数更新失败！');
			}
		});
		res.render('showarticle',{'list': result});		// 返回当前文章
	});
});
/*
评论添加
*/
router.post('/addcomment', islogin, function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	var id = req.cookies.id;
	var comt = req.body;
	userSchema.find({_id: id},{name: 1}).exec(function(err, result){
		if(err){
			console.log(err);
		}
		var cont = req.body.cont;
		var aid = req.body.aid;
		var oDate = new Date();
		var sDate = oDate.getFullYear()+ "-" + (oDate.getMonth() + 1) + "-" + oDate.getDate() + '  ' + oDate.getHours() + ':' + oDate.getMinutes() + ':' + oDate.getSeconds();
		var name = result[0].name;
		var comment = new commentSchema({
			users: id,
			name: name,
			content: cont,
			date: sDate,
			articleid: aid
		});
			comment.save(function(err, result){
			if(err){
				console.log('评论不能为空！');
			}
			console.log('评论成功！');
			res.send('ok');
		});
	});
});

/*
获取评论内容
*/
router.get('/getcommet/:id', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
	var aid = req.params.id;
	commentSchema.find({articleid: aid}).populate({path: 'articleid'}).populate({path: 'users'}).sort({'_id':-1}).exec(function(err, result){	// 集合关联取值并降序
		if(err){
			console.log('数据错误！');
		}
		res.jsonp({'comt': result});
		// console.log(result)
	});
});

/*
获取评论数
*/
router.get('/getimg/:id', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
	var id = req.params.id;
	commentSchema.count({articleid: id}).exec(function(err, result){
		if(err){
			console.log('数据获取失败');
		}
		articleSchema.update({_id: id},{$set: {count: result}}, function(err){	//更新文章中的评论数
			if(err){
				console.log('评论数更新失败！');
			}
		});
		res.jsonp(result);
	});
});

/*
获取文章发表数
*/

router.get('/getarticlecount/:id', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
	var id = req.params.id;
	articleSchema.find({_id: id},{author: 1}).exec(function(err, result){
		if(err){
			console.log(err);
		}
		console.log(result)
		articleSchema.count({author: result[0].author}).exec(function(err, result){
			if(err){
				console.log(err);
			}
			console.log(result)
			res.jsonp(result);
		});
	})
	
});


module.exports = router;