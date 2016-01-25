angular.module('pauseApp').controller('HomeCtrl', ['$scope', function ($scope) {
	console.log('home controller'); 
	$('#options').circleMenu({
		direction:'full', 
		trigger:'click',

		select: function(evt, index){
			console.log(evt, index);
		}
	}).on('circleMenu-open', function(){
		console.log('menu opened 2');
	});
}]);