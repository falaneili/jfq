//2016
/*发布评论JS*/
$(function(){

	$('#messageFormBtn').bind('click', message);

})

function message(){
	var name = $('#name');
	var msg = $('#msg');
	if(name.val() == ''){
		alert('姓名不能为空！！');
		name.focus();
		return false;
	}
	if(msg.val() == ''){
		alert('内容不能为空！！');
		msg.focus();
		return false;
	}
	return false;
}


/*登录界面JS*/
$(function(){

	$('#btn-login').bind('click', login);

})

function login(){
	var loginname = $('#loginname');
	var password = $('#password');
	if(loginname.val() == ''){
		alert('用户名不能为空！！');
		loginname.focus();
		return false;
	}
	if(password.val() == ''){
		alert('密码不能为空！！');
		password.focus();
		return false;
	}
	return false;
}

/*注册界面JS*/
$(function(){

	$('#btn-enroll').bind('click', enroll);

})

function enroll(){
	var enrollname = $('#enrollname');
	var pwd1 = $('#pwd1');
	var pwd2 = $('#pwd2');
	if(enrollname.val() == ''){
		alert('用户名不能为空！！');
		enrollname.focus();
		return false;
	}
	if(pwd1.val() == ''){
		alert('密码不能为空！！');
		pwd1.focus();
		return false;
	}
	if(pwd2.val() == ''){
		alert('确认密码不能为空！！');
		pwd2.focus();
		return false;
	}
	if(pwd1.val()!== pwd2.val()){
		alert('两次密码输入不一致！！');
		pwd2.val("").focus(); // 清空并获得焦点
		return false;
	}
	return false;
}