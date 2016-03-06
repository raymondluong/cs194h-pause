angular.module('pauseApp').controller('LogviewCtrl', ['$scope', '$meteor', function ($scope, $meteor) {

  $scope.emotionLogs = [];
  $scope.currentUser = Meteor.userId();

  if (Meteor.userId()) {
    $scope.emotionLogs = $meteor.collection(function() {
      return Logs.find({user: Meteor.userId()});
    });
  }
  
  $scope.monthNames = ["jan", "feb", "mar", "apr", "may", "jun",
      "jul", "aug", "sep", "oct", "nov", "dec"];

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
      },
      "serene": {
          "quote": "Do your work, then step back. The only path to serenity.",
          "author": "Lao Tzu"
      },
      "sleepy": {
          "quote": "No day is so bad it can't be fixed with a nap.",
          "author": "Carrie Snow"
      },
      "tired": {
          "quote": "Our fatigue is often caused not by work, but by worry, frustration and resentment.",
          "author": "Dale Carnegie"
      },
      "gloomy": {
          "quote": "Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.",
          "author": "Henry Wadsworth Longfellow"
      },
      "satisfied": {
          "quote": "There are two ways to get enough. One is to continue to accumulate more and more. The other is to desire less.",
          "author": "G.K. Chesterton"
      },
      "happy": {
          "quote": "Happiness is a how; not a what. A talent, not an object.",
          "author": "Herman Hesse"
      },
      "glad": {
          "quote": "It takes more distress and poison to kill someone who has peace of mind and loves life.",
          "author": "Bernie Siegal"
      },
      "miserable": {
          "quote": "I have learned now that while those who speak about one's miseries usually hurt, those who keep silence hurt more.",
          "author": "C.S. Lewis"
      },
      "sad": {
          "quote": "Sadness is but a wall between two gardens.",
          "author": "Kahlil Gibran"
      },
      "calm": {
          "quote": "Calmness is the cradle of power.",
          "author": "Josiah Gilbert Holland"
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
