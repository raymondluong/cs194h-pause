angular.module('pauseApp').controller('HomeCtrl', ['$scope', '$location', function ($scope, $location) {
	angular.element(document).ready(function () {
		var interval = setInterval(function() {
			var location = Geolocation.latLng();
			if (location != null) {
				var queryURL = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + location.lat + ',' + location.lng;
				var queryResults = $.getJSON(queryURL).done(function(obj) {
					console.log(obj);
					console.log(obj.results[0]['formatted_address']);
					clearInterval(interval);
				});
			}
		}, 5000);

		// setTimeout(function() {
		// 	$('.login-close-text');
		// 	$('#login-buttons-password').css('background', '#4E78A0');
		// 	$('#login-buttons-password').css('border', '');
		// }, 10);
	});

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