angular.module('app')
.controller('rootController',['$rootScope',function($rootScope){
	$rootScope.goPage=function(stateName,params){
		$state.go(stateName,params);

	}
}])