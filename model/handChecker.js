function HandChecker() {
};

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


module.exports = HandChecker;
