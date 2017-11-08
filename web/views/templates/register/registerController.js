angular.module('app')
	.controller('registerController', ['$scope', 'utils', 'API', function($scope, utils, API) {
		$scope.data = {
			phone: '',
			pwd: '',
			cpwd: '',
			yzm:''
		};
		$scope.register = function() {
			
			API.fetchPost('/register', $scope.data)
				.then(function(data) {
					console.log(data);

				})
				.catch(function(err) {

					console.log(err);
				})
		}

			if(!utils.validForm.isNotEmpty($scope.data.phone)) {
				utils.tips.showTips('手机号不能为空');
				return false;
			} else if(!utils.validForm.isPhone($scope.data.phone)) {
				utils.tips.showTips('手机号码格式不正确');
				return false;
			}

			if(!utils.validForm.isNotEmpty($scope.data.pwd)) {
				utils.tips.showTips('密码不能为空');
				return false;
			} else if(!utils.validForm.isLength($scope.data.pwd, 8, 16)) {
				utils.tips.showTips('密码字符个数8-16位');
				return false;
			} else if(utils.validForm.isNotOnlyW($scope.data.pwd)) {
				utils.tips.showTips('密码只能是下划线字母数字组合');
				return false;
			}

			if(!utils.validForm.isEqual($scope.data.pwd, $scope.data.cpwd)) {
				utils.tips.showTips('两次密码不一致');
				return false;
			}
			if(!utils.validForm.isNotEmpty($scope.data.yzm)) {
				utils.tips.showTips('验证码不能为空');
				return false;
			} if(!utils.validForm.isEqual($scope.data.yzm, $scope.data.code)) {
				utils.tips.showTips('验证码错误');
				return false;
			}

		return true;

		$scope.getSMSCode = function() {
			utils.tips.showLoadTips();
			API.fetchPost('/sendSMS', {
					PhoneNumbers: '13415619601'
				})
				.then(function(data) {
					console.log('data ==> ', data);
					utils.tips.hideLoadTips();
					utils.tips.showTips(data.data.msg, $scope);
				})
				.catch(function(err) {
					utils.tips.hideLoadTips();
					utils.tips.showTips(data.data.msg, $scope);
				})

		}
	}]);