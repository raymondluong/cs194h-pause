angular.module('pauseApp').controller('MainCtrl', ['$scope', '$meteor', function ($scope, $meteor) {

	$scope.gradientSize = 4;
	$scope.colorLogs = $meteor.collection(Colors);
	console.log($scope.colorLogs);

	$scope.renderGradient = function() {
		console.log($scope.colorLogs);
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

			// Create css string out of the most recent colors, determined by gradientSize
			function createCssString() {
				var n = $scope.colorLogs.length;
				var result = "(top";
				for (var i = n - 1; i >= n - $scope.gradientSize; i--) {
					result += ',' + convertHex($scope.colorLogs[i].hex, 40);
				}
				result += ')';
				return result;
			}

			// Sets gradient for each vendor prefix
			var cssString = createCssString();
			var prefixes = ['-webkit-linear-gradient', '-o-linear-gradient', '-ms-linear-gradient'];
			prefixes.forEach(function(prefix) {
				grad.css('background-image', prefix + cssString);
			})
		});		
	};
	


}]);



