function HandChecker() {
}

HandChecker.prototype.bestHand = function(hand) {
  this.sortedHand = this.sortCards(hand)
  this.sortedHandBySuit = sortCardsBySuit(this.sortedHand)
  this.cardsFrequency = frequency(this.sortedHand, 0)
  this.suitFrequency = frequency(this.sortedHandBySuit, 1)
  this.sortedCardValues = this.valueSuitSplitter(this.sortedHand)[0]

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

  return this.getBestHand()
};

HandChecker.prototype.royalFlush = function() {
  return this.straight()
}

HandChecker.prototype.straightFlush = function() {
  return this.straight()
}

HandChecker.prototype.poker = function() {
  return this.cardsFrequency[2].splice(0, 5)
}

HandChecker.prototype.flush = function() {
  return this.suitFrequency[2].concat().splice(0, 5)
}

HandChecker.prototype.straight = function() {
    var straightCards = [];
    var straightString = this.straightString
    for (k = 0; k < 5; k++) {
      straightCards.push(this.sortedHand.find(function(element) {
        return (element[0] == straightString[k])
      }))
    }
    return straightCards
}

HandChecker.prototype.isRoyalFlush = function() {
  if (this.isFlush() && this.flush()[0][0] == 'A' && this.isStraight(this.valueSuitSplitter(this.flush())[0])) return true
}

HandChecker.prototype.isStraightFlush = function() {
  if (this.isFlush() && this.isStraight(this.valueSuitSplitter(this.flush())[0])) return true
}

HandChecker.prototype.isPoker = function() {
  return this.cardsFrequency[0][0] == 4
}

HandChecker.prototype.fullHouse = function() {
   return this.cardsFrequency[2].splice(0, 5)
}

HandChecker.prototype.threeOfAKind = function() {
  return this.cardsFrequency[2].splice(0, 3).concat(this.sortCards(this.cardsFrequency[2]).splice(0, 2))
}

HandChecker.prototype.twoPair = function() {
  return this.cardsFrequency[2].splice(0, 4).concat(this.sortCards(this.cardsFrequency[2]).splice(0, 1))
}

HandChecker.prototype.pair = function() {
  return this.cardsFrequency[2].splice(0, 2).concat(this.sortCards(this.cardsFrequency[2]).splice(0,3))
}

HandChecker.prototype.isFullHouse = function() {
  return this.cardsFrequency[0][1] == 3 && this.cardsFrequency[0][3] >= 2
}

HandChecker.prototype.isFlush = function() {
  return this.suitFrequency[0][0] >= 5
}

HandChecker.prototype.isStraight = function(checkStraight = this.sortedCardValues) {
  var straightCards = "AKQJT98765432A5432"
  var possibleStraight = checkStraight.filter(unique).join('')
  var possibleSmallStraight = possibleStraight[0] + possibleStraight.substr(possibleStraight.length - 4, 4)
  for (var i = 0; i < possibleStraight.length - 4; i++) {
    if (straightCards.includes(possibleStraight.substr(i, 5))) { this.straightString = possibleStraight;
      return true
    }
  }

  if (straightCards.includes(possibleSmallStraight)) { this.straightString = possibleSmallStraight;
    return true
  }

  function unique(value, index, self) {
      return self.indexOf(value) === index;
  }
  return false
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

HandChecker.prototype.highCard = function() {
   return this.cardsFrequency[2].splice(0, 5)
}

HandChecker.prototype.sortCards = function(handToSort) {
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

HandChecker.prototype.getBestHand = function() {
  if (this.isRoyalFlush()) return handValue('Royal flush', this.royalFlush())
  if (this.isStraightFlush()) return handValue('Straight Flush', this.straightFlush())
  if (this.isPoker()) return handValue('Poker', this.poker())
  if (this.isFullHouse()) return handValue('Full House', this.fullHouse())
  if (this.isFlush()) return handValue('Flush', this.flush())
  if (this.isStraight()) return handValue('Straight', this.straight())
  if (this.isThreeOfAKind()) return handValue('Three of a Kind', this.threeOfAKind())
  if (this.isTwoPair()) return handValue('Two Pairs', this.twoPair())
  if (this.isPair()) return handValue('A Pair', this.pair())
  else return handValue('High Card', this.highCard())

  function handValue(hand, method) {
    return { name: hand,
      cards: method
    }
  }
}

HandChecker.prototype.valueSuitSplitter = function(cards) {
  splittedCards = [[],[]];
  for ( var i = 0; i < cards.length; i++ ) {
    card = cards[i].split('')
    splittedCards[0].push(card[0])
    splittedCards[1].push(card[1])
  }
  return splittedCards
}

module.exports = HandChecker;
