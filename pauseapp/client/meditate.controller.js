angular.module('pauseApp').controller('MeditateCtrl', ['$scope', function ($scope) {
	console.log('meditate controller');
    var background = $("#body-scan-screen");

    // TODO: STOP AUDIO WHEN CLICK HOME
    $scope.stopAudio = function() {
        // $.each($("audio"), function() {
        //     this.pause();
        // });
    }
	
	$scope.openInstructions = function() {
        // TODO: visual cue for playing audio
		$('.btn-body-scan').css('visibility', 'hidden');
        window.location.href = "/meditate#openModal";
	}

    //TODO: BETTER TIMING, MAYBE DO LARGER BODY PARTS
	$scope.beginScan = function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'meditation-voiceover-trimmed.mp3');
        // audioElement.setAttribute('src', '2sec.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        });

        audioElement.addEventListener('ended', function(){
            // AUDIO ENDED CALLBACK
        });

        changeBackground("head2", 0);
        changeBackground("shoulders", 46000);
        changeBackground("stomach", 16000);
        changeBackground("upperarms", 6000);
        changeBackground("forearms", 7000);
        // changeBackground("hands", 3000);
        changeBackground("hips", 4000);
        changeBackground("thighs", 10000);
        changeBackground("lowerlegs", 11000);
        changeBackground("feet", 19000);
        changeBackground("empty", 28000);
    }

    function changeBackground(image, delayTime) {
        background.delay(delayTime).fadeTo(1000, 0, function() {
            background.css("background", "url('bodyscan/" + image + ".png') no-repeat center");
            background.css("background-size", "75% 85%");
        }).fadeTo(1000, 1);
    }
}]);