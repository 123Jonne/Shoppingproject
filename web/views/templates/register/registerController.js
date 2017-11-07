	angular.module('app')
			.controller('registerController',['$scope','utils',function($scope,utils)
			{
				$scope.data={
					phone:'',
					pwd:'',
					cpwd:''
				};
				$scope.register=function(){
		
			if (utils.validForm.isNotEmpty($scope.data.phone)) {
				if (!utils.validForm.isPhone($scope.data.phone)) {
					utils.tips.showTips('手机号码格式不正确');
					return false;
				}
			}
			if (!utils.validForm.isNotEmpty($scope.data.pwd)) {
				utils.tips.showTips('密码不能为空');
				return false;
			} else if (!utils.validForm.isLength($scope.data.pwd, 8, 16)) {
				utils.tips.showTips('密码字符个数8-16位');
				return false;
			} else if (utils.validForm.isNotOnlyW($scope.data.pwd)) {
				utils.tips.showTips('密码只能是下划线字母数字组合');
				return false;
			}

			if (!utils.validForm.isEqual($scope.data.pwd, $scope.data.cpwd)) {
				utils.tips.showTips('两次密码不一致');
				return false;
			}

			return true;

				}
				
				
				
			}]);