function HandChecker(hand) {
  this.sortedHand = sortCards(hand)
  this.cardsFrequency = frequency(this.sortedHand, 0)
  this.suitFrequency = frequency(this.sortedHand, 1)
  this.sortedCardValues = valueSuitSplitter(this.sortedHand)[0]
  this.sortedCardSuits = valueSuitSplitter(this.sortedHand)[1]

  function sortCards(handToSort) {
    var suits = ['s', 'h', 'd', 'c']
    var cards = [ 'A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2' ];
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
      splittedCards = [[],[]];
      for ( var i = 0; i < cards.length; i++ ) {
        card = cards[i].split('')
        splittedCards[0].push(card[0])
        splittedCards[1].push(card[1])
      }
      return splittedCards
    }

    function frequency(handToCheckFreq, n) {
      var freq = [], prev;
      for ( var i = 0; i < handToCheckFreq.length; i++ ) {
        if ( handToCheckFreq[i][n] !== prev ) {
          freq.push(1);
        } else {
          freq[freq.length -1 ]++;
        }
        prev = handToCheckFreq[i][n];
      }
      return freq;
    }
};

HandChecker.prototype.poker = function() {
  if (this.cardsFrequency.includes(4)) return this.bestHand(4)
}

HandChecker.prototype.flush = function() {
  console.log(Math.max(this.suitFrequency))
  if (this.suitFrequency.sort()[0] >= 5) return true
}

HandChecker.prototype.straight = function() {
  var straightCards = "AKQJT98765432A5432"
  var possibeStraight = this.sortedCardValues.filter(unique).join('')
  for (var i = 0; i < possibeStraight.length - 4; i++) {
    if (straightCards.includes(possibeStraight.substr(i, 5))) return true
  }

  if (straightCards.includes(possibeStraight[0] + possibeStraight.substr(possibeStraight.length - 4, 4))) return true

  function unique(value, index, self) {
      return self.indexOf(value) === index;
  }
}

HandChecker.prototype.fullHouse = function() {
  if (this.cardsFrequency.includes(3) && this.cardsFrequency.includes(2)) return true
}
//
HandChecker.prototype.threeOfAKind = function() {
  if (this.cardsFrequency.includes(3)) return this.bestHand(3)
}

HandChecker.prototype.twoPair = function() {
  if (this.modeAndFrequency(this.sortedCardValues)[1][0] === 2 && this.modeAndFrequency(this.sortedCardValues)[1][1] === 2) return true
}

HandChecker.prototype.pair = function(cards) {
  if (this.cardsFrequency.includes(2)) return this.bestHand(2)
}

HandChecker.prototype.modeAndFrequency = function(hand) {
  var a = [], b = [], prev;
  for ( var i = 0; i < hand.length; i++ ) {
    if ( hand[i][0] !== prev ) {
      a.push(hand[i]);
      b.push(1);
    } else {
      a.push(hand[i]);
      b[b.length-1]++;
    }
    prev = hand[i][0];
  }
  return [a, b];
}

HandChecker.prototype.bestHand = function(n) {
  return this.sortedHand.splice([this.cardsFrequency.indexOf(n)], n).concat(this.sortedHand.splice(0, 5 - n))
}

module.exports = HandChecker;
