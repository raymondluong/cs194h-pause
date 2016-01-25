angular.module('pauseApp').controller('MeditateCtrl', ['$scope', function ($scope) {
	console.log('meditate controller');
	
	$scope.beginScan = function() {
		$('.btn-body-scan').css('visibility', 'hidden');
		scan();
	}

	function scan() {
		var scanner = $("#scanner");
        console.log('scan');
        if (scanner.length > 0) {
            scanner.css("visibility","visible").hide().fadeIn("slow", function() {
                scanner.animate({top: "580px"}, 180000, "linear", function() {
                    scanner.fadeOut("slow", function() {
                        scanner.show().css("visibility", "hidden");
                        setTimeout(function() {
						 	window.location.href="home";
						}, 1000);
                    });
                })
            })
        }
    }
}]);