angular.module('app')
	.controller('registerController', ['$scope', '$rootScope','$timeout', '$state', 'utils', 'API', function ($scope,$rootScope, $timeout, $state, utils, API) {
		$scope.data = {
			phone: '',
			pwd: '',
			yzm: ''
		};
		
		$scope.register = function () {
			if (!validRegister()) {
				return;
			}
			utils.tips.showLoadTips();
			API.fetchPost('/register', $scope.data)
				.then(function (data) {
					console.log('data ==> ', data);
					utils.tips.hideLoadTips();
					utils.tips.showTips(data.data.msg, $scope);
					if(data.data.code===100){
						
						$timeout(function () {
						$scope.tips.close();
						$state.go('login');
					}, 3000);
					}
					
				})
				.catch(function (err) {
					utils.tips.hideLoadTips();
					utils.tips.showTips(data.data.msg,$scope);
				})

		}

		function showTips(msg) {
			utils.tips.showTips(msg, $scope);
		}

		function validRegister() {
		

			if (utils.validForm.isNotEmpty($scope.data.phone)) {
				if (!utils.validForm.isPhone($scope.data.phone)) {
					showTips('手机号码格式不正确');
					return false;
				}
			}
			if (!utils.validForm.isNotEmpty($scope.data.pwd)) {
				showTips('密码不能为空');
				return false;
			} else if (!utils.validForm.isLength($scope.data.pwd, 8, 16)) {
				showTips('密码字符个数8-16位');
				return false;
			} else if (utils.validForm.isNotOnlyW($scope.data.pwd)) {
				showTips('密码只能是下划线字母数字组合');
				return false;
			}

			if (!utils.validForm.isEqual($scope.data.pwd, $scope.data.cpwd)) {
				showTips('两次密码不一致');
				return false;
			}
			if (!utils.validForm.isEqual($scope.data.yzm, $rootScope.Code)) {
				showTips('验证码错误');
				return false;
			}


			return true;
		}
         

        $scope.getSMSCode = function () {
			utils.tips.showLoadTips();
			API.fetchPost('/sendSMS', {PhoneNumbers:$scope.data.phone})
				.then(function (data) {
					console.log('data ==> ', data);
					utils.tips.hideLoadTips();
					utils.tips.showTips(data.data.msg, $scope);
					$rootScope.Code=data.data.code;
					console.log($rootScope.Code);
				})
				.catch(function (err) {
					utils.tips.hideLoadTips();
					utils.tips.showTips(data.data.msg, $scope);
				})

		}

	}])