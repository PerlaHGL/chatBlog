var eg = {};
// 检验注册输入
eg.checkReg = function(){
	var oF = document.forms[0];
	oF.onsubmit = function(){
			var userName = checkName();
			var checkPwd = checkPwd();
			var cPwd = confirmPwd();
			var phone = checkPhone();
			return userName && checkPwd && cPwd && phone;
		};
		// 检查用户名输入
		oF.userName.onblur = checkName;
		oF.userName.onfocus = function(){
			// var tipMsg = "<span style='color: #999;'>请输入6-18位数字、字母、常用字符</span>";
			var tipMsg = "<span style='color: #999;'>输入3-16位中文、字母、数字、下划线组成的用户名</span>";
			$(this).parent().next().html(tipMsg);
		};

		function checkName(){
			var reg = /^[a-zA-Z\u4e00-\u9fa5][a-zA-Z0-9\u4e00-\u9fa5]{3,16}$/;
			if(oF.userName.value !== ""){
				if(reg.test(oF.userName.value)){
					var tipMsg = "<span style='color: green;' class='glyphicon glyphicon-ok'></span>"
					$(this).parent().next().html(tipMsg);
					return true;
				}else{
					var tipMsg = "<span style='color: red;'>输入3-16位中文、字母、数字、下划线组成的用户名</span>";
					$(this).parent().next().html(tipMsg);
					return false;
				}
			}else{
				var tipMsg = "<span style='color: red;'>请输入用户名</span>";
					$(this).parent().next().html(tipMsg);
				return false;
			}
		}
		// 检验密码
		oF.pwd.onblur = checkPwd;
		oF.pwd.onfocus = function(){
			var tipMsg = "<span style='color: #999;'>请输入6-18位数字、英文(区分大小写)</span>";
			$(this).parent().next().html(tipMsg);
		};
		function checkPwd(){
			var reg = /^[a-zA-Z0-9_-]{6,18}$/;
			if(oF.pwd.value !== ""){
				if(reg.test(oF.pwd.value)){
					var tipMsg = "<span style='color: green;' class='glyphicon glyphicon-ok'></span>"
					$(this).parent().next().html(tipMsg);
					return true;
				}else{
					var tipMsg = "<span style='color: red;'>请输入6-18位数字、英文(区分大小写)</span>";
					$(this).parent().next().html(tipMsg);
					return false;
				}
			}else{
				var tipMsg = "<span style='color: red;'>请输入密码</span>";
					$(this).parent().next().html(tipMsg);
				return false;
			}
		}
		//  二次验证密码
		oF.pwd2.onblur = confirmPwd;
		oF.pwd2.onfocus = function(){
			var tipMsg = "<span style='color: #999;'>请输入确认密码</span>";
        	$(this).parent().next().html(tipMsg);
    	};
		function confirmPwd(){
			var reg = new RegExp(oF.pwd.value);
			if(oF.pwd.value || oF.pwd2.value !==""){
				if(reg.test(oF.pwd2.value)){
					var tipMsg = "<span style='color: green;' class='glyphicon glyphicon-ok'></span>"
					$(this).parent().next().html(tipMsg);
					return true;
				}else{
					var tipMsg = "<span style='color: red;'>两次输入的密码不一致</span>";
					$(this).parent().next().html(tipMsg);
					return false;
				}
			}else{
				var tipMsg = "<span style='color: red;'>请输入确认密码！</span>";
					$(this).parent().next().html(tipMsg);
				return false;
			}
		}
		// 校验手机号
		oF.phone.onblur = checkPhone;
		oF.phone.onfocus = function(){
			var tipMsg = "<span style='color: #999;'>请输入手机号</span>";
			$(this).parent().next().html(tipMsg);
		};
		function checkPhone(){
			var reg = /^1[3|4|5|7|8][0-9]{9}$/;
			if(oF.phone.value !== ""){
				if(reg.test(oF.phone.value)){
					var tipMsg = "<span style='color: green;' class='glyphicon glyphicon-ok'></span>"
					$(this).parent().next().html(tipMsg);
					return true;
				}else{
					var tipMsg = "<span style='color: red;'>手机格式输入不正确</span>";
					$(this).parent().next().html(tipMsg);
					return false;
				}
			}else{
				var tipMsg = "<span style='color: red;'>请输入手机号</span>";
					$(this).parent().next().html(tipMsg);
				return false;
			}
		}

};
// 检验登录
eg.checkLogin = function(){
	var oF = document.forms[0];
	oF.onsubmit = function(){
			var userName = checkName();
			var checkPwd = checkPwd();
			return userName && checkPwd;
		};
		// 检查用户名输入
		oF.userName.onblur = checkName;
		oF.userName.onfocus = function(){
			// var tipMsg = "<span style='color: #999;'>请输入6-18位数字、字母、常用字符</span>";
			var tipMsg = "<span style='color: #999;'>请输入用户名</span>";
			$(this).parent().next().html(tipMsg);
		};

		function checkName(){
			var reg = /^([a-z0-9_-]|[\u4E00-\u9FA5\uF900-\uFA2D]){3,16}$/;
			if(oF.userName.value !== ""){
				if(reg.test(oF.userName.value)){
					var tipMsg = "<span style='color: green;' class='glyphicon glyphicon-ok'></span>"
					$(this).parent().next().html(tipMsg);
					return true;
				}else{
					var tipMsg = "<span style='color: red;'>用户名格式输入不正确</span>";
					$(this).parent().next().html(tipMsg);
					return false;
				}
			}else{
				var tipMsg = "<span style='color: red;'>请输入用户名</span>";
					$(this).parent().next().html(tipMsg);
				return false;
			}
		}

		// 失去焦点时检验密码
		oF.pwd.onblur = checkPwd;
		// 当前输入框提示
		oF.pwd.onfocus = function(){
			var tipMsg = "<span style='color: #999;'>请输入密码</span>";
			$(this).parent().next().html(tipMsg);
		};
		// 检验密码
		function checkPwd(){
			var reg = /^[a-zA-Z0-9_-]{6,18}$/;
			if(oF.pwd.value !== ""){
				if(reg.test(oF.pwd.value)){
					var tipMsg = "<span style='color: green;' class='glyphicon glyphicon-ok'></span>"
					$(this).parent().next().html(tipMsg);
					return true;
				}else{
					var tipMsg = "<span style='color: red;'>密码输入不正确</span>";
					$(this).parent().next().html(tipMsg);
					return false;
				}
			}else{
				var tipMsg = "<span style='color: red;'>请输入密码</span>";
					$(this).parent().next().html(tipMsg);
				return false;
			}
		}
};

// 获取文章
eg.getArticles = function(){
	$('.blog-content>.text-left').on('click', function(){  // 点击获取当前博文数据
            var id = $(this).parent().find('.article_id').val();
            location.href = "showarticle/" + id;   // 跳转到指定页面
    });

};
// 确认删除文章
eg.getDelArticle = function(){
	var author = document.querySelectorAll('input[name = aid]');
	 $('a.comt-del').on('click', function(){		// 删除当前
        	var aid = $(this).parent().siblings('.article_id').val();
          console.log(aid);
          var flag = confirm('确认删除？');
          if(flag){
                	location.href = '/addarticle/delarticle/' + aid; 	// 删除该博文
                }
              });
        // 显示当前用户的删除操作
      eg.DelArticle();
};
// 删除文章
eg.DelArticle = function(){
	var author = document.querySelectorAll('.author .author-name');
        $.ajax({	// 获取文章
         url: '/addarticle/showUD/',
         dataType: 'json',
         success: function(data){
          console.log(data);
          $.each(author,function(i){
           if(author[i].innerText === data[0].author){  // 判断文章作者是否为当前登录用户
            $('.article-more-do').eq(i).show();
          }
        })
        }
      })
 };


// 发布评论
eg.getAddComment = function(id){
	if(id){
		$('button[type = submit]').on('click', function(){
            var cont = $('textarea').val();
            $.ajax({
                url: '/showarticle/addcomment',
                dataType: 'json',
                type: 'post',
                data: {aid: id, cont: cont},
                success: function(data){
                    console.log(data);
                }
            });

     });
	}
        
};
// 获取评论内容
eg.getComment = function(id){
	if(id){
		$.ajax({	
        url: '/showarticle/getcommet/' + id,	// 请求评论信息
        dataType: 'jsonp',
        success: function(data){
        $.each(data.comt,function(i){	// 渲染每条数据
            var comtMsg = '<div class="comment-info">' +
                    '<div class="person-img">' +
                    '<img width="40" height="40" src="/img/' + data.comt[i].users.picture + '" class="img-rounded ">' +
                    '</div>' +
                    '<div class="comt-text">' +
                    '<p class="lead"><span class="author">' + data.comt[i].users.name + '</span>：<span class="cont">' + data.comt[i].content+ '</span></p>' +
                    '</div>' +
                    '<div class="wrap-foot text-right">' +
                    '<time>' + data.comt[i].date+ '</time>' +
                    '<a class="comt-del" href="#">删除</a></div>' +
                    '</div>';
                        $('.commnet-content').append(comtMsg);  // 加载评论内容
            });
	         var comtcout = '<span>' + data.comt.length + '</span>';
	         $('.wrap-foot>.count').replaceWith(comtcout);
        }
    });
	}
	
};
// 获取当前作者所发布的总文章数
eg.getArticleCount = function(id){
	if(id){
		$.ajax({
            url: '/showarticle/getarticlecount/'+ id,
            dataType: 'jsonp',
            success: function(data){
                var comtcout = '<span>' + data + '</span>';
                $('.person-list li>span.makeself').replaceWith(comtcout);
            }
        });
	}
}

// 删除评论
// eg.delComment = 
