Emotions = new Mongo.Collection('emotions');

angular.module('pauseApp').controller('LogCtrl', ['$scope', '$meteor', function ($scope, $meteor) {

	var moods = ["#22A7F0","#8E44AD","#AEA8D3","#F62459","#DB0A5B","#D64541","#D2527F","#2C3E50","#1E8BC3","#87D37C","#4ECDC4","#3FC380","#E87E04","#F9690E","#F9BF3B"];

	var emotionMap = {
		"afraid": "#B22222", /*red*/
		"tense": "#B22222", /*red*/
		"excited": "#FF4500", /*red*/
		"delighted": "#FF4500", /*red*/
		"frustrated": "#FF4500", /*red-orange*/
		"angry": "#FF4500", /*red-orange*/
		"happy": "#f0e68c", /*yellow*/
		"glad": "#f0e68c", /*yellow*/
		"miserable": "#4169E1", /*blue*/
		"sad": "#4169E1", /*blue*/
		"calm": "#3CB371", /*green*/
		"satisfied": "#3CB371", /*green*/
		"gloomy": "#9370D8", /*purple*/
		"tired": "#9370D8", /*purple*/
		"sleepy": "#9370D8", /*purple*/
		"serene": "#9370D8", /*purple*/
	}

	$scope.emotions = ['afraid', 'tense', 'excited', 'delighted', 'frustrated', 'angry', 'happy', 'glad', 'miserable', 'sad', 'calm', 'satisfied', 'gloomy', 'tired', 'sleepy', 'serene'];
	var d = new Date();
	$scope.logColor = function(emotion) {
		if (confirm("")) {
			moods.unshift(emotionMap[emotion]);
			renderGradient();

			//window.location.href = "home";
		}
		$scope.emotionLogs.push({
			'color': emotion,
			'date': new Date()
		});
		console.log($scope.emotionLogs);

	};

	$scope.emotionLogs = $meteor.collection(Emotions);

    console.log($scope.emotionLogs);

    // $scope.addTask = function(newTask) {
    //   $scope.tasks.push({
    //     text: newTask,
    //     createdAt: new Date() 
    //   });
    // };

    // Define variable colors
	//var moods = ["#22A7F0","#8E44AD","#AEA8D3","#F62459","#DB0A5B","#D64541","#D2527F","#2C3E50","#1E8BC3","#87D37C","#4ECDC4","#3FC380","#E87E04","#F9690E","#F9BF3B"];


	function renderGradient() {
		$('.gradient-bkgrd').each(function() {
			var grad = $(this);
			
			// Convert Hex color to RGB
			function convertHex(hex,opacity){
			    hex = hex.replace('#','');
			    r = parseInt(hex.substring(0,2), 16);
			    g = parseInt(hex.substring(2,4), 16);
			    b = parseInt(hex.substring(4,6), 16);
				
				// Add Opacity to RGB to obtain RGBA
			    result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
			    return result;
			}
			
			// Gradient rules
			//grad.css('background-color', convertHex(moods[0],40) );
			//grad.css("background-image", "-webkit-gradient(linear, left top, left bottom, color-stop(0%,"+ convertHex(moods[0],40) +"), color-stop(100%,"+ convertHex(moods[1],40) +"))");
			grad.css("background-image", "-webkit-linear-gradient(top, "+ convertHex(moods[0],40) +","+ convertHex(moods[1],40) +","+ convertHex(moods[2],40) +","+ convertHex(moods[3],40) +","+ convertHex(moods[4],40) +","+ convertHex(moods[5],40) + /*","+ convertHex(moods[6],40) +","+ convertHex(moods[7],40) +","+ convertHex(moods[8],40) +","+ convertHex(moods[9],40) + */")");
			grad.css("background-image", "-o-linear-gradient(top, "+ convertHex(moods[0],40) +","+ convertHex(moods[1],40) +","+ convertHex(moods[2],40) +","+ convertHex(moods[3],40) +","+ convertHex(moods[4],40) +","+ convertHex(moods[5],40) + /*","+ convertHex(moods[6],40) +","+ convertHex(moods[7],40) +","+ convertHex(moods[8],40) +","+ convertHex(moods[9],40) + */")");
			grad.css("background-image", "-ms-linear-gradient(top, "+ convertHex(moods[0],40) +","+ convertHex(moods[1],40) +","+ convertHex(moods[2],40) +","+ convertHex(moods[3],40) +","+ convertHex(moods[4],40) +","+ convertHex(moods[5],40) + /*","+ convertHex(moods[6],40) +","+ convertHex(moods[7],40) +","+ convertHex(moods[8],40) +","+ convertHex(moods[9],40) + */")");
			grad.css("background-image", "linear--linear-gradient(to bottom, "+ convertHex(moods[0],40) +","+ convertHex(moods[1],40) +","+ convertHex(moods[2],40) +","+ convertHex(moods[3],40) +","+ convertHex(moods[4],40) +","+ convertHex(moods[5],40) + /*","+ convertHex(moods[6],40) +","+ convertHex(moods[7],40) +","+ convertHex(moods[8],40) +","+ convertHex(moods[9],40) + */")");
			//grad.css("filter", "progid:DXImageTransform.Microsoft.gradient( startColorstr='"+ moods[0] +"', endColorstr='"+ moods[1] +"',GradientType=0 )");
		});		
	}


}]);



