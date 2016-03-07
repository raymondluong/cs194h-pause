angular.module('pauseApp').controller('ConnectCtrl', ['$scope', '$http', '$meteor', function ($scope, $http, $meteor) {

	$scope.locationFound = false;
	$scope.pulseCount = 0;
	$scope.firstTap = true;
	$scope.inMoment = false;
	$scope.momentCompleted = false;
	$scope.locations = $meteor.collection(Locations);
	$scope.currentUser = Meteor.user();
	$scope.currentId = Meteor.userId();

	// Fetch the current location and update the locations database
	var interval = setInterval(function() {
		if (!$scope.currentUser) return;
		var coords = Geolocation.latLng();
		if (coords) {
		  var queryURL = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + coords.lat + ',' + coords.lng;
		  $http.get(queryURL).then(function(result) {
		  	var location = result.data.results[2]['formatted_address'];
		  	var userExists = $scope.locations.find(function(element) {
		  		return element.username === $scope.currentUser.username;
		  	});
		  	if (userExists) {
		  		$scope.locations.remove(userExists);
		  	}
	  		$scope.locations.push({
		  		username: $scope.currentUser.username,
		  		user_id: $scope.currentUser._id,
		  		location: location
		  	});
		  	console.log($scope.locations);
		  	clearInterval(interval);
		  })
		}
	}, 5000);
  
  var locations = $scope.locations.filter(function(element) {
    return element.user_id !== $scope.currentId; 
  });	
  
	$scope.statusText = 'Searching for a connection...';

	$("#left_fill").hide();
	$("#center_fill").hide();
	$("#right_fill").hide();
	$('#connect-thumb-inner').hide();
	$('#connect-thumb-print').hide();
  /*console.log(
      $meteor.collection(function() {
        return Meteor.users.find({_id:{$ne: currentId}},{limit:1});       
  })); */
	fillInLoadingCircles();

	function fillInLoadingCircles() {
		if (!$scope.currentUser) return;
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
		return locations[getRandomInt(0, n)].location;
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
