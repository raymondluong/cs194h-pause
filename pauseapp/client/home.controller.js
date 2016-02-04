angular.module('pauseApp').controller('HomeCtrl', ['$scope', function ($scope) {

	$('#home-menu').circleMenu({
		direction: 'full', 
		trigger: 'click'
	});

	$('#home-menu').circleMenu('open');

}]);