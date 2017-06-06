function HandChecker(hand) {
  this.sortedHand = sortCards(hand)
  this.sortedCardValues = valueSuitSplitter(this.sortedHand)[0]
  this.sortedCardSuits = valueSuitSplitter(this.sortedHand)[1]

  function sortCards(handToSort) {
    var suits = ['s', 'h', 'd', 'c']
    var cards = [ 'A', 'K', 'Q', 'J', 'T', 9, 8, 7, 6, 5, 4, 3, 2 ];
    var cardsOrder = []
    cards.forEach(function(card){
      suits.forEach(function(suit){
        cardsOrder.push(card + suit);
      });
    });
    return handToSort.sort(function(a, b) {
      return cardsOrder.indexOf(a) - cardsOrder.indexOf(b);
    });
  };

  function valueSuitSplitter(cards) {
      splitedCards = [[],[]];
      for ( var i = 0; i < cards.length; i++ ) {
        card = cards[i].split('')
        splitedCards[0].push(card[0])
        splitedCards[1].push(card[1])
      }
      return splitedCards
    }
};

HandChecker.prototype.poker = function() {
  if (this.modeAndFrequency(this.sortedCardValues)[1].includes(4)) return true
}

HandChecker.prototype.flush = function() {
  if (this.modeAndFrequency(this.sortedCardSuits)[1] >= 5) return true
}

HandChecker.prototype.straight = function() {
  var straightCards = "AKQJT98765432A5432"
  console.log(this.sortedCardValues.join(''))
  if (straightCards.includes(this.sortedCardValues.join(''))) return true
}

HandChecker.prototype.fullHouse = function() {
  if (this.modeAndFrequency(this.sortedCardValues)[1].includes(3) && this.modeAndFrequency(this.sortedCardValues)[1].includes(2)) return true
}
//
HandChecker.prototype.threeOfAKind = function() {
  if (this.modeAndFrequency(this.sortedCardValues)[1].includes(3)) return true
}

HandChecker.prototype.twoPair = function() {
  if (this.modeAndFrequency(this.sortedCardValues)[1][0] === 2 && this.modeAndFrequency(this.sortedCardValues)[1][1] === 2) return true
}

HandChecker.prototype.pair = function(cards) {
  if (this.modeAndFrequency(this.sortedCardValues)[1].includes(2)) return true
}

HandChecker.prototype.modeAndFrequency = function(arr) {
  var a = [], b = [], prev;
  arr.sort();
  for ( var i = 0; i < arr.length; i++ ) {
    if ( arr[i] !== prev ) {
      a.push(arr[i]);
      b.push(1);
    } else {
      b[b.length-1]++;
    }
    prev = arr[i];
  }
  return [a, b];
}

module.exports = HandChecker;
