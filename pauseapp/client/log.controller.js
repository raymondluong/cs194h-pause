Colors = new Mongo.Collection('colors');

angular.module('pauseApp').controller('LogCtrl', ['$scope', '$meteor', function ($scope, $meteor) {

	$scope.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'black'];
	var d = new Date();
	$scope.logColor = function(color) {
		if (confirm("Log color as " + color + "?")) {
			alert("You logged " + color + " at " + d.getHours() + ":" + d.getMinutes());
			//window.location.href = "home";
		}
		$scope.colorLogs.push({
			'color': color,
			'date': new Date()
		});
		console.log($scope.colorLogs);

	}

	$scope.colorLogs = $meteor.collection(Colors);

    console.log($scope.colorLogs);

    // $scope.addTask = function(newTask) {
    //   $scope.tasks.push({
    //     text: newTask,
    //     createdAt: new Date() 
    //   });
    // };
}]);