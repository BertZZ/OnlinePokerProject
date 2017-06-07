function HandChecker(hand) {
  this.sortedHand = sortCards(hand)
  this.sortedHandBySuit = sortCardsBySuit(this.sortedHand)
  this.cardsFrequency = frequency(this.sortedHand, 0)
  this.suitFrequency = frequency(this.sortedHandBySuit, 1)
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
    return handToSort.concat().sort(function(a, b) {
      return cardsOrder.indexOf(a) - cardsOrder.indexOf(b);
    });
  };

  function sortCardsBySuit(handToSort) {
    return handToSort.concat().sort(function(a, b) {
      if (a[1] < b[1]) {
        return -1;
      }
      if (a[1] > b[1]) {
        return 1;
      }
        return 0;
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
          freq[freq.length-1]++;
          freq.push(freq[freq.length-1]);
              if (freq[freq.length-1] >= 3) {freq[freq.length-3]++}
              if (freq[freq.length-1] >= 4) {freq[freq.length-4]++}
              if (freq[freq.length-1] >= 5) {freq[freq.length-5]++}
              if (freq[freq.length-1] >= 6) {freq[freq.length-6]++}
              if (freq[freq.length-1] >= 7) {freq[freq.length-7]++}
          }
        prev = handToCheckFreq[i][n];
      }
      array = [];
      for (k = 0; k < 7; k++) {
        array.push([handToCheckFreq[k],freq[k],k])
      }
      array.sort(function(a, b) {
        if (a[1] > b[1]) {
          return -1;
        }
        if (a[1] < b[1]) {
          return 1;
        }
          return 0;
        });
    var array2 = [[],[],[]]
    for(m = 0; m < 7; m++) {
      array2[0].push(array[m][1])
      array2[1].push(array[m][2])
      array2[2].push(array[m][0])
    }
    return array2
  }
};

HandChecker.prototype.poker = function() {
  return { poker: this.cardsFrequency[2].splice(0, 5) }
}

HandChecker.prototype.flush = function() {
  return { flush: this.suitFrequency[2].splice(0, 5) }
}

HandChecker.prototype.straight = function() {
  var straightCards = "AKQJT98765432A5432"
  var possibleStraight = this.sortedCardValues.filter(unique).join('')
  var possibleSmallStraight = possibleStraight[0] + possibleStraight.substr(possibleStraight.length - 4, 4)
  for (var i = 0; i < possibleStraight.length - 4; i++) {
    if (straightCards.includes(possibleStraight.substr(i, 5))) return getStraight(possibleStraight.substr(i, 5), this.sortedHand)
  }

  if (straightCards.includes(possibleSmallStraight)) return getStraight(possibleSmallStraight, this.sortedHand)

  function unique(value, index, self) {
      return self.indexOf(value) === index;
  }

  function getStraight(string, sh) {
    var straight = [];
    for (k = 0; k < 5; k++) {
      straight.push(sh.find(function(element) {
        return (element[0] == string[k])
      }))
    }
    return straight
  }
}

HandChecker.prototype.isPoker = function() {
  return this.cardsFrequency[0][0] == 4
}

HandChecker.prototype.fullHouse = function() {
   return { fullHouse: this.cardsFrequency[2].splice(0, 5) }
}

HandChecker.prototype.threeOfAKind = function() {
  return { threeOfAKind: this.cardsFrequency[2].splice(0, 3).concat(this.reSortCards(this.cardsFrequency[2]).splice(0, 2)) }
}

HandChecker.prototype.twoPair = function() {
  return { twoPair: this.cardsFrequency[2].splice(0, 4).concat(this.reSortCards(this.cardsFrequency[2]).splice(0, 1)) }
}

HandChecker.prototype.pair = function() {
  return { pair: this.cardsFrequency[2].splice(0, 2).concat(this.reSortCards(this.cardsFrequency[2]).splice(0,3)) }
}

HandChecker.prototype.isFullHouse = function() {
  return this.cardsFrequency[0][1] == 3 && this.cardsFrequency[0][3] >= 2
}

HandChecker.prototype.isFlush = function() {
  return this.suitFrequency[0][0] >= 5
}

HandChecker.prototype.isStraight = function() {

}

HandChecker.prototype.isThreeOfAKind = function() {
  return this.cardsFrequency[0].includes(3)
}

HandChecker.prototype.isTwoPair = function() {
  return this.cardsFrequency[0][1] == 2 && this.cardsFrequency[0][2] == 2
}

HandChecker.prototype.isPair = function() {
  return this.cardsFrequency[0].includes(2)
}

HandChecker.prototype.reSortCards = function(handToSort) {
  var suits = ['s', 'h', 'd', 'c']
  var cards = [ 'A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2' ];
  var cardsOrder = []
  cards.forEach(function(card){
    suits.forEach(function(suit){
      cardsOrder.push(card + suit);
    });
  });
  return handToSort.concat().sort(function(a, b) {
    return cardsOrder.indexOf(a) - cardsOrder.indexOf(b);
  });
};

HandChecker.prototype.bestHand = function() {
  if (this.isPoker()) return this.poker()
  if (this.isFullHouse()) return this.fullHouse()
  if (this.isFlush()) return this.flush()
  if (this.isThreeOfAKind()) return this.threeOfAKind()
  if (this.isTwoPair()) return this.twoPair()
  if (this.isPair()) return this.pair()
}

module.exports = HandChecker;
