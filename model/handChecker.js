function HandChecker() {
};

HandChecker.prototype.poker = function(cards) {
  if (this.modeAndFrequency(cards)[1].includes(4)) return true
}

HandChecker.prototype.flush = function(cards) {
  if (this.modeAndFrequency(Object.values(this.valueSuitSplitter(cards)))[1][0] >= 5) return true
}

HandChecker.prototype.straight = function(cards) {
  var straightCards = "AKQJT98765432A5432"
  if (straightCards.includes(this.sortCards(cards).join(''))) return true
}

HandChecker.prototype.fullHouse = function(cards) {
  if (this.modeAndFrequency(cards)[1].includes(3) && this.modeAndFrequency(cards)[1].includes(2)) return true
}

HandChecker.prototype.threeOfAKind = function(cards) {
  if (this.modeAndFrequency(cards)[1].includes(3)) return true
}

HandChecker.prototype.twoPair = function(cards) {
  if (this.modeAndFrequency(cards)[1][0] === 2 && this.modeAndFrequency(cards)[1][1] === 2) return true
}

HandChecker.prototype.pair = function(cards) {
  if (this.modeAndFrequency(cards)[1].includes(2)) return true
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

HandChecker.prototype.valueSuitSplitter = function(cards) {
  cardsHash = {};
  for ( var i = 0; i < cards.length; i++ ) {
      card = cards[i].split('')
      cardsHash[card[0]] = card[1];
  }
  return cardsHash
}

HandChecker.prototype.sortCards = function(cards) {
  var cardsOrder = [ 'A', 'K', 'Q', 'J', 'T', 9, 8, 7, 6, 5, 4, 3, 2 ];

  return cards.sort(function(a, b) {
    return cardsOrder.indexOf(a) - cardsOrder.indexOf(b);
  });
};

Object.values = obj => Object.keys(obj).map(key => obj[key]);

module.exports = HandChecker;
