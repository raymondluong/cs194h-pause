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
			moods.unshift(emotionMap[emotion]);
			$scope.emotionLogs.push({
				'emotion': emotion,
				'color': emotionMap[emotion],
				'date': new Date()
			});
			console.log($scope.emotionLogs);
		}
	};
}]);