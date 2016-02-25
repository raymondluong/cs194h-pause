angular.module('pauseApp').config(function($urlRouterProvider, $stateProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'home.html'
		})
		.state('connect', {
			url: '/connect',
			templateUrl: 'connect.html'
		})
		.state('connect-instructions', {
			url: '/connect-instructions',
			templateUrl: 'connect-instructions.html'
		})
		.state('meditate', {
			url: '/meditate',
			templateUrl: 'meditate.html'
		})
		.state('log', {
			url: '/log',
			templateUrl: 'log.html'
		})
		.state('logView', {
			url: '/log/view',
			templateUrl: 'logview.html'
		});
	$urlRouterProvider.otherwise('/home');
})