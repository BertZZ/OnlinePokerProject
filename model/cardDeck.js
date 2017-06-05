function CardDeck() {
  this.deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
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
