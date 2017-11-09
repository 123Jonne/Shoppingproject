angular.module('app')
	.controller('loginController', ['$rootScope', '$scope', '$timeout', '$state', 'utils', 'API', function ($rootScope, $scope, $timeout, $state, utils, API) {

		$scope.data = {
			phone: '',
			pwd: ''
		};
		
		$scope.login = function () {
			if (!validLogin()) {
				return;
			}
			utils.tips.showLoadTips();
			API.fetchPost('/login', $scope.data)
				.then(function (data) {
					utils.tips.hideLoadTips();
					showTips(data.data[0].msg);
					if (data.data[0].code === 200) {
						$rootScope.user.id = data.data[0].id;
						$rootScope.user.phone = data.data[0].phone;
						$timeout(function () {
							$scope.tips.close();
							$state.go('main.home');
						}, 1000);
					}
					
				})
				.catch(function (err) {
					console.log(err);
					utils.tips.hideLoadTips();
				})

		}

		function showTips(msg) {
			utils.tips.showTips(msg, $scope);
		}

		function validLogin() {
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
				showTips('密码字符个数8-16');
				return false;
			} else if (utils.validForm.isNotOnlyW($scope.data.pwd)) {
				showTips('密码只能是下划线字母数字');
				return false;
			}

			return true;
		}

	}])