angular.module('pauseApp').controller('HomeCtrl', ['$scope', '$location', function ($scope, $location) {
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