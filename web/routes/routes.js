angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function ($stateProvider, $urlRouterProvider,$locationProvider) {

		$urlRouterProvider.otherwise('/login');

		$stateProvider
			.state('main', {
				url: '',
				abstruct:true,
				templateUrl: '/templates/main/main.html',
				
			})
			.state('main.index', {
				url: '/main/index',
				templateUrl: '/templates/index/index.html',
				controller: 'indexController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('main.index');
					}]
				}
			})
			.state('main.shoppingMall', {
				url: '/main/shoppingMall',
				templateUrl: '/templates/shoppingMall/shoppingMall.html',
				controller: 'shoppingMallController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('main.shoppingMall');
					}]
				}
			})
			.state('main.shoppingcart', {
				url: '/main/shoppingcart',
				templateUrl: '/templates/shoppingcart/shoppingcart.html',
				controller: 'shoppingcartController',
				cache: false,
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('main.shoppingcart');
					}]
				}
			})
			.state('main.my', {
				url: '/main/my',
				templateUrl: '/templates/my/my.html',
				controller: 'myController',
				cache: false,
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('main.my');
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
