angular.module('pauseApp').controller('ConnectCtrl', ['$scope', '$meteor', function ($scope, $meteor, ){

	$scope.locationFound = false;
	$scope.pulseCount = 0;
	$scope.firstTap = true;
	$scope.inMoment = false;
	$scope.momentCompleted = false;
	
	$scope.statusText = 'Searching for a connection...';
	var locations = ['Vinhedo, Brazil', 'Manhasset, New York', 'Austin, Texas', 'Reykjavik, Iceland', 
	'Kyoto, Japan', 'Vancouver, Canada'];

	$("#left_fill").hide();
	$("#center_fill").hide();
	$("#right_fill").hide();
	$('#connect-thumb-inner').hide();
	$('#connect-thumb-print').hide();
  var currentId = Meteor.userId(); 
  console.log(
      $meteor.collection(function() {
        return Meteor.users.find({_id:{$ne: currentId}},{limit:1});       
  })); 
	fillInLoadingCircles();

	function fillInLoadingCircles() {
		$("#left_fill").fadeIn(1500);
		$("#center_fill").delay(1500).fadeIn(1500);
		$("#right_fill").delay(3000).fadeIn(1500);
		setTimeout(function() {
			$('#connect-thumb-print').show();
			$scope.locationFound = true;
			$scope.$apply(function() {
				$scope.statusText = 'Connection found in';
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
			$scope.statusText = "Thank you for sharing.";
			$scope.momentCompleted = true;
		})
	}

	$("#connect-thumb-print").bind('touchstart mousedown' , function(event) {
		event.preventDefault();
		if (!$scope.locationFound) return;
		if (!$scope.firstTap) return;
		$scope.$apply(function () {
			$scope.firstTap = false;
			$scope.inMoment = true;
			$scope.statusText = "Sharing a moment with someone in";
		});
		var intervalID;
		intervalID = setInterval(function() {
			$scope.$apply(function() {
				$scope.pulseCount++;
			})
			if (Meteor.isCordova) {
				navigator.vibrate(3000);
			}
			if ($scope.pulseCount >= 4) {
				clearInterval(intervalID);
			}
		}, 5000)
		setTimeout(stopPulse, 20000);
	}).bind('touchend mouseup', function() {
		return;
		// $scope.$apply(function() {
		// 	$scope.connecting = false;
		// 	console.log('mouseup');
		// });
	});
}]);
