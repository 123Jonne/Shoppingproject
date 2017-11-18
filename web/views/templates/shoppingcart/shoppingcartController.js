angular.module('app')
	.controller('shoppingcartController', ['$rootScope', '$scope', '$timeout', '$state', 'utils', 'API', function ($rootScope, $scope, $timeout, $state, utils, API) {
           $scope.isNotHas=true;
				if ($scope.data.length > 0) {
          $scope.isNotHas = false;
        }
				
				
			}]);