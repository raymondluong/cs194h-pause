angular.module('pauseApp').controller('LogviewCtrl', ['$scope', function ($scope) {
	console.log('logview controller');

    $scope.slickConfigLoaded = true;

    $scope.slickItems = [{color: 'green', time: 1}, {color: 'red', time: 2}, {color: 'purple', time: 3}, {color: 'blue', time: 4}, {color: 'yellow', time: 5}];

    $scope.slickConfigTop = {
        adaptiveHeight: true,
        initialSlide: $scope.slickItems.length - 1,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slick-bot'
    }

    $scope.slickConfigBot = {
        // rtl: true,
        centerMode: true,
        adaptiveHeight: true,
        initialSlide: $scope.slickItems.length - 1,
        mobileFirst: true,
        slidesToShow: 3,
        swipeToSlide: true,
        infinite: false,
        focusOnSelect: true,
        asNavFor: '.slick-top'
    }

    // $scope.slickUpdate = function () {
    //   $scope.slickConfig2Loaded = false;
    //   $scope.number2[2] = 'ggg';
    //   $scope.number2.push(Math.floor((Math.random() * 10) + 100));
    //   $timeout(function () {
    //     $scope.slickConfig2Loaded = true;
    //   });
    // };

}]);