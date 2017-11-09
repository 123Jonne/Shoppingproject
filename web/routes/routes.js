angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function ($stateProvider, $urlRouterProvider,$locationProvider) {

		$urlRouterProvider.otherwise('/register');

		$stateProvider
			.state('main', {
				url: '',
				abstruct:true,
				templateUrl: '/templates/main/main.html'
			})
			.state('main.home', {
				url: '/home',
				templateUrl: '/templates/home/home.html'
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
