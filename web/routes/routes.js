angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function ($stateProvider, $urlRouterProvider,$locationProvider) {

		$urlRouterProvider.otherwise('/register');

		$stateProvider
			.state('main', {
				url: '',
				abstruct:true,
				templateUrl: '/templates/main/main.html'
			})
			.state('main.index', {
				url: '/index',
				templateUrl: '/templates/index/index.html',
				controller: 'indexController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('index');
					}]
				}
			})
				.state('main.shoppingcart', {
				url: '/shoppingcart',
				templateUrl: '/templates/shoppingcart/shoppingcart.html',
				controller: 'shoppingcartController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('shoppingcart');
					}]
				}
			})
				.state('main.my', {
				url: '/my',
				templateUrl: '/templates/my/my.html',
				controller: 'myController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('my');
					}]
				}
			})
				.state('main.shoppingMall', {
				url: '/index',
				templateUrl: '/templates/shoppingMall/shoppingMall.html',
				controller: 'shoppingMallController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('shoppingMall');
					}]
				}
			})
			.state('register', {
				url: '/register',
				templateUrl: '/templates/register/register.html',
				controller: 'registerController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('register');
					}]
				}
			})
			.state('login', {
				url: '/login',
				templateUrl: '/templates/login/login.html',
				controller: 'loginController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('login');
					}]
				}
			})
			$locationProvider.html5Mode(true);
			
}])
