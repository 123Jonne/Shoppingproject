angular.module('app')
.factory('utils',['$ionicPopup',function($ionicPopup){
	var u={
		tips: {
			showTips:function(msg,scope){
		        var tips=$ionicPopup.show({
				template:'<div style="text-align:content;">'+msg+'<div>',
				title:'提示消息',
				scope:scope,
				buttons:[
				{
					text:'确认',
					type:'button-assertive',
					onTap:function(){
                        tips.close();
					}

				}

				]
			});}
	
		},

		validForm:{
			//验证不为空
			isNotEmpty:function(msg){

				return msg==''||msg==undefined ?false :true;

			},
				//验证手机号码
				isPhone: function (phone) {
					var reg = /^1[358]\d{9}$/;
					return reg.test(phone);
				},

				//验证长度
				isLength: function (msg, min, max) {
					return msg.length >= min && msg.length <= max ? true : false;
				},

				//只能是下划线数字字母
				isNotOnlyW: function (msg) {
					return /\W/.test(msg);
				},

				//验证两值相等
				isEqual: function (a, b) {
					return a === b ? true : false;
				}

		}

		
	};
	return u;
}])