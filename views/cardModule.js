var app = angular.module('CardRender', []);

app.controller('CardController', function($scope) {
    $scope.cards=['ace_s', 'two_s', 'king_h', 'jack_d', 'queen_h'];
});

console.log('working')
