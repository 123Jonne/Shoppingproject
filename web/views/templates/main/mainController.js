angular.module('app')
	.controller('mainController', ['$rootScope', '$scope', '$timeout', '$state', 'utils', 'API', function ($rootScope, $scope, $timeout, $state, utils, API) {
$scope.login = function () {
		$state.go('main.index');
		console.log(122);
}
$scope.login = function () {
		$state.go('main.shoppingMall');
		console.log(122);
}
$scope.login = function () {
		$state.go('main.my');
		console.log(122);
}
$scope.login = function () {
		$state.go('main.shoppingcart');
		console.log(122);
}
				
				
				
			}]);