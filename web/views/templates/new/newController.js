angular.module('app')
			.controller('newController',['$scope','$timeout','$ionicSideMenuDelegate','$ionicSlideBoxDelegate',function($scope,$timeout,$ionicSideMenuDelegate,$ionicSlideBoxDelegate)
			{
					
				$scope.openLeft = function () {
					$ionicSideMenuDelegate.toggleLeft();
				}
				
				
			}]);