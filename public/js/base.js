var eg = {};

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

		// 检验密码
		oF.pwd.onblur = checkPwd;
		oF.pwd.onfocus = function(){
			var tipMsg = "<span style='color: #999;'>请输入密码</span>";
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

eg.getArticles = function(){
	$('.blog-content>.text-left').on('click', function(){  // 点击获取当前博文数据
            var id = $(this).parent().find('.article_id').val();
            location.href = "showarticle/" + id;   // 跳转到指定页面
    });

}
eg.getDelArticle = function(){
	 $('a.comt-del').on('click', function(){		// 删除当前
        	var aid = $(this).parent().siblings('.article_id').val();
          console.log(aid);
          var flag = confirm('确认删除？');
          if(flag){
                	location.href = '/addarticle/delarticle/' + aid; 	// 删除该博文
                }
              });

        // 显示当前用户的删除操作
      function showUD(){
        var author = document.querySelectorAll('.author .author-name');
        $.ajax({
         url: '/addarticle/showUD/',
         dataType: 'json',
         success: function(data){
          console.log(data);
          $.each(author,function(i){
           if(author[i].innerText === data[0].author){  // 判断文章作者是否为当前登录用户
            $('.article-more-do').eq(i).show();
            console.log('sh')
          }
        })
        }
      })
      }
      showUD();
};