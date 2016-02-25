angular.module('pauseApp').controller('LogviewCtrl', ['$scope', '$meteor', function ($scope, $meteor) {
	console.log('logview controller');

    $scope.emotionLogs = [
        {color: "#8B0000", emotion: 'tense', date: new Date("Wed Feb 24 2016 23:46:38 GMT-0800")},
        {color: "#A0522D", emotion: 'angry', date: new Date("Wed Feb 24 2016 23:46:38 GMT-0800")},
        {color: "#A52A2A", emotion: 'frustrated', date: new Date("Wed Feb 24 2016 23:46:38 GMT-0800")},
        {color: "#C71585", emotion: 'delighted', date: new Date("Wed Feb 24 2016 23:46:38 GMT-0800")},
        {color: "#DC143C", emotion: 'excited', date: new Date("Wed Feb 24 2016 23:46:38 GMT-0800")},
        {color: "#800000", emotion: 'afraid', date: new Date("Thu Feb 25 2016 11:46:38 GMT-0800")}
    ];
    // $scope.emotionLogs = $meteor.collection(Logs);
    console.log($scope.emotionLogs);

    $scope.monthNames = ["jan", "feb", "mar", "apr", "may", "jun",
        "jul", "aug", "sep", "oct", "nov", "dec"
    ];

    $scope.quotes = {
        "tense": {
            "quote": "The greatest weapon against stress is our ability to choose one thought over another.",
            "author": "William James"
        },
        "angry": {
            "quote": "You will not be punished for your anger, you will be punished by your anger.",
            "author": "Buddha"
        },
        "frustrated": {
            "quote": "Expectation is the mother of all frustration.",
            "author": "Antonio Banderas"
        },
        "delighted": {
            "quote": "Right now I'm just delighted to be alive and to have had a nice long bath.",
            "author": "Richard Branson"
        },
        "excited": {
            "quote": "Focus on the excitement and it will lead you through the obstacles.",
            "author": "Piya Sarcar"
        },
        "afraid": {
            "quote": "The only thing we have to fear is fear itself.",
            "author": "Franklin D. Roosevelt"
        }
    };

    $scope.slickConfigTop = {
        adaptiveHeight: true,
        initialSlide: $scope.emotionLogs.length - 1,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        infinite: false,
        asNavFor: '.slick-bot'
    }

    $scope.slickConfigBot = {
        // rtl: true,
        centerMode: true,
        adaptiveHeight: true,
        initialSlide: $scope.emotionLogs.length - 1,
        mobileFirst: true,
        slidesToShow: 3,
        swipeToSlide: true,
        infinite: false,
        focusOnSelect: true,
        accessibility: true,
        asNavFor: '.slick-top'
    }

    $scope.slickConfigLoaded = true;

    // $scope.slickUpdate = function () {
    //   $scope.slickConfig2Loaded = false;
    //   $scope.number2[2] = 'ggg';
    //   $scope.number2.push(Math.floor((Math.random() * 10) + 100));
    //   $timeout(function () {
    //     $scope.slickConfig2Loaded = true;
    //   });
    // };

}]);