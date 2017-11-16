angular.module('app')
			.controller('gdController',['$scope','$timeout','$ionicSideMenuDelegate','$ionicSlideBoxDelegate',function($scope,$timeout,$ionicSideMenuDelegate,$ionicSlideBoxDelegate)
			{
					
				$scope.openLeft = function () {
					$ionicSideMenuDelegate.toggleLeft();
				}
				
				
			}]);