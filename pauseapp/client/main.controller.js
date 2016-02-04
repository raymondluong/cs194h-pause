angular.module('pauseApp').controller('MainCtrl', ['$scope', function ($scope) {
	$scope.homeMenuState = {
		'toggled': true
	};

	$scope.getMenuState = function() {
		console.log('test');
		return $scope.homeMenuState.toggled ? 'circleMenu-open' : 'circleMenu-closed';
	}
}]);