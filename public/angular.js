var myApp = angular.module('ViewController', ['ui.router'])

myApp.config(function($stateProvider) {
  // var helloState = {
  //   name: 'hello',
  //   url: '/hello',
  //   template: '</br><a ui-sref="about">Deal</a>'
  // }

  var aboutState = {
    name: 'about',
    url: '/start',
    component: 'start'


  }

  // $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});




  // .controller('PlayerRender',['$scope', PlayerRender]);
  //
  // function PlayerRender($scope){
  //   $scope.playerCards = ['back', 'back'];
  //   $scope.communalCards = ['back','back','back','back','back'];
  //   $scope.screenURL = "";
  //
  //   $scope.dealPlayer = function() {
  //     $scope.playerCards = ['ace_s', 'queen_h'];
  //   };
  //
  //   $scope.dealCommunal = function(){
  //     $scope.communalCards = ['king_s', 'two_c', 'king_h', 'jack_d', 'queen_s'];
  //   }
  //
  //   $scope.changeURL = function() {
  //     $scope.screenURL = 'dealURL';
  //     // $location.url('/show_cards.html');
  //     console.log('working');
  //   }
  // }
