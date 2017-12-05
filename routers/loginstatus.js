/*
 定义登录状态中间件
*/
module.exports = {
	 islogin: function(req, res, next){
		if(req.cookies.islogin){
			req.session.islogin = req.cookies.islogin;
		}
		if(req.session.islogin){
			res.locals.islogin = req.session.islogin;
		}
		// if(!req.cookies.islogin && req.session.islogin){
		// 	res.redirect('login');
		// }
		next();
	}
}