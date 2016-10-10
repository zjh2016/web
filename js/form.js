function check(){
		var tel=document.getElementById("telephone");
		var psd1=document.getElementById("psd1");
		var psd2=document.getElementById("psd2");
		var name=document.getElementById("name");
		var mail=document.getElementById("email");
		var buttons=document.getElementById("submit");
		buttons.onclick=function(){
			if(tel.value.match(/\D/)!=null||tel.value.length!=11){
				alert("请输入正确的电话号码");
				tel.value="";
			}
			if(psd1.value.length<6){
				alert('请输入6位以上数字或字母的密码');
				psd1.value="";
			}
			else if(psd1.value!=psd2.value){
				alert("密码不一致！");
				psd1.value="";
				psd2.value="";
			}
			else if(psd1.value.match(/^[a-zA-Z0-9]+$/)==null){
				alert('密码只能长度为6的大小写字母或数字组合');
				psd1.value="";
			}
			var nameReg= /^[A-Za-z u4E00-u9FA5]+$/;
			if(name.value.match(nameReg)==null){
				alert("请输入正确的姓名");
				name.value="";
			}	
			var reg=/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
			var mailVal=mail.value;
			if(mailVal.match(reg)==null){
				alert("E-mail格式不正确");
				mailVal="";
			}
			else return;
		}
	}

window.onload=function(){
	check();
//	maps();
//  on_service();
//  nav();
};