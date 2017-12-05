var articleSchema = require('../schema/articleSchema.js');
var userSchema = require('../schema/userSchema.js');
var commentSchema = require('../schema/commentSchema.js');

var islogin = require('./loginstatus').islogin;

module.exports =  function(app){

	// 获取首页信息
	app.get('/', islogin, function(req, res, next){	// 获取信息 ,降序显示
		articleSchema.find().populate({path: 'users', select : 'name sex picture introduce'}).sort({'_id':-1}).exec(function(err, result){
			if(err){
				console.log('数据错误！');
			}
			res.render('index',{'list': result});
		});

	});

	// 登录用户
	app.use('/login', require('./login'));
	// 显示文章详情
	app.use('/showarticle',require('./showarticle'));
	// 我的博客中心
	app.use('/myblog',require('./myblog'));
	// 添加文章
	app.use('/addarticle',require('./addarticle'));
	// 注册新用户
	app.use('/regist', require('./regist'));

	// 退出登录
	app.get("/loginout", islogin, function(req, res, next){
		req.cookies.islogin = null;
		req.session.islogin = null;
		res.redirect('/');
	});
}