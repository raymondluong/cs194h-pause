angular.module('pauseApp').controller('LogViewCtrl', ['$scope', function ($scope) {
	console.log('log view controller');

	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	context.rect(0, 0, canvas.width, canvas.height);

	// add linear gradient
	var grd = context.createLinearGradient(0, 0, canvas.width, 0);
	// light blue
	grd.addColorStop(0, '#8ED6FF');   
	// dark blue
	grd.addColorStop(1, '#004CB3');
	context.fillStyle = grd;
	context.fill();


	var d = new Date();
	$scope.logEmotion = function(emotion) {
		if (confirm("")) {
			window.location.href = "home";
		}
	}
}]);