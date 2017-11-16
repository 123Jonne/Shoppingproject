angular.module('app')
			.controller('xsController',['$scope','$timeout','$ionicSideMenuDelegate','$ionicSlideBoxDelegate',function($scope,$timeout,$ionicSideMenuDelegate,$ionicSlideBoxDelegate)
			{
					
				$scope.openLeft = function () {
					$ionicSideMenuDelegate.toggleLeft();
				}
				
				
			}]);