angular.module('pauseApp').controller('MeditateCtrl', ['$scope', function ($scope) {
	console.log('meditate controller');
	
	$scope.beginScan = function() {
		$('.btn-body-scan').css('visibility', 'hidden');

        var audioElement = document.createElement('audio');
        // audioElement.setAttribute('src', 'meditation-voiceover.mp3');
        audioElement.setAttribute('src', '2sec.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        });

        audioElement.addEventListener('ended', function(){
            window.location.href = "/meditate#openModal";
        });
	}

	$scope.scan = function() {
		var scanner = $("#scanner");
        console.log('scan');
        if (scanner.length > 0) {
            scanner.css("visibility","visible").hide().fadeIn("slow", function() {
                scanner.animate({top: "620px"}, 180000, "linear", function() {
                    scanner.fadeOut("slow", function() {
                        scanner.show().css("visibility", "hidden");
                        setTimeout(function() {
						 	window.location.href="home";
						}, 1000);
                    });
                });
            });
        }
    }
}]);