angular.module('ViewController').component('start', {
template:
'<div>' +
  '<button ng-click="dealCommunal()">DEAL COMMUNAL</button>' +
      '<img id="{{ communalCards[0] }}" class="cards"/>' +
      '<img id="{{ communalCards[2] }}" class="cards"/>' +
      '<img id="{{ communalCards[3] }}" class="cards"/>' +
      '<img id="{{ communalCards[4] }}" class="cards"/>' +
'</div>' +

'<div class="player">' +
  '<button ng-click="dealPlayer()">DEAL</button>' +
      '<img id="{{ playerCards[0] }}" class="cards"/><img id="{{ playerCards[1] }}" class="cards"/>' +
'</div>',
controller: function($scope){
  $scope.playerCards = ['back', 'back'];
  $scope.communalCards = ['back','back','back','back','back'];

  $scope.dealPlayer = function() {
    $scope.playerCards = ['ace_s', 'queen_h'];
    console.log('working')
  };

  $scope.dealCommunal = function(){
    $scope.communalCards = ['king_s', 'two_c', 'king_h', 'jack_d', 'queen_s'];
  }


}
})
