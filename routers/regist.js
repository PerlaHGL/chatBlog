var express = require('express');
var bodyParser = require('body-parser');
var crypto = require('crypto');
var fs = require("fs");
var multer = require('multer');
var router = express.Router();

var islogin = require('./loginstatus').islogin;
/*
 数据库引用
*/
var userSchema = require('../schema/userSchema.js');

/*
 图片上传存储
*/
var storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, "./public/img");
	},
	filename: function(req, file, cb){	// 设定上传图片以上传时间命名
		var finalStyle = file.originalname.split(".").slice(-1);
		console.log(finalStyle);
		cb(null, Date.now() + "." + finalStyle);
	}
});

// 图片格式上传
function fileFilter(req, file, cb){
	if(!file.originalname.match(/\.(jpg|png|gif)$/)){	// 判断上传格式
		return cb(new Error("只能上传jpg|png|gif格式的图片"), false);
	}
	cb(null, true);
}
var upload = multer({storage: storage, fileFilter: fileFilter});


router.get('/', function(req, res ,next){
	res.render('regist');
})

// 添加用户
router.post('/', upload.single(""), function(req, res, next){
	var pic = "defalut.jpg";
	var name = req.body.userName;
	var pwd = crypto.createHmac('sha256', req.body.pwd).update("key").digest("hex");	// 加密密
	var pwd2 = crypto.createHmac('sha256', req.body.pwd2).update("key").digest("hex");
	var phone = req.body.phone;
	var sex = req.body.sex;
	var date = Date.now();
	if(pwd2 === pwd){
		var user = new userSchema({
			name: name,
			phone: phone,
			pwd: pwd,
			sex: sex,
			picture: pic,
			date: date
		});
		user.save(function(err, result){
			if(err){
				console.log('注册失败！');
			}
			console.log('注册成功');
		});
		// console.log(pwd);
		// res.send("注册成功");
		res.redirect('/login');
		}
		else{
			res.send('两次密码不一致！');
		}
});


// 修改用户信息
router.get("/usermodify/:id", islogin, function(req, res, next){
	var uid = req.params.id;
	userSchema.find({_id: uid}).exec(function(err, result){
		if(err){
			res.send('用户信息获取失败！');
		}
		res.render('usermodify',{'list': result});
	})
});

// 更新图片
router.post("/upimg", upload.single("file_img"), islogin, function(req, res, next){
	var id = req.body.id;
	var pic = req.file.filename;
	// 删除图片
	// userSchema.find({_id: id}).exec(function(err, result){
	// 	if(err){
	// 		res.send("数据获取失败！");
	// 	}
	// 	console.log(result[0].picture)

	// 	if(result[0].picture !== "defalut.jpg"){
	// 		var imgPath = "./../public/img/" + result[0].picture; 	// 路径使用当前文件的相对路径
	// 		console.log(imgPath,__filename);
	// 		fs.unlink(imgPath,function(err){
	// 			if(err){
	// 				res.send(err);
	// 				console.log("图片删除失败！");
	// 			}
	// 			console.log("图片删除成功！");
	// 		});
	// 		}
	// }); 

	 // 更新图片
	userSchema.update({_id: id},{$set: {picture: pic}}, function(err, result){
		if (err) {
			res.send("图片更改失败！");
			console.log(err);
		}
		console.log(pic);
		res.send("图片更改成功！");
	});
});

// 更新用户信息
router.post('/usermodify',upload.single(""), islogin,function(req, res, next){
		var user = req.body;
		console.log(user)
	userSchema.update({_id:user.id},{$set: user},function(err,result){
		if(err){
			res.send('修改失败');
			console.log(err);
			return;
		}
		res.redirect('../myblog');

	});

});

module.exports = router;