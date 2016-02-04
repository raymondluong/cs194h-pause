angular.module('pauseApp').controller('ConnectCtrl', ['$scope', function ($scope) {
	console.log('connect controller');
	$scope.locationFound = false;
	$scope.connecting = false;
	$scope.pulseCount = 0;
	$scope.momentCompleted = false;
	$scope.firstTap = true;
	$scope.statusText = 'Searching for a connection...';
	var locations = ['Vinhedo, Brazil', 'Manhasset, New York', 'Austin, Texas', 'Reykjavik, Iceland', 
	'Kyoto, Japan', 'Vancouver, Canada'];

	$("#left_fill").hide();
	$("#center_fill").hide();
	$("#right_fill").hide();
	$('#connect-thumb-inner').hide();
	$('#connect-thumb-print').hide();
	fillInLoadingCircles();

	function fillInLoadingCircles() {
		$("#left_fill").fadeIn(1500);
		$("#center_fill").delay(1500).fadeIn(1500);
		$("#right_fill").delay(3000).fadeIn(1500);
		setTimeout(function() {
			$('#connect-thumb-print').show();
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

	function stopPulse() {
		$scope.$apply(function() {
			$scope.connecting = false;
			$scope.statusText = "Moment Completed";
			$scope.momentCompleted = true;
		})
	}


	function loadRadial() {
		var transform_styles = ['-webkit-transform', '-ms-transform', 'transform'];
		var fill_rotation = 180;
		for(i in transform_styles) {
			$('.radial-load-inner .radial-load-fill, .radial-load-inner .radial-load-mask.full').css(transform_styles[i], 'rotate(' + fill_rotation + 'deg)');
		}
	}

	$("#connect-thumb-wrapper").bind('mousedown' , function() {
		if (!$scope.locationFound) return;
		if (!$scope.firstTap) return;
		$scope.$apply( function () {$scope.firstTap = false});
		console.log('mousedown');
		//loadRadial();
		var intervalID;
		intervalID = setInterval(function() {
			$scope.$apply(function() {
				$scope.pulseCount++;
			})
			if (Meteor.isCordova) {
				navigator.vibrate(3000);
			}
			console.log('pulse');
			if ($scope.pulseCount >= 4) {
				clearInterval(intervalID);
			}
		}, 5000)
		// $('#connect-thumb-inner').show();
		// $("#connect-thumb-inner").animate({
		// 	right: 0,
		// 	left: 0,
		// 	top: 0,
		// 	bottom: 0
		// }, {duration: 10000});
		$scope.$apply(function() {
			$scope.connecting = true;
			$scope.statusText = "Sharing a moment";
		});
		setTimeout(stopPulse, 20000);
	}).bind('touchend mouseup', function() {
		//todo: fix
		return;
		//mouseup event is not registering!!
		console.log('mouseup');
		// $("#connect-thumb-inner").stop();
		$scope.$apply(function() {
			$scope.connecting = false;
			console.log('mouseup');
		});
		// if ($('#two').position().top === 0) {
		// 	console.log('redirecting');
		//  	setTimeout(function() {
		// 	 	window.location.href="home";
		// 	}, 1000);
		// }
	});
}]);
