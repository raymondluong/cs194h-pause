angular.module('pauseApp').controller('HomeCtrl', ['$scope', '$meteor', function ($scope, $meteor) {

	$('#home-menu').circleMenu({
		direction: 'full', 
		trigger: 'click'
	});

	$('#home-menu').circleMenu('open');

	$scope.renderGradient();

}]);