angular.module('pauseApp').controller('LogCtrl', ['$scope', '$meteor', function ($scope, $meteor) {

	var moods = ["#800000","#FF6347","#000080","#F62459","#4169E1","#C71585"];

	var emotionMap = {
		"afraid": "#800000", /*maroon*/
		"tense": "#8B0000", /*darkred*/
		"excited": "#DC143C", /*crimson*/
		"delighted": "#C71585", /*mediumvioletred*/
		"frustrated": "#A52A2A", /*brown*/
		"angry": "#A0522D", /*sienna*/
		"happy": "#FF6347", /*tomato*/
		"glad": "#FF7F50", /*coral*/
		"miserable": "#404080", /**/
		"sad": "#000080", /*navy*/
		"calm": "#008080", /*teal*/
		"satisfied": "#4169E1", /*royalblue*/
		"gloomy": "#708090", /*slategray*/
		"tired": "#191970", /*midnightblue*/
		"sleepy": "#483D8B", /*darkslateblue*/
		"serene": "#4B0082", /*indigo*/
	};

	$scope.emotions = ['afraid', 'tense', 'excited', 'delighted', 'frustrated', 'angry', 'happy', 'glad', 'miserable', 'sad', 'calm', 'satisfied', 'gloomy', 'tired', 'sleepy', 'serene'];
	$scope.emotionLogs = $meteor.collection(Logs);

	var d = new Date();
	$scope.logEmotion = function(emotion) {
		if (confirm("")) {
			// moods.unshift(emotionMap[emotion]);
			// renderGradient();
			$scope.emotionLogs.push({
				'emotion': emotion,
				'color': emotionMap[emotion],
				'date': new Date()
			});
			console.log($scope.emotionLogs);
		}
	};

	

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
			grad.css("background-image", "-webkit-linear-gradient(top, "+ convertHex(moods[0],40) +","+ convertHex(moods[1],40) +","+ convertHex(moods[2],40) +","+ convertHex(moods[3],40) +","+ convertHex(moods[4],40) +","+ convertHex(moods[5],40) + ")");
			grad.css("background-image", "-o-linear-gradient(top, "+ convertHex(moods[0],40) +","+ convertHex(moods[1],40) +","+ convertHex(moods[2],40) +","+ convertHex(moods[3],40) +","+ convertHex(moods[4],40) +","+ convertHex(moods[5],40) + ")");
			grad.css("background-image", "-ms-linear-gradient(top, "+ convertHex(moods[0],40) +","+ convertHex(moods[1],40) +","+ convertHex(moods[2],40) +","+ convertHex(moods[3],40) +","+ convertHex(moods[4],40) +","+ convertHex(moods[5],40) + ")");
			grad.css("background-image", "linear--linear-gradient(to bottom, "+ convertHex(moods[0],40) +","+ convertHex(moods[1],40) +","+ convertHex(moods[2],40) +","+ convertHex(moods[3],40) +","+ convertHex(moods[4],40) +","+ convertHex(moods[5],40) + ")");
			//grad.css("filter", "progid:DXImageTransform.Microsoft.gradient( startColorstr='"+ moods[0] +"', endColorstr='"+ moods[1] +"',GradientType=0 )");
		});		
	}


}]);



