angular.module('pauseApp').controller('LogCtrl', ['$scope', function ($scope) {
	console.log('log controller');
	$scope.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'black'];
	var d = new Date();
	$scope.logColor = function(color) {
		if (confirm("Log color as " + color + "?")) {
			alert("You logged " + color + " at " + d.getHours() + ":" + d.getMinutes());
			window.location.href = "home";
		}
	}
}]);