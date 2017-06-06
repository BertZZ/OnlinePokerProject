angular.module('ViewController',[])
  .controller('CardRenderer', function($scope){
    $scope.cards = ['ace_s', 'two_s', 'king_h', 'jack_d', 'queen_h']
  }

);
