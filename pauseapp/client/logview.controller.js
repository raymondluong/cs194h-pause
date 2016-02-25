angular.module('pauseApp').controller('LogviewCtrl', ['$scope', '$meteor', function ($scope, $meteor) {
	console.log('logview controller');

    // $scope.emotionLogs = [
    //     {color: 'green', emotion: 'happy', date: new Date("Wed Feb 24 2016 23:46:38 GMT-0800")},
    //     {color: 'red', emotion: 'happy', date: new Date("Wed Feb 24 2016 23:46:38 GMT-0800")},
    //     {color: 'purple', emotion: 'happy', date: new Date("Wed Feb 24 2016 23:46:38 GMT-0800")},
    //     {color: 'blue', emotion: 'happy', date: new Date("Wed Feb 24 2016 23:46:38 GMT-0800")},
    //     {color: 'yellow', emotion: 'happy', date: new Date("Wed Feb 24 2016 23:46:38 GMT-0800")},
    //     {color: 'orange', emotion: 'happy', date: new Date("Wed Feb 24 2016 23:46:38 GMT-0800")}
    // ];
    $scope.emotionLogs = $meteor.collection(Logs);
    console.log($scope.emotionLogs);

    $scope.monthNames = ["jan", "feb", "mar", "apr", "may", "jun",
        "jul", "aug", "sep", "oct", "nov", "dec"
    ];

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