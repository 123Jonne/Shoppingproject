(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
	 			{
		 			name: 'index',
		 			files: [
		 				'/templates/index/indexController.js',
		 				'/templates/index/index.css'
		 			]
		 		},
		 		{
		 			name: 'shoppingMall',
		 			files: [
		 				'/templates/shoppingMall/shoppingMallController.js',
		 				'/templates/shoppingMall/shoppingMall.css'
		 			]
		 		},
		 		{
		 			name: 'shoppingcart',
		 			files: [
		 				'/templates/shoppingcart/shoppingcartController.js',
		 				'/templates/shoppingcart/shoppingcart.css'
		 			]
		 		},
		 		{
		 			name: 'my',
		 			files: [
		 				'/templates/my/myController.js',
		 				'/templates/my/my.css'
		 			]
		 		},
		 		{
		 			name: 'register',
		 			files: [
		 				'/templates/register/registerController.js',
		 				'/templates/register/register.css'
		 			]
		 		},
		 		{
		 			name: 'login',
		 			files: [
		 				'/templates/login/loginController.js',
		 				'/templates/login/login.css'
		 			]
		 		}

		 		
		 		
	 		]
 		});
	}]);
	
})();