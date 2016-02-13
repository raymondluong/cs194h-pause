angular.module('pauseApp').controller('LogCtrl', ['$scope', '$meteor', function ($scope, $meteor) {

	var colorMap = {
		"red": "#B22222",
		"orange": "#F4A460",
		"yellow": "#f0e68c",
		"green": "#3CB371",
		"blue": "#4169E1",
		"purple": "#9370D8",
		"white": "#f9f9f9",
		"black": "#272727"
	}

	$scope.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'black'];
	// $scope.colorLogs = $meteor.collection(Colors);
	$scope.renderGradient();

	$scope.logColor = function(color) {
		var d = new Date();
		if (confirm("Log color as " + color + "?")) {
			alert("You logged " + color + " at " + d.getHours() + ":" + d.getMinutes());
			$scope.colorLogs.push({
				color: color,
				hex: colorMap[color],
				date: new Date()
			});
			$scope.renderGradient();
		}
	};





}]);



