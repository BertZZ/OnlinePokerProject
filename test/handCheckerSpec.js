var assert = require('assert');
var expect = require('chai').expect;

const HandChecker = require('../model/HandChecker.js')

describe('HandChecker', function() {

  var handChecker;
  var cards;

  // beforeEach(function(currentCards) {
  //   handChecker = new HandChecker(cards);
  // });

  it('returns true for a pair', function() {
    cards = ['3s','3c','5h','6h','7h', 'Ts', ]
    handChecker = new HandChecker(cards)
    expect(handChecker.pair()).to.equal(true);
  });

  it('returns true for two pair', function() {
    cards = ['3s','3h','5d','5c','7d']
    handChecker = new HandChecker(cards)
    expect(handChecker.twoPair()).to.equal(true);
  });

  it('returns true for three of a kind', function() {
    cards = ['6s','6c','6h','5h','7d']
    handChecker = new HandChecker(cards)
    expect(handChecker.threeOfAKind(cards)).to.equal(true);
  });

  it('returns true for full house', function() {
    cards = ['6s','6c','5s','5c','5h']
    handChecker = new HandChecker(cards)
    expect(handChecker.fullHouse()).to.equal(true);
  });

  it('returns true for flush', function() {
    cards = ['As', '2s', 'Js', '6s', '7s']
    handChecker = new HandChecker(cards)
    expect(handChecker.flush()).to.equal(true)
  })

  it('returns true for a straight', function() {
    cards = [ 'Ts', 'Js', '9c', '8h', 'Qd' ]
    handChecker = new HandChecker(cards)
    expect(handChecker.straight(cards)).to.equal(true)
  });

  it('returns true for a poker', function() {
    cards = [ 'As', 'Ad', 'Ac', 'Ah', 'Ks']
    handChecker = new HandChecker(cards)
    expect(handChecker.poker()).to.equal(true)
  })

});
