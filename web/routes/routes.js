angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function ($stateProvider, $urlRouterProvider,$locationProvider) {

		$urlRouterProvider.otherwise('/home');

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

			$locationProvider.html5Mode(true);
			
}])
