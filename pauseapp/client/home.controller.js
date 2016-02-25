angular.module('pauseApp').controller('HomeCtrl', ['$scope', '$location', function ($scope, $location) {

	$('#home-menu').circleMenu({
		direction: 'full', 
		trigger: 'click'
	});

	$('#home-menu').circleMenu('open');

	$scope.changePath = function(path) {
		setTimeout(function() {
			$scope.$apply(function() {
				$location.path(path);
			});
		}, 700);
	};

}]);