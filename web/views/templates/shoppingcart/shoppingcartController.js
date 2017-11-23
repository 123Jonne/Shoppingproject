angular.module('app')
	.controller('shoppingcartController', ['$rootScope', '$scope', '$timeout', '$state', 'utils', 'API', function ($rootScope, $scope, $timeout, $state, utils, API) {
		 $scope.isNotHas=true;
		 $scope.checks=false;
		 $scope.Notischecked=false;
		utils.tips.showLoadTips();
		API.fetchGet('/main/shopcart/'+$rootScope.user.id,$rootScope.user)
		.then(function(data){
			$scope.data=data.data;
			
			if ($scope.data.length > 0) 
			{$scope.isNotHas = false; 
			}
			console.log($scope.data);
			$scope.checked=function(){
				console.log(123);
				$scope.arr=[];
				for(var i=0;i<checks.length;i++){
					if(checks.length){
						arr.push(i);
							console.log(123);
					}
				}
				if(arr.length===checks.length){
					$scope.allcheck=true;
				}else{
					$scope.allcheck=false;
				}
			
			}
			
			utils.tips.hideLoadTips();
		})
		.catch(function(err){
			utils.tips.hideLoadTips();
			
		})
				
			}]);
			