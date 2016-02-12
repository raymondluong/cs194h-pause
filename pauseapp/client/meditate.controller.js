angular.module('pauseApp').controller('MeditateCtrl', ['$scope', function ($scope) {
	console.log('meditate controller');
    var background = $("#body-scan-screen");
    var audio = Meteor.isCordova ? playSound('meditation-voiceover-trimmed.mp3') : null;

    $scope.stopAudio = function() {
        console.log("STOP");
        if (Meteor.isCordova && audio != null) {
            audio.stop();
        } else {
            $.each($("audio"), function() {
                console.log(this);
                this.pause();
            });
        }
    }
	
	$scope.openInstructions = function() {
        window.location.href = "/meditate#openModal";
	}

    //TODO: BETTER TIMING, MAYBE DO LARGER BODY PARTS
	$scope.beginScan = function() {
        // HIDE BUTTON, SHOW AUDIO ICON
        $('.btn-body-scan').hide()
        $('#audio-icon').show()

        if (Meteor.isCordova && audio != null) {
            // AUDIO PLAYBACK USING CORDOVA PLUGIN
            audio.play();
        } else if (audio == null) {
            // AUDIO PLAYBACK USING HTML5 AUDIO
            var audioElement = document.createElement('audio');
            document.querySelector("body").appendChild(audioElement);

            audioElement.setAttribute('src', 'meditation-voiceover-trimmed.mp3');
            // audioElement.setAttribute('src', '2sec.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');
            //audioElement.load();

            audioElement.addEventListener("load", function() {
                // audioElement.play();
            });

            audioElement.addEventListener('ended', function(){
                // AUDIO ENDED CALLBACK
            });
        } else {
            console.log("FATAL ERROR AUDIO PLAYBACK");
        }

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

        // RE-SHOW BUTTON/HIDE AUDIO ICON
        $('.btn-body-scan').show()
        $('#audio-icon').hide()
    }

    function getMediaUrl(sound) {
        return cordova.file.applicationDirectory.replace('file://', '') + 'www/application/app/' + sound;
    }

    function playSound(sound) {
        return new Media(
            getMediaUrl(sound),
            function (success) {
              // success
            },
            function (err) {
              // error
            }
        );
    }

    function changeBackground(image, delayTime) {
        background.delay(delayTime).fadeTo(1000, 0, function() {
            background.css("background", "url('bodyscan/" + image + ".png') no-repeat center");
            background.css("background-size", "75% 85%");
        }).fadeTo(1000, 1);
    }
}]);