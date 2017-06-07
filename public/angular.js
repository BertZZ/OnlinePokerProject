angular.module('ViewController',[])
  .controller('PlayerRender',['$scope', PlayerRender]);



  function PlayerRender($scope){
    $scope.playerCards = ['back', 'back'];
    $scope.communalCards = ['back','back','back','back','back'];
    console.log($scope.communalCards);

    $scope.dealPlayer = function() {
      $scope.playerCards = ['ace_s', 'queen_h'];
    };

    $scope.dealCommunal = function(){
      $scope.communalCards = ['king_s', 'two_c', 'king_h', 'jack_d', 'queen_s'];
    }
  }
