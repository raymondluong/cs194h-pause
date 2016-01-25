angular.module('pauseApp').controller('ConnectCtrl', ['$scope', function ($scope) {
	console.log('connect controller');
	$scope.locationFound = false;
	$scope.statusText = 'Searching for a connection...';
	var locations = ['Vinhedo, Brazil', 'Manhasset, New York', 'Austin, Texas', 'Reykjavik, Iceland', 
	'Kyoto, Japan', 'Vancouver, Canada'];

	$("#left_fill").hide();
	$("#center_fill").hide();
	$("#right_fill").hide();
	$('#two').hide();
	$('#print').hide();
	fillInLoadingCircles();

	function fillInLoadingCircles() {
		$("#left_fill").fadeIn(1500);
		$("#center_fill").delay(1500).fadeIn(1500);
		$("#right_fill").delay(3000).fadeIn(1500);
		setTimeout(function() {
			$('#print').show();
			$scope.locationFound = true;
			$scope.$apply(function() {
				$scope.statusText = 'Connection found';
				$scope.locationText = getRandomLocation();
			});
		}, 4500)
	}

	function getRandomLocation() {
		var n = locations.length;
		return locations[getRandomInt(0, n)];
	}

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

	$("#print").bind('touchstart mousedown', function() {
		$('#two').show();
		$("#two").animate({
			right: 0,
			left: 0,
			top: 0,
			bottom: 0
		}, {duration: 10000});
		if(navigator.vibrate){
			navigator.vibrate(1000);
		}
	}).bind('touchend mouseup', function() {
		$("#two").stop();
		if (navigator.vibrate) {
			navigator.vibrate(0);
		}
		// if ($('#two').position().top === 0) {
		// 	console.log('redirecting');
		//  	setTimeout(function() {
		// 	 	window.location.href="home";
		// 	}, 1000);
		// }
	});
}]);