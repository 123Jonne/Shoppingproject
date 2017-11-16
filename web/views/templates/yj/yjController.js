angular.module('app')
			.controller('yjController',['$scope','$timeout','$ionicSideMenuDelegate','$ionicSlideBoxDelegate',function($scope,$timeout,$ionicSideMenuDelegate,$ionicSlideBoxDelegate)
			{
					$scope.openLeft = function () {
					$ionicSideMenuDelegate.toggleLeft();
				}
				
				
				
			}]);