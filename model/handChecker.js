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
          // console.log(freq)
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
      return freq;
    }
};

HandChecker.prototype.poker = function() {
  if (this.cardsFrequency.includes(4)) return this.bestHand(4)
}

HandChecker.prototype.flush = function() {
  if (this.suitFrequency.some(x => x >= 5)) return this.sortedHandBySuit.splice([this.suitFrequency.indexOf(5)], 5)
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
  console.log(this.sortedHand)
  console.log(this.cardsFrequency)
  if (this.cardsFrequency.filter(function (elem) {
    return elem == 2;
    }).length >= 2)
  if (this.cardsFrequency.includes(3) && this.cardsFrequency.includes(2)) return this.sortedHand.splice([this.cardsFrequency.indexOf(3)], 3).concat(this.sortedHand.splice([this.cardsFrequency.indexOf(2)], 2))
}

HandChecker.prototype.threeOfAKind = function() {
  if (this.cardsFrequency.includes(3)) return this.bestHand(3)
}

HandChecker.prototype.twoPair = function() {
  if (this.cardsFrequency.filter(function (elem) {
    return elem == 2;
}).length >= 4) { returnArray = this.sortedHand.splice([this.cardsFrequency.indexOf(2)], 2);
  this.cardsFrequency.splice([this.cardsFrequency.indexOf(2)], 2);
  returnArray = returnArray.concat(this.sortedHand.splice([this.cardsFrequency.indexOf(2)], 2)).concat(this.sortedHand.splice(0, 1))
  return returnArray
  }
}

HandChecker.prototype.pair = function(cards) {
  if (this.cardsFrequency.includes(2)) return this.bestHand(2)
}

HandChecker.prototype.
function modeAndFrequency(hand) {
  var a = [], b = [], prev;
  for ( var i = 0; i < hand.length; i++ ) {
    if ( hand[i][0] !== prev ) {
      a.push(hand[i]);
      b.push(1);
    } else {
      a.push(hand[i]);
      b.push(b[b.length-1]);
      for (var n = 1; n <= b[b.length-1]; n++) {
        b[b.length-n]++
      }
    }
    prev = hand[i][0];
  }
  return [a, b];
}

HandChecker.prototype.bestHand = function(n) {
  return this.sortedHand.splice([this.cardsFrequency.indexOf(n)], n).concat(this.sortedHand.splice(0, 5 - n))
}

module.exports = HandChecker;