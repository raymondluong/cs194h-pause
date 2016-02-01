angular.module('pauseApp').controller('HomeCtrl', ['$scope', function ($scope) {
	$('#home-menu').circleMenu({
		direction:'full', 
		trigger:'click',
		select: function(evt, index){
			console.log(evt, index);
		}
	});
}]);