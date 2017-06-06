 function CardDeck() {
  this.deck = ['As', 'Ah', 'Ad', 'Ac', 'Ks', 'Kh', 'Kd', 'Kc', 'Qs', 'Qh', 'Qd', 'Qc', 'Js', 'Jh', 'Jd', 'Jc', 'Ts', 'Th', 'Td', 'Tc', '9s', '9h', '9d', '9c', '8s', '8h', '8d', '8c', '7s', '7h', '7d', '7c', '6s', '6h', '6d', '6c', '5s', '5h', '5d', '5c', '4s', '4h', '4d', '4c', '3s', '3h', '3d', '3c', '2s', '2h', '2d', '2c']
}

CardDeck.prototype.shuffleDeck = function() {
  var tempDeck = [];

  for (var i = 0; i < 52-1; i ++) {
    tempDeck.push(this.deck.splice(Math.floor(Math.random()* 52-tempDeck.length), 1)[0]);
  }

  tempDeck.push(this.deck[0]);
  this.deck = tempDeck;
}

CardDeck.prototype.checkDeck = function(array) {
  var valuesSoFar = Object.create(null);

  for (var i = 0; i < array.length; ++i) {
      var value = array[i];
      if (value in valuesSoFar) {
          return false;
      }
      valuesSoFar[value] = false;
  }
  return true;
}

module.exports = CardDeck;
