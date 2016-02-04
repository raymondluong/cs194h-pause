angular.module('pauseApp').controller('HomeCtrl', ['$scope', function ($scope) {
	// console.log($('#home-menu'));
	// $('#home-menu').open();
	var circleMenu = document.getElementById('home-menu');
	console.log(circleMenu);
	// console.log($scope.homeMenuState.toggled);
	if ($scope.homeMenuState.toggled) {
		console.log('toggled');

	} else {
		console.log('untoggled');
	}
	$('#home-menu').circleMenu({
		direction:'full', 
		trigger:'click',
		select: function(evt, index){
			console.log(evt, index);
		}
	});
}]);